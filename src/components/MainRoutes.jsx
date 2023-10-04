import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Property from './Property'
import HomeCity from '../pages/HomeCity'

const MainRoutes = () => {
  return <Routes>
    <Route exact path="/" element={<HomeCity/>}/>
    <Route path="/property/:id" element={<Property/>} />
  </Routes>
}

export default MainRoutes