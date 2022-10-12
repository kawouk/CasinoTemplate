import React from 'react';
import Preloder from '../Layout/Preloder';
import TopNav from '../Layout/TopNav';
import BreadCrumb from '../Layout/BreadCrumb';
import Footer from '../Layout/Footer';
import ContactComponent from './Components/ContactComponent';

function Contact() {
  return (
    <>
        <Preloder/>
            <TopNav/>
                <BreadCrumb Title="Get In Touch" SubTitle="Misco has thousands of free online games for all generation. Play action, racing, sports, and other fun games for free at Misco"/>
                <ContactComponent/>
            <Footer/>
    </>
  )
}

export default Contact