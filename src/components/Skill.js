import { useImage } from 'react-image'
import styled from 'styled-components'

import { enFont, jpFont, tabletSize, desktopSize } from '../styles'

const S = {}

const Skill = ({ title, image, description, icons, isReverse }) => {
  const { src } = useImage({
    srcList: image
  })
  return (
    <S.Wrapper isReverse={isReverse}>
      <S.SideImage src={src} />
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.InnerImage src={src} />
        <S.Description>{description}</S.Description>
        <S.IconField>
          {icons.map((icon, idx) => (
            <a href={icon.url} key={idx}>
              <S.Icon src={icon.image} />
            </a>
          ))}
        </S.IconField>
      </S.Content>
    </S.Wrapper>
  )
}

export default Skill

S.Wrapper = styled.div`
  padding: 16px 32px;
  @media screen and (min-width: ${desktopSize}) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: ${({ isReverse }) => isReverse ? 'row-reverse' : 'row'};
  }
`
S.InnerImage = styled.img`
  display: block;
  width: 100%;
  @media screen and (min-width: ${tabletSize}) {
    width: 400px;
    margin: 0 auto;
  }
  @media screen and (min-width: ${desktopSize}) {
    display: none;
  }
`
S.SideImage = styled(S.InnerImage)`
  display: none;
  @media screen and (min-width: ${desktopSize}) {
    display: block;
    width: 50vw;
    max-width: 484px;
    margin: 0 auto;
  }
`
S.Content = styled.div``
S.Title = styled.h2`
  ${enFont}
  text-align: center;
  font-size: min(10vw, 40px);
  padding-top: min(5vw, 32px);
  @media screen and (min-width: ${tabletSize}) {
    font-size: 40px;
    padding-top: 32px;
  }
  @media screen and (min-width: ${desktopSize}) {
    padding-top: 24px;
    text-align: left;
  }
`
S.Description = styled.p`
  ${jpFont}
  padding-top: 8px;
  @media screen and (min-width: ${desktopSize}) {
    padding-top: 32px;
  }
`
S.IconField = styled.div`
  text-align: center;
  padding: 32px 0;
  @media screen and (min-width: ${desktopSize}) {
    text-align: left;
  }
`
S.Icon = styled.img`
  display: inline-block;
  width: 48px;
  margin-right: 24px;
`
