import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminLogin from './COMPONENTS/ADMIN/ADMINLOGIN/AdminLogin'
import AdminRegistration from './COMPONENTS/ADMIN/ADMINRESTRATION/AdminRegistration'
import Adminhome from './COMPONENTS/ADMIN/ADMIN HOME/Adminhome'
import Forgotepswd from './COMPONENTS/FORGOT/Forgotepswd'

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
</Routes>
</BrowserRouter>
    </>
  )
}

export default App
