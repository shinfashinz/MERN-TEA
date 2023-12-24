import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminLogin from './COMPONENTS/ADMIN/ADMINLOGIN/AdminLogin'
import AdminRegistration from './COMPONENTS/ADMIN/ADMINRESTRATION/AdminRegistration'
import Adminhome from './COMPONENTS/ADMIN/ADMIN HOME/Adminhome'
import Forgotepswd from './COMPONENTS/FORGOT/Forgotepswd'

import AddCategory from './COMPONENTS/ADMIN/ADMIN CATEGERY/AddCategory'
import Adminproduct from './COMPONENTS/ADMIN/ADMIN PRODUCT/Adminproduct'
import Home from './COMPONENTS/HOME/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

<BrowserRouter>
<Routes>
  <Route path='/adminregistration' Component={AdminRegistration}/>
  <Route path='/' Component={AdminLogin}/>
  <Route path='/adminhome' Component={Adminhome}/>
  <Route path='/Forgotpswd' Component={Forgotepswd}/>
  <Route path='/adminhome' Component={Adminhome}/>
  <Route path='/addcategory' Component={AddCategory}/>
  <Route path='/addproduct' Component={Adminproduct}/>
  <Route path='/home' Component={Home}/>
  
</Routes>
</BrowserRouter>
    </>
  )
}

export default App
