import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainDashboard from './dashboard/Dashboard'
import {Helmet} from 'react-helmet'
import Signup from './Login/Signup'
import SignIn from './Login/Login'
import Profile from './components/Profile'
import CreateListing from './dashboard/Createlisting'
import Header from './components/Header'
import PrivateRoute from './Login/PrivateRoute'
import Updatelisting from './dashboard/Updatelisting'
import Footer from './components/Footer'

export default function App() {

  return (
    <div>


    <Helmet>
    <meta charSet="utf-8" />
    <title>MANTIS EYE</title>
    <meta name="description" content="second assigment of mantis " />
  </Helmet>
   <BrowserRouter>
   <Header/>
   <Routes>

<Route path='/' element={<MainDashboard/>}/>
<Route path='/sign-in' element={<SignIn/>}/>
<Route path='/sign-up'  element={<Signup/>}/>
<Route path='/update-listing/:listingId' element={<Updatelisting/>}/>

<Route element={<PrivateRoute/>}>
<Route path='/profile' element={<Profile/>}/>
<Route path='/create' element={<CreateListing/>}/>

</Route>

   </Routes>
   
   </BrowserRouter>
   </div>
  )
}
