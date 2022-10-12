import React from 'react'
import Preloder from '../Layout/Preloder'
import TopNav   from '../Layout/TopNav';
import Footer from '../Layout/Footer';
import BreadCrumb from '../Layout/BreadCrumb';
import Register from './Components/Register';
import CTA from '../Layout/CTA';

function Login() {
  return (
    <>
    {/*Preloader begin */}
    <Preloder/>
    {/*Preloader end */}
        {/* <!-- header section begin --> */}
        <TopNav/>
        {/* <!-- header section end --> */}

            {/* <!-- breadcrumb begin --> */}
            <BreadCrumb Title="LOGIN TO ENTER" SubTitle="Misco has thousands of free online games for all generation. Play action, racing, sports, and other fun games for free at Misco"/>
            {/* <!-- breadcrumb end --> */}

            {/* <!-- register begin --> */}
            <Register/>
            {/* <!-- register end --> */}

            {/* <!-- cta begin --> */}
            <CTA/>
            {/* <!-- cta end --> */}

        {/* <!-- footer begin --> */}
        <Footer/>
    </>
  )
}

export default Login