import styled from "styled-components"
import Wrapper from 'pages-lib/home/Wrapper'
import {ParallaxProps} from 'types'

type Props = {
  x: number
  p: number
}
export default function Slide4({x, p}:Props) {
  return <Wrapper overflow={'visible'}>
    <h1>Por isso<br />plantamos:</h1>
    <Body p={p} x={x} v={-.5}>
      <img src='/assets/img/stand.svg' alt="body" />
      <Line1 p={p} x={x} v={-.5} />
      <Line2 p={p} x={x} v={-.5} />
      <Line3 p={p} x={x} v={-.5} />
    </Body>
  </Wrapper>
}


const Body = styled.div<ParallaxProps>`
  position: absolute;
  width: 100%;
  top: 20%;
  right: 0;
  transform: translateX(${({x, v})=> {
    const result = x * v;
    if (result <= 0) {
      return `${x*0.5}px`
    }
    return `${x*v}px`
  }});
  text-align: right;
  img {
    width: 50%;
  }
`

const Line = styled.div<ParallaxProps>`
  width: 100%;
  height: .3rem;
  background: black;
  position: absolute;
  left: 0%;
  transform: translateX(${({x, v})=> {
    const result = x * v;
    if (result <= 0) {
      return `${x*0.5}px`
    }
    return `${x*v}px`
  }});
`

const Line1 = styled(Line)`
  top: 3%;
`

const Line2 = styled(Line)`
  top: 17%;
`

const Line3 = styled(Line)`
  top: 40%;
`