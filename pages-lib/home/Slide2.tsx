import styled from "styled-components"
import Image from 'next/image'
import Wrapper from 'pages-lib/home/Wrapper'
import {ParallaxProps} from 'types'

type Props = {
  x: number
  p: number
}
export default function Slide2({x, p}:Props) {
  return <Wrapper overflow={'visible'}>
    <h1>Cada parte do<br />corpo tem seu<br />significado</h1>
    <Body p={p} x={x} v={-0.5}>
      <Image src='/assets/img/jump.gif' width={1000} height={830} />
      <Circle1 p={p} x={x} v={.9}/>
      <Circle3 p={p} x={x} v={-.9}/>
      <Circle2 p={p} x={x} v={.9}/>
      <Circle4 p={p} x={x} v={-.9}/>
    </Body>
  </Wrapper>
}

function getBodyX(props: ParallaxProps) {
  const result = props.x * props.v
  if (result <= 0) {
    return props.x * .5
  }
  return result;
}

const Body = styled.div<ParallaxProps>`
  transform: translateX(${(props)=> `${getBodyX(props)}px`});
  position: absolute;
  top: 30%;
`

const Circle = styled.div<ParallaxProps>`
  position: absolute;
  width: 40px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  transform: translateX(${({x, v})=> `${x*v}px`});
  z-index: 10;
  border: 2px solid white;
}
`

const Circle1 = styled(Circle)`
  background-color: black;
  left: 50%;
  top: 2%;
  width: 10px;
  animation-name: example;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  @keyframes example {
    0% {width: 10px;}
    50% {width: 80px;}
    100% {width: 10px;}
  }
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