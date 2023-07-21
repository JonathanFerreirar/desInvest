import React from 'react'

import { Route, BrowserRouter, Routes } from 'react-router-dom'

import { App } from './App'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { SectionMain } from './laddingpage/sections/Main'

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/section-main" element={<SectionMain />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export { Router }
