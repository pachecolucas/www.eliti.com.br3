import styled from "styled-components"
import theme from 'styles/theme'
import {ParallaxProps} from 'types'

const Text = styled.p<ParallaxProps>`
/* outline: 1px solid green; */
transform: translateX(${({x, v})=> `${x*v}px`});
`

export default Text