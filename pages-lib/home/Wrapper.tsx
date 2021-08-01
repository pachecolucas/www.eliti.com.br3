import styled from "styled-components"
import theme from 'styles/theme'

type Props = {
  overflow: string
}
const Wrapper = styled.div<Props>`
/* border: 1px solid black; */
  padding: ${()=>theme.gaps.sm};
  width: 100%;
  overflow: ${({overflow})=>overflow};
  position: relative;
`

export default Wrapper;