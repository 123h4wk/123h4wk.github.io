import { Suspense } from 'react'

import { GlobalStyle } from './styles'
import Section from './components/Section'
import Hero from './components/Hero'
import WebDeveloper from './components/WebDeveloper'
import Illustrator from './components/Illustrator'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  const sectionItems = [
    Hero,
    WebDeveloper,
    Illustrator,
    Contact
  ]

  return (
    <Suspense fallback={<div style={{ height: '6000px' }}></div>}>
      <GlobalStyle />
      {sectionItems.map((SectionItem, idx) => (
        <Section index={idx} key={idx}>
          <SectionItem />
        </Section>
      ))}
      <Footer />
    </Suspense>
  )
}

export default App
