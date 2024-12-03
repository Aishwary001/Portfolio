// import React from 'react'
import 'remixicon/fonts/remixicon.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import About from './Components/About';
import Doctor from './Components/Doctor';
import Device from './Components/Device';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/doctor' element={<Doctor/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Device' element={<Device/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App