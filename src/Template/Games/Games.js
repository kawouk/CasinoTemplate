import React from 'react'
import Preloder from '../Layout/Preloder'
import TopNav from '../Layout/TopNav'
import BreadCrumb from '../Layout/BreadCrumb'
import CTA from '../Layout/CTA'
import Footer from '../Layout/Footer'
import GamesComponent from './Components/GamesComponent';

function Games() {
  return (
    <>
        <Preloder />
            <TopNav />
                <BreadCrumb Title="All Games" SubTitle="Misco has thousands of free online games for all generation. Play action, racing, sports, and other fun games for free at Misco"/>
                <GamesComponent />
                <CTA />
            <Footer />
        
    </>
  )
}

export default Games