import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import './index.css';
import About from './pages/About'
import Dashboard from './pages/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
   
      
       <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path ="/about" element={<About/>}/>
        <Route path ="/dashboard" element={<Dashboard/>}/>
       </Routes>
    
  )
}

export default App
