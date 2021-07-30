import React, { useEffect, useRef, useState } from 'react'

import styled from 'styled-components'
import Slide1 from 'pages-lib/home/Slide1'
import Slide2 from 'pages-lib/home/Slide2'
import Slide3 from 'pages-lib/home/Slide3'
import Slide4 from 'pages-lib/home/Slide4'
import Slide5 from 'pages-lib/home/Slide5'

const NUM_PAGES = 4;

const Home: React.FC = () => {
  
  const container = useRef(null)

  const [x, setX] = useState(0)
  const [p, setP] = useState(1)

  const handleScroll = () => {
    const elem = container.current as HTMLElement | null
    if (elem) {
      console.log("handleScroll...", elem.scrollLeft)
      setX(elem.scrollLeft)
      setP(Math.round(elem.scrollLeft/elem.clientWidth)+1)
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

  const getRelativeX = function(page:number) {
    const elem = container.current as HTMLElement | null
    if (elem) {
      return x - (elem.clientWidth * (page-1))
    }
    return 0;
  }

  return (
    <Container ref={container}>
      <Controls>
        {p > 1 && <button onClick={prev}>PREV</button>}
        <button>{p} ({x})</button>
        {p < NUM_PAGES && <button onClick={next}>NEXT</button>}
      </Controls>
      <Segment id="1">
        <Slide1 x={getRelativeX(1)} p={p}/>
      </Segment>
      <Segment id="2">
        <Slide2 x={getRelativeX(2)} p={p}/>
      </Segment>
      <Segment id="3">
        <Slide3 x={getRelativeX(3)} p={p}/>
      </Segment>
      <Segment id="4">
        <Slide4 x={getRelativeX(4)} p={p}/>
      </Segment>
      <Segment id="5">
        <Slide5 x={getRelativeX(5)} p={p}/>
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
  scroll-behavior: smooth; // Safari ainda não tem isso >\
`

const Controls = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  z-index:20;
  transform: translateX(-50%);
`

const Segment = styled.div`
  border: 50px solid green;
	height: 100%;
	scroll-snap-align: center;
	display: flex;
	background-color: darkorchid;
	flex: 0 0 100%;
`