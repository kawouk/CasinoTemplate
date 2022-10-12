import React from 'react'
import Preloder from '../Layout/Preloder'
import TopNav from '../Layout/TopNav'
import BreadCrumb from '../Layout/BreadCrumb'
import Footer from '../Layout/Footer'
import RegisterComp from './Components/RegisterComp'

function Register() {
  return (
    <>
        <Preloder/>
            <TopNav />
                <BreadCrumb />
                <RegisterComp />
            <Footer />
            
        
    </>
  )
}

export default Register