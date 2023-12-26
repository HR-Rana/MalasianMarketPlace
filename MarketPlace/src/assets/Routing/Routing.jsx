import React from 'react'
import {Route, Routes} from 'react-router-dom'
import HomePage from '../../Pages/HomePage/HomePage'

export default function Routing() {
  return (
        <Routes>
            <Route path={'/'} element={<HomePage/>} />
        </Routes>
  )
}
