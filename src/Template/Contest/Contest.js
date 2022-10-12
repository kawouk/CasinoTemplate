import React from 'react';
import Preloder from '../Layout/Preloder';
import TopNav from '../Layout/TopNav';
import BreadCrumb from '../Layout/BreadCrumb';
import CTA from '../Layout/CTA';
import Footer from '../Layout/Footer';
import ContestSection from './Components/ContestSection';

function Contest() {
  return (
    <>
        <Preloder />
        <TopNav />
            <BreadCrumb Title="Game Contest" SubTitle="Misco has thousands of free online games for all generation. Play action, racing, sports, and other fun games for free at Misco" />
            <ContestSection />
            <CTA />
        <Footer />
    </>
  )
}

export default Contest