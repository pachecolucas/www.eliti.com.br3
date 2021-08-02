import styled from "styled-components"
import Image from 'next/image'
import {ParallaxProps} from 'types'
import Wrapper from 'pages-lib/home/Wrapper'
import Title from 'pages-lib/home/Title'
import Text from 'pages-lib/home/Text'

type Props = {
  x: number
  p: number
}

export default function Slide1({x, p}:Props) {
  return <Wrapper overflow={'visible'}>
    <Title p={p} x={x} v={-.4}>Educar não é<br />colocar conteúdo<br /> na cabeça</Title>
    <Text p={p} x={x} v={-.3}>Pessoas não são apenas uma cabeça. Somos um conjunto complexo de sistemas que devem ser orquestrados equilibradamente para atigir o máximo de realização.</Text>
    <Text p={p} x={x} v={-.2}>Se quiser entender porque nossos estudantes são tão auto-motivados e aprendem rapidamente assuntos computacionais complexos lembre-se de que a mágica está na visão ontológica e epistemológica. Algo que pode parecer complexo de se falar mas que revela-se simples na prática.</Text>
    {/* <Text x={x} v={.4}>Somos uma escola para a vida com um método e ensino original e moderno baseada no que existe de mais antigo: alquimia.</Text> */}
    <PauloFreire p={p} x={x} v={0.5}>
      <Image src='/assets/img/bg1.gif' width={1018} height={589} />
    </PauloFreire>
  </Wrapper>
}

const PauloFreire = styled.div<ParallaxProps>`
  /* outline: 1px solid green; */
  /* width: 50px; */
  /* height: 50px; */
  position: absolute;
  bottom: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  transform: translateX(${({x, v})=> `${x*v}px`});
  /* transform: translateX(100px); */
`
