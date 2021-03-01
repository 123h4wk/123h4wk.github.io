import Skill from './Skill'

import illustratorImg from '../assets/illustrator.png'
import twitterIcon from '../assets/twitter.png'
import pixivIcon from '../assets/pixiv.png'

const Illustrator = () => (
  <Skill
    title='Illustrator'
    description={`
      イラストや漫画をSNSで公開しています。魅力的な線画を引くことに関心が強く、
      躍動感のあるイラストになるよう心がけています。漫画に関しては視線誘導を
      軸としたコマ割り、全体的な読みやすさを重視し執筆しています。
    `}
    image={illustratorImg}
    icons={[
      {
        url: 'https://twitter.com/123h4wk',
        image: twitterIcon
      }, {
        url: 'https://www.pixiv.net/users/17273272',
        image: pixivIcon
      }
    ]}
    isReverse
  />
)

export default Illustrator
