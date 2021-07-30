import React, { useEffect, useRef, useState } from 'react'

import styled from 'styled-components'

const Home: React.FC = () => {
  
  const container = useRef(null)

  const [x, setX] = useState(0)
  const [p, setP] = useState(1)

  const handleScroll = () => {
    const elem = container.current as HTMLElement | null
    if (elem) {
      console.log("handleScroll...", elem, container, elem.clientWidth)
      setX(elem.scrollLeft)
      setP(Math.round(elem.scrollLeft/elem.clientWidth+1))
    }
  }

  useEffect(()=>{
    const elem = container.current as HTMLElement | null
    if (elem) {
      console.log("useEffect...")
      elem.addEventListener("scroll", handleScroll);
      return () => elem.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const next = () => {
    window.location.href = `#${p+1}`
  }

  const prev = () => {
    window.location.href = `#${p-1}`
  }

  return (
    <Container ref={container}>
      <Controls>
        {p > 1 && <button onClick={prev}>PREV</button>}
        <button>{p}</button>
        {p < 5 && <button onClick={next}>NEXT</button>}
      </Controls>
      <Segment id="1">
        <X>{x}</X>
        <Ball x={x} />
        <Square />
      </Segment>
      <Segment id="2">
        <h2>2</h2>
        <section>TESTE</section>
      </Segment>
      <Segment id="3">
        <h2>3</h2>
      </Segment>
      <Segment id="4">
        <h2>4</h2>
      </Segment>
      <Segment id="5">
        <h2>5</h2>
      </Segment>
    </Container>
  )
}

export default Home

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	overflow-x: scroll;
	scroll-snap-type: x mandatory;
  color: white;
  background-color: oldlace;
  display: flex;
  border: 10px solid red;
  scroll-behavior: smooth;
`

const Controls = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  z-index:20;
  transform: translateX(-50%);
`

const X = styled.div`
  position: fixed;
  left: 50%;
  top: 0;
  background: white;
  color: black;
  z-index: 20;
`

const Segment = styled.div`
  border: 5px solid green;
	height: 100%;
	scroll-snap-align: center;
	display: flex;
	background-color: darkorchid;
	flex: 0 0 100%;
  position: relative;
`

interface BallProps {
  x: number
}
const Ball = styled.div<BallProps>`
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: rgba(255,255, 255, 0.2);
  border-radius: 50%;
  left: 200px;
  transform: translateX(${({x})=> `${x*2}px`});
  z-index: 10;
  /* top: 300px; */
`

const Square = styled.div`
  width: 100px;
  height: 100px;
  background: red;
`