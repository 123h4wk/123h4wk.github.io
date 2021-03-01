import styled from 'styled-components'

import { tabletSize, desktopSize } from '../styles'

const S = {}

const Container = ({ children }) => <S.Wrapper>{children}</S.Wrapper>

export default Container

S.Wrapper = styled.div`
  margin: 0 auto;
  @media screen and (min-width: ${tabletSize}) {
    max-width: 500px;
  }
  @media screen and (min-width: ${desktopSize}) {
    max-width: 1000px;
  }
`
