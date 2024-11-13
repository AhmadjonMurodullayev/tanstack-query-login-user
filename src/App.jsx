import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/home'
import MainLayout from './layout/main-layout'
import SignIn from './components/sing-in'
import { Register } from './components/sing-up'
import QarzQrodact from './components/qarz-prodact'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element ={<SignIn/>}/>
      <Route path='/sing-up' element ={<Register/>}/>
      <Route path="/main-layout" element={<MainLayout />} >
         <Route index element={<Home />} />
         <Route path='qarz/:id' element={<QarzQrodact/>} />
      </Route>
    </Routes>

    </>
  )
}

export default App
