import React from 'react'
import {Route, Routes} from 'react-router-dom'
import RegisterPage from '../pages/RegisterPage'
import LoginPage from '../pages/LoginPage'
import HomePage from '../pages/HomePage'
import EditEmployeeData from '../components/employeeData/EditEmployeeData'
import AllUsers from '../pages/AllUsers'
import PasswordRecoveryPage from '../pages/PasswordRecoveryPage'
import CreateEmplotee from '../components/employeeData/CreateEmplotee'

export default function Router() {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/Login' element={<LoginPage/>}></Route>
        <Route path='/Register' element={<RegisterPage/>}></Route>
        <Route path='/PasswordRecoveryPage' element={<PasswordRecoveryPage/>}></Route>
        <Route path='/EditEmployeeData' element={<EditEmployeeData/>}></Route>
        <Route path='/AllUsers' element={<AllUsers/>}></Route>
        <Route path='/www' element={<EditEmployeeData/>}></Route>
        <Route path='/CreateEmployee' element={<CreateEmplotee/>}></Route>
    </Routes>
  )
}
