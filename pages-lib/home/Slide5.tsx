import styled from "styled-components"
import Wrapper from 'pages-lib/home/Wrapper'

type Props = {
  x: number
  p: number
}
export default function Slide5({x, p}:Props) {
  return <Wrapper overflow={'visible'}>
    <h1>E colhemos:</h1>
    <Ball x={x} />
  </Wrapper>
}

interface BallProps {
  x: number
}
const Ball = styled.div<BallProps>`
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: rgba(255,0, 0, 0.5);
  border-radius: 50%;
  left: 200px;
  transform: translateX(${({x})=> `${x*2}px`});
  z-index: 10;
  top: 40%;
`