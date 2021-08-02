import styled from "styled-components"
import theme from 'styles/theme'
import {ParallaxProps} from 'types'

const Title = styled.h1<ParallaxProps>`
/* outline: 1px solid green; */
transform: translateX(${({x, v})=> `${x*v}px`});
`
export default Title