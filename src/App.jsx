import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './Components/LandingPage'
import Page2 from './Components/Page2'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { RecoilRoot } from 'recoil'


function App() {
  return (
    <>
    <RecoilRoot>
    <BrowserRouter>
    <Routes>
    
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/check' element={<Page2/>}/>
    </Routes>
    
    
    </BrowserRouter>
    </RecoilRoot>
    </>
  )
}

export default App
