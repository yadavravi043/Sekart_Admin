import React from 'react'
import {BrowserRouter , Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/login'
import Order from './pages/orders/order'
import Product from './pages/products/product'
import Register from './pages/Register/register'
// import PrivateRoute from './components/HOC/privateRoute'
const RouteList = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/signin' element={<Login/>}/>
      <Route path='/signup' element={<Register/>}/> 
      <Route path='/order' element={<Order/>}/> 
      <Route path='/product' element={<Product/>}/> 
      </Routes>
      </BrowserRouter>  
    </div>
  )
}

export default RouteList
