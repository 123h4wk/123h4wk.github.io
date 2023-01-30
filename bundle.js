'use strict'

const fs = require('fs-extra')
const chokidar = require('chokidar')
const ejs = require('ejs')
const esbuild = require('esbuild')
const htmlMinifier = require('html-minifier')

const DIST_DIR = 'dist'
const PUBLIC_DIR = 'src/public'
const PAGES_DIR = 'src/pages'
const PARTIALS_NAME = '_partials'
const ASSETS_DIR = 'src/assets'

async function copyPublic (shouldOptimize = false) {
  if (shouldOptimize) {
    await fs.remove(DIST_DIR)
  }
  await fs.copy(PUBLIC_DIR, DIST_DIR)
}

async function compileViews (shouldOptimize = false) {
  const pages = await fs.readdir(PAGES_DIR)
  for (const page of pages) {
    if (page.startsWith(PARTIALS_NAME)) {
      continue
    }
    const source = await fs.readFile(PAGES_DIR + '/' + page, 'utf-8')
    let content = ejs.render(source, {}, { root: PAGES_DIR + '/' + PARTIALS_NAME })
    if (shouldOptimize) {
      content = htmlMinifier.minify(content, {
        collapseBooleanAttributes: true,
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        removeOptionalTags: true,
        removeAttributeQuotes: true,
        removeEmptyAttributes: true,
        removeComments: true,
        removeEmptyElements: true,
        removeRedundantAttributes: true,
        removeTagWhitespace: true
      })
    }
    const distPath = DIST_DIR + '/' + page.replace('.ejs', '.html')
    await fs.outputFile(distPath, content, 'utf-8')
  }
}

async function compileAssets (shouldOptimize = false) {
  await esbuild.build({
    entryPoints: [ASSETS_DIR + '/index.js'],
    outdir: DIST_DIR + '/assets',
    bundle: true,
    sourcemap: !shouldOptimize,
    minify: shouldOptimize
  })
}

async function makeDistribution ({ shouldOptimize }) {
  await copyPublic(shouldOptimize)
  await compileAssets(shouldOptimize)
  await compileViews(shouldOptimize)
}

async function watchFiles () {
  const viewsWatcher = chokidar.watch(PAGES_DIR)
  viewsWatcher.on('change', path => {
    console.log('views::change ' + path)
    compileViews()
  })

  const assetsWatcher = chokidar.watch(ASSETS_DIR)
  assetsWatcher.on('change', path => {
    console.log('assets::change ' + path)
    compileAssets()
  })

  const publicWatcher = chokidar.watch(PUBLIC_DIR, { ignoreInitial: true })
  publicWatcher.on('add', path => {
    console.log('public::add ' + path)
    copyPublic()
  })

  console.log('watch source files...')
}

function main () {
  const arg = process.argv[2]
  if (arg === 'build') {
    makeDistribution({ shouldOptimize: true })
  }
  if (arg === 'dev') {
    makeDistribution({ shouldOptimize: false }).then(watchFiles)
  }
}

main()
