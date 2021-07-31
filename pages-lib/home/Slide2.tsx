import styled from "styled-components"
import Image from 'next/image'

import {ParallaxProps} from 'types'

type Props = {
  x: number
  p: number
}
export default function Slide2({x, p}:Props) {
  return <Wrapper>
    <h1>Cada parte do corpo tem seu significado</h1>
    <Jump x={x} v={-0.5}>
      <Image src='/assets/img/jump.gif' width={1000} height={830} />
      <Circle1 x={x} v={2}/>
      <Circle3 x={x} v={-2}/>
      <Circle2 x={x} v={2}/>
      <Circle4 x={x} v={-2}/>
    </Jump>
  </Wrapper>
}

const Wrapper = styled.div`
  border: 1px solid white;
  width: 100%;
  position: relative;
  overflow: hidden;
`

const Jump = styled.div<ParallaxProps>`
  transform: translateX(${({x, v})=> `${x*v}px`});
  position: absolute;
  top: 20%;
`

const Circle = styled.div<ParallaxProps>`
  position: absolute;
  width: 40px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  transform: translateX(${({x, v})=> `${x*v}px`});
  z-index: 10;
  border: 2px solid white;
`

const Circle1 = styled(Circle)`
  background-color: black;
  left: 50%;
  top: 2%;
  width: 25px;
`

const Circle3 = styled(Circle)`
  background-color: indigo;
  left: 49%;
  top: 13%;
  width: 35px;
`

const Circle2 = styled(Circle)`
  background-color: green;
  left: 46%;
  top: 28%;
  width: 55px;
`

const Circle4 = styled(Circle)`
  background-color: red;
  left: 43%;
  top: 50%;
  width: 75px;
`