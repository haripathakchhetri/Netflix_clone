import { useState } from 'react'


import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      
    </>
  )
}

export default App
