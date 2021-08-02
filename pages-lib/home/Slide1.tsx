import styled from "styled-components"
import Image from 'next/image'
import {ParallaxProps} from 'types'
import Wrapper from 'pages-lib/home/Wrapper'

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
    <Ball p={p} x={x}  v={0}/>
    <Ball2 p={p} x={x}  v={0}/>
    <Ball3 p={p} x={x}  v={0}/>
    <Ball4 p={p} x={x}  v={0}/>
    <Ball5 p={p} x={x}  v={0}/>
    <Ball6 p={p} x={x}  v={0}/>
    <Ball7 p={p} x={x}  v={0}/>
  </Wrapper>
}

const Title = styled.h1<ParallaxProps>`
  /* outline: 1px solid green; */
  transform: translateX(${({x, v})=> `${x*v}px`});
`
const Text = styled.p<ParallaxProps>`
  /* outline: 1px solid green; */
  transform: translateX(${({x, v})=> `${x*v}px`});
`

const PauloFreire = styled.div<ParallaxProps>`
  /* outline: 1px solid green; */
  /* width: 50px; */
  /* height: 50px; */
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 10;
  transform: translateX(${({x, v})=> `${x*v}px`});
  /* transform: translateX(100px); */
`

const Ball = styled.div<ParallaxProps>`
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: rgba(255,255, 255, 0.2);
  border-radius: 50%;
  left: 200px;
  transform: translateX(${({x, v})=> `${x*v}px`});
  z-index: 10;
  top: 10%;
`

const Ball2 = styled(Ball)`
  transform: translateX(${({x, v})=> `${x*v}px`});
  top: 20%;
`

const Ball3 = styled(Ball)`
  transform: translateX(${({x, v})=> `${x*v}px`});
  top: 30%;
`

const Ball4 = styled(Ball)`
  transform: translateX(${({x, v})=> `${x*v}px`});
  top: 40%;
`

const Ball5 = styled(Ball)`
  transform: translateX(${({x, v})=> `${x*v}px`});
  top: 50%;
`

const Ball6 = styled(Ball)`
  transform: translateX(${({x, v})=> `${x*v}px`});
  top: 60%;
`

const Ball7 = styled(Ball)`
  transform: translateX(${({x, v})=> `${x*v}px`});
  top: 70%;
`