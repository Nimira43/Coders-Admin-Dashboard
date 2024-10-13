import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Stats from './pages/Stats'
import Upgrades from './pages/Upgrades'
import Posts from './pages/Posts'
import Error from './pages/Error'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/stats' element={<Stats />}></Route>
          <Route path='/upgrades' element={<Upgrades />}></Route>
          <Route path='/posts' element={<Posts />}></Route>
          <Route path='/error' element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

