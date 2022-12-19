import React from 'react'
import Header from '../../components/Header/Header'
const Layout = (props) => {
  const user =localStorage.getItem('user')
  return (
    <div>
         <Header/>
        {props.children}
    </div>
  )
}

export default Layout
