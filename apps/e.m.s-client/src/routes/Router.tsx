import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Login from '../pages/Login'
import HomePage from '../pages/HomePage'
import EditEmployeeData from '../components/employeeData/EditEmployeeData'

export default function Router() {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/EditEmployeeData' element={<EditEmployeeData/>}></Route>
    </Routes>
  )
}
