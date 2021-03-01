import { useImage } from 'react-image'
import styled from 'styled-components'

import { enFont, tabletSize, desktopSize } from '../styles'
import heroImg from '../assets/hero.png'

const S = {}

const Hero = () => {
  const { src } = useImage({
    srcList: heroImg
  })
  return (
    <S.Hero>
      <S.TitleContainer>
        <S.MainTitle>For the future.</S.MainTitle>
        <S.SubTitle>123h4wk portfolio</S.SubTitle>
      </S.TitleContainer>
      <S.HeroImage src={src} alt="hero_image" />
    </S.Hero>
  )
}

export default Hero

S.Hero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: ${desktopSize}) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
  }
`
S.TitleContainer = styled.div`
  @media screen and (min-width: ${desktopSize}) {
    width: 50%;
    padding-top: 72px;
    padding-left: 32px;
  }
`
S.MainTitle = styled.h1`
  ${enFont}
  text-align: center;
  font-size: min(12vw, 48px);
  padding-top: min(14vw, 56px);
  @media screen and (min-width: ${tabletSize}) {
    font-size: 48px;
    padding-top: 56px;
  }
`
S.SubTitle = styled.h3`
  ${enFont}
  text-align: center;
  font-size: min(6vw, 24px);
  padding-top: min(4vw, 16px);
  @media screen and (min-width: ${tabletSize}) {
    font-size: 24px;
    padding-top: 16px;
  }
`
S.HeroImage = styled.img`
  display: block;
  width: 100%;
  padding: min(8vw, 24px) 5vw;
  @media screen and (min-width: ${tabletSize}) {
    max-width: 410px;
    padding: 24px 0;
  }
  @media screen and (min-width: ${desktopSize}) {
    max-width: 447px;
    padding: 48px 0;
  }
`
