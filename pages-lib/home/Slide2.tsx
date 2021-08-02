import styled from "styled-components"
import Image from 'next/image'
import Wrapper from 'pages-lib/home/Wrapper'
import {ParallaxProps} from 'types'
import Title from 'pages-lib/home/Title'
import Text from 'pages-lib/home/Text'

type Props = {
  x: number
  p: number
}
export default function Slide2({x, p}:Props) {
  return <Wrapper overflow={'visible'}>
    <Title p={p} x={x} v={-1}>Cada parte do<br />corpo tem seu<br />significado</Title>
    <Text p={p} x={x} v={-.7}>Pessoas são seres bio-psico-socio-espirituais, ou seja, somos compostos de 4 elementos: Terra (corpo), Água (emoções), Ar (mente) e Fogo (alma). Educar é conduzir do mais denso ao mais elevado dando sentido à vida através da autonomia e auto-responsabilidade.</Text>
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
  position: absolute;
  top: 40%;
  left: 0;
  transform: translateX(${(props)=> `${getBodyX(props)}px`});
`

const Circle = styled.div<ParallaxProps>`
  background: white;
  position: absolute;
  width: 40px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  transform: translateX(${({x, v})=> `${x*v}px`});
  z-index: 10;
  animation-name: example;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  cursor: pointer;
  :hover {
    opacity: 1;
    animation: none;
  }
  @keyframes example {
    0% { opacity: 1; }
    50% { opacity: .5; }
    100% { opacity: 1; }
  }
`

const Circle1 = styled(Circle)`
  background: black;  
  left: 50%;
  top: 2%;
  width: 25px;
  animation-delay: .25s;
`

const Circle3 = styled(Circle)`
  left: 48.5%;
  top: 13%;
  width: 35px;
  animation-delay: .5s;
`

const Circle2 = styled(Circle)`
  left: 46%;
  top: 28%;
  width: 55px;
  animation-delay: .1s;
`

const Circle4 = styled(Circle)`
  left: 43%;
  top: 50%;
  width: 75px;
  animation-delay: 1.25s;
`