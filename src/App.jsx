import { useState } from 'react'
import { Canvas } from '@react-three/fiber'

import './App.css'

import ShaderText from './ShaderText.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Canvas
    camera={{ 
      position: [4.5, 2.5,5.5],
      fov: 40 }}  
    >
      <ShaderText />
    </Canvas>
  )
}

export default App
