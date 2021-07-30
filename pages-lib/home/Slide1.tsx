import styled from "styled-components"

type Props = {
  x: number
  p: number
}
export default function Slide1({x, p}:Props) {
  return <Wrapper>
    <h1>Slide 1/{p} x={x}</h1>
    <Ball x={x} />
  </Wrapper>
}

const Wrapper = styled.div`
  border: 10px solid black;
  width: 100%;
  overflow: hidden;
  position: relative;
`

interface BallProps {
  x: number
}
const Ball = styled.div<BallProps>`
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: rgba(255,255, 255, 0.2);
  border-radius: 50%;
  left: 200px;
  transform: translateX(${({x})=> `${x*2}px`});
  z-index: 10;
  /* top: 300px; */
`