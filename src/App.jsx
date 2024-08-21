import { useState } from 'react'
import Header from './Header'
import Hero from './Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    <Hero></Hero>
    </>
  )
}

export default App
