import styled from "styled-components"

type Props = {
  x: number
  p: number
}
export default function Slide5({x, p}:Props) {
  return <Wrapper>
    <h1>Slide 5/{p} x={x}</h1>
    <Ball x={x} />
  </Wrapper>
}

const Wrapper = styled.div`
  border: 1px solid black;
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
  background-color: rgba(255,0, 0, 0.5);
  border-radius: 50%;
  left: 200px;
  transform: translateX(${({x})=> `${x*2}px`});
  z-index: 10;
  top: 40%;
`