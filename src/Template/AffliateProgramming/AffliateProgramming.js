import React from 'react';
import Preloder from '../Layout/Preloder';
import TopNav from '../Layout/TopNav';
import BreadCrumb from '../Layout/BreadCrumb';
import Footer from '../Layout/Footer';
import Affliate from './Components/Affliate';

function AffliateProgramming() {
  return (
    <>
       <Preloder/>

        <TopNav/>

            <BreadCrumb Title="Join Miscoo's Affiliate" SubTitle="Misco has thousands of free online games for all generation. Play action, racing, sports, and other fun games for free at Misco"/>
            <Affliate/>

        <Footer/>
    </>
  )
}

export default AffliateProgramming