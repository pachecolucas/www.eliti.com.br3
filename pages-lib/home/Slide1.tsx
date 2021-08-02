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
    <Text p={p} x={x} v={-.2}>Se quiser entender porque nossos estudantes são tão auto-motivados e aprendem rapidamente assuntos computacionais complexos lembre-se de que a mágica está em algo que pode parecer complexo de se falar mas que revela-se simples na prática: uma revolucionária visão ontológica e epistemológica.</Text>
    {/* <Text x={x} v={.4}>Somos uma escola para a vida com um método e ensino original e moderno baseada no que existe de mais antigo: alquimia.</Text> */}
    <PauloFreire p={p} x={x} v={0.5}>
      <Image src='/assets/img/bg1.gif' width={1018} height={589} />
      <Html p={p} x={x} v={-.5} src="/assets/img/stack/html.svg" alt="html" />
      <Css p={p} x={x} v={-1} src="/assets/img/stack/css.svg" alt="css" />
      <Js p={p} x={x} v={-.5} src="/assets/img/stack/js.svg" alt="js" />
      <Ts p={p} x={x} v={-1} src="/assets/img/stack/ts.svg" alt="ts" />
      <React p={p} x={x} v={-.5} src="/assets/img/stack/react.svg" alt="react" />
      <Github p={p} x={x} v={-1} src="/assets/img/stack/github.svg" alt="GitHub" />
      <Next p={p} x={x} v={-1} src="/assets/img/stack/next.svg" alt="Next" />
      <Mysql p={p} x={x} v={-1} src="/assets/img/stack/mysql.svg" alt="Mysql" />
      <Php p={p} x={x} v={-.5} src="/assets/img/stack/php.svg" alt="Php" />
      <Netlify p={p} x={x} v={-1} src="/assets/img/stack/netlify.svg" alt="Netlify" />
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

const Img = styled.img<ParallaxProps>`
  width: 40px;
  position: absolute;
  top:0;
  left:0;
  transform: translateX(${({x, v})=> `${x*v}px`});
`

const Netlify = styled(Img)`
  width: 40px;
  top: 75%;
  left: 4%;
`

const Php = styled(Img)`
  width: 50px;
  top: 60%;
  left: 4%;
`

const Next = styled(Img)`
  top: 35%;
  left: 8%;
`


const Html = styled(Img)`
  top: 10%;
  left: 15%;
`

const Css = styled(Img)`
  top: -5%;
  left: 30%;
`

const Js = styled(Img)`
  top: -10%;
  left: 50%;
`

const Ts = styled(Img)`
  left: 70%;
`

const React = styled(Img)`
  top: 20%;
  left: 80%;
`

const Github = styled(Img)`
  top: 43%;
  left: 85%;
`

const Mysql = styled(Img)`
  top: 65%;
  left: 88%;
`

