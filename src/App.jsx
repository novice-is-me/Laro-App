import React from 'react'
import './App.css'
import Header from './pages/Header'
import CreateAccount from './pages/CreateAccount'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Matches from './pages/Matches'
import Court from './pages/Court'
import About from './pages/About'
import Login from './pages/Login'

function App() {

  return (
    <>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/matches' element={<Matches/>}></Route>
          <Route path='/court' element={<Court/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/create' element={''}></Route> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
