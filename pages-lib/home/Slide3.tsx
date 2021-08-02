import styled from "styled-components"
import Wrapper from 'pages-lib/home/Wrapper'
import {ParallaxProps} from 'types'

type Props = {
  x: number
  p: number
}
export default function Slide3({x, p}:Props) {
  return <Wrapper overflow={'visible'}>
    <h1>Nosso método<br />inclui todas<br />as partes</h1>
  </Wrapper>
}