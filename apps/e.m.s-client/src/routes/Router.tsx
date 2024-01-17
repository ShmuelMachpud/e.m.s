import React from 'react'
import {Route, Routes} from 'react-router-dom'
import RegisterPage from '../pages/RegisterPage'
import LoginPage from '../pages/LoginPage'
import HomePage from '../pages/HomePage'
import EditEmployeeData from '../components/employeeData/EditEmployeeData'

export default function Router() {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/Register' element={<RegisterPage/>}></Route>
        <Route path='/Login' element={<LoginPage/>}></Route>
        <Route path='/EditEmployeeData' element={<EditEmployeeData/>}></Route>
    </Routes>
  )
}
