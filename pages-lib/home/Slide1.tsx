import styled from "styled-components"

type Props = {
  x: number
  p: number
}
export default function Slide1({x, p}:Props) {
  return <Wrapper>
    <h1>Slide 1/{p} x={x}</h1>
    <Ball x={x} />
    <Ball2 x={x} />
    <Ball3 x={x} />
    <Ball4 x={x} />
    <Ball5 x={x} />
    <Ball6 x={x} />
    <Ball7 x={x} />
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
  width: 50px;
  height: 50px;
  background-color: rgba(255,255, 255, 0.2);
  border-radius: 50%;
  left: 200px;
  transform: translateX(${({x})=> `${x*1.5}px`});
  z-index: 10;
  top: 10%;
`

const Ball2 = styled(Ball)`
  transform: translateX(${({x})=> `${x*1.0}px`});
  top: 20%;
`

const Ball3 = styled(Ball)`
  transform: translateX(${({x})=> `${x*0.5}px`});
  top: 30%;
`

const Ball4 = styled(Ball)`
  transform: translateX(${({x})=> `${x*0}px`});
  top: 40%;
`

const Ball5 = styled(Ball)`
  transform: translateX(${({x})=> `${x*-0.5}px`});
  top: 50%;
`

const Ball6 = styled(Ball)`
  transform: translateX(${({x})=> `${x*-1.0}px`});
  top: 60%;
`

const Ball7 = styled(Ball)`
  transform: translateX(${({x})=> `${x*-1.5}px`});
  top: 70%;
`