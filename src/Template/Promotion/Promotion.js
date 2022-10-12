import React from 'react';
import Preloder from '../Layout/Preloder';
import TopNav from '../Layout/TopNav';
import BreadCrumb from '../Layout/BreadCrumb';
import Footer from '../Layout/Footer';
import PromotionComp from './Components/PromotionComp';

function Promotion() {
  return (
    <>
    <Preloder/>
    <TopNav/>
        <BreadCrumb Title="Promotions" SubTitle="Misco has thousands of free online games for all generation. Play action, racing, sports, and other fun games for free at Misco"/>
        <PromotionComp/>
    <Footer/>
    
    </>
  )
}

export default Promotion