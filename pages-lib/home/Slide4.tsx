import styled from "styled-components"

type Props = {
  x: number
  p: number
}
export default function Slide4({x, p}:Props) {
  return <Wrapper>
    <h1>Por isso plantamos:</h1>
    <Ball x={x} />
  </Wrapper>
}

const Wrapper = styled.div`
  border: 1px solid white;
  width: 100%;
  position: relative;
  overflow: hidden;
`

interface BallProps {
  x: number
}
const Ball = styled.div<BallProps>`
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: rgba(0,0, 255, 0.5);
  border-radius: 50%;
  left: 200px;
  transform: translateX(${({x})=> `${x*2}px`});
  z-index: 10;
  top: 40%;
`