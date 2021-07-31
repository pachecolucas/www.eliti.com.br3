import styled from "styled-components"
import Image from 'next/image'
import {ParallaxProps} from 'types'

type Props = {
  x: number
  p: number
}

export default function Slide1({x, p}:Props) {
  return <Wrapper>
    <Title x={x} v={-.4}>Educar não é<br />colocar conteúdo<br /> na cabeça</Title>
    <Text x={x} v={-.3}>Pessoas não são apenas uma cabeça. Somos um conjunto complexo de sistemas que devem ser orquestrados equilibradamente para atigir o máximo de realização.</Text>
    <Text x={x} v={-.2}>Se quiser entender porque nossos estudantes são tão auto-motivados e aprendem rapidamente assuntos computacionais complexos lembre-se de que a mágica está na visão ontológica e epistemológica. Algo que pode parecer complexo de se falar e, ao mesmo tempo, torna-se muito simples ao ver sua aplicação prática.</Text>
    {/* <Text x={x} v={.4}>Somos uma escola para a vida com um método e ensino original e moderno baseada no que existe de mais antigo: alquimia.</Text> */}
    <PauloFreire x={x} v={0.5}>
      <Image src='/assets/img/bg1.gif' width={1018} height={589} />
    </PauloFreire>
    <Ball x={x}  v={0}/>
    <Ball2 x={x}  v={0}/>
    <Ball3 x={x}  v={0}/>
    <Ball4 x={x}  v={0}/>
    <Ball5 x={x}  v={0}/>
    <Ball6 x={x}  v={0}/>
    <Ball7 x={x}  v={0}/>
  </Wrapper>
}

const Wrapper = styled.div`
  /* border: 1px solid black; */
  padding: 2rem;
  width: 100%;
  /* overflow: hidden; */
  position: relative;
`
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