import { useState } from 'react'
//import './App.css'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Frontpage from './components/Frontpage'
import About from './components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <main className="text-white w-full h-screen flex flex-col items-center justify-center bg-gradient-to-br from-violet-300 to-indigo-300 body-font">
      
      <Frontpage />
      
      <Projects />
      <Skills />
    </main>
    <About />
    
    </ >
  )
}

export default App
