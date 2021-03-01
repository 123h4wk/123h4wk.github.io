import Skill from './Skill'
import webdevImg from '../assets/webdeveloper.png'
import githubIcon from '../assets/github.png'
import qiitaIcon from '../assets/qiita.png'

const WebDeveloper = () => (
  <Skill
    title='Web Developer'
    description={`
      フロントエンド開発に携わることが多く、ReactやVue.jsを使用した
      シングルページアプリケーションの設計、実装を行っています。
      読みやすく保守しやすいコードが書けるよう、日々研鑽を続けています。
    `}
    image={webdevImg}
    icons={[
      {
        url: 'https://github.com/123h4wk',
        image: githubIcon
      }, {
        url: 'https://qiita.com/123h4wk',
        image: qiitaIcon,
      }
    ]}
  />
)

export default WebDeveloper
