import React from 'react'
import Preloder from '../Layout/Preloder'
import TopNav from '../Layout/TopNav'
import BreadCrumb from '../Layout/BreadCrumb'
import CTA from '../Layout/CTA'
import Footer from '../Layout/Footer'
import FaqSection from './Components/FaqSection'

function FAQ() {
  return (
    <>
     <Preloder/>
      <TopNav/>
        <BreadCrumb Title="frequently asked questions" SubTitle="Misco has thousands of free online games for all generation. Play action, racing, sports, and other fun games for free at Misco"/>
        <FaqSection /> 
        <CTA/>
      <Footer/>
      
    </>


  )
}

export default FAQ