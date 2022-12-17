import React from 'react'
import {BrowserRouter , Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/login'
import Register from './pages/Register/register'
const RouteList = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/signin' element={<Login/>}/>
      <Route path='/signup' element={<Register/>}/>
      
      </Routes>
      </BrowserRouter>  
    </div>
  )
}

export default RouteList
