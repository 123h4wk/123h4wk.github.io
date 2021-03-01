import styled from 'styled-components'
import { white, lightGray } from '../styles'
import Container from './Container'

const S = {}

const Section = ({ index, children }) => {
  return (
    <S.Wrapper index={index}>
      <Container>
        {children}
      </Container>
    </S.Wrapper>
  )
}

export default Section;

S.Wrapper = styled.div`
  width: 100%;
  background-color: ${({ index = 0 }) => {
    return index % 2 === 0 ? white : lightGray
  }};
`
