import styled from 'styled-components'

import { jpFont } from '../styles'

const S = {}
const Notification = ({ children }) => <S.Wrapper>{children}</S.Wrapper>

export default Notification

S.Wrapper = styled.div`
  ${jpFont}
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 110%);

  width: 200px;
  height: 80px;
  background: #333;
  border-radius: 5px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);

  text-align: center;
  line-height: 80px;
  color: #fff;

  animation: slide 3s;
  
  @keyframes slide {
    0% {
      transform: translate(-50%, 110%);
    }

    15% {
      transform: translate(-50%, -50%);
    }

    85% {
      transform: translate(-50%, -50%);
    }

    100% {
      transform: translate(-50%, 110%);
    }
  }
`
