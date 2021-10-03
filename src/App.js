import React from 'react'
import tw from 'twin.macro'

// ui-components
import NavBar from './components/ui-components/NavBar'

const Title = tw.p`text-red-500`


const App = () => {
  return(
    <>
    <NavBar />
    <Title>Hola mundo</Title>
    </>
  );
}

export default App
