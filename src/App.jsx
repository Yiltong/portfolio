import { useState } from 'react'
import './index.css'
import Home from './components/Hero'
import NotFound from './components/Generator'
import { BrowserRouter, Route, Routes } from 'react-router'



function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route index element={<Home />} /> 
            <Route path='*' element={<NotFound />} />
      
      
        </Routes>
        
      </BrowserRouter>
    </>
    
    
  )
}

export default App
