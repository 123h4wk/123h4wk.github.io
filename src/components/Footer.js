import styled from 'styled-components'

import { lightGray, enFont } from '../styles'

const S = {}

const Footer = () => <S.Wrapper>©123h4wk</S.Wrapper>

S.Wrapper = styled.footer`
  ${enFont}
  text-align: center;
  background: ${lightGray};
  padding: 40px;
`

export default Footer;
