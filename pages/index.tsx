import React from 'react'

import styled from 'styled-components'

const Home: React.FC = () => {
  return (
    <Container>
      <Segment>
        <h2>1</h2>
      </Segment>
      <Segment>
        <h2>2</h2>
      </Segment>
      <Segment>
        <h2>3</h2>
      </Segment>
      <Segment>
        <h2>4</h2>
      </Segment>
      <Segment>
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
  align-items: center;
  border: 10px solid red;
`

const Segment = styled.div`
  border: 5px solid green;
	height: 100%;
	scroll-snap-align: center;
	display: flex;
	background-color: darkorchid;
	flex: 0 0 100%;

`