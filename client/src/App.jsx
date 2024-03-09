import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainDashboard from './dashboard/Dashboard'

import Signup from './Login/Signup'
import SignIn from './Login/Login'
import Profile from './dashboard/Profile'
import CreateListing from './dashboard/Createlisting'
import Header from './components/Header'
import PrivateRoute from './PrivateRoute'
import Updatelisting from './dashboard/Updatelisting'
import Listing from './dashboard/Listing'

export default function App() {

  return (
   <BrowserRouter>
   <Header/>

   <Routes>
<Route path='/' element={<MainDashboard/>}/>
<Route path='/sign-in' element={<SignIn/>}/>
<Route path='/sign-up'  element={<Signup/>}/>
<Route path='/listing/:listingId' element={<Listing/>}/>
<Route path='/update-listing/:listingId' element={<Updatelisting/>}/>

<Route element={<PrivateRoute/>}>
<Route path='/profile' element={<Profile/>}/>
<Route path='/create' element={<CreateListing/>}/>

</Route>

   </Routes>
   
   
   </BrowserRouter>
  )
}
