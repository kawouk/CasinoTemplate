import React from 'react'
import Preloder from '../Layout/Preloder'
import TopNav from '../Layout/TopNav'
import BreadCrumb from '../Layout/BreadCrumb'
import IqFeature from './Components/IqFeature'
import CTA from '../Layout/CTA';
import Team from './Components/Team'
import Testimonial from './Components/Testimonial'
import Contact from './Components/Contact'
import Footer from '../Layout/Footer'

function About() {
  return (
    <>
        {/* Preloader begin*/}
        <Preloder/>
        {/*Preloader end*/}

            {/* TopNav begin */}
            <TopNav/>
            {/* TopNav end */}

                {/* BreadCrumb begin */}
                <BreadCrumb Title="ABOUT US" SubTitle="Misco has thousands of free online games for all generation. Play action, racing, sports, and other fun games for free at Misco"/>
                {/*BreadCrumb end*/}

                {/* IqFeature begin */}
                <IqFeature/>
                {/* IqFeature end */}

                {/* CTA begin */}
                <CTA/>
                {/* CTA end */}     

                {/* Team begin */}  
                <Team/>
                {/* Team end */}

                {/* Testimonial begin */}
                <Testimonial/>
                {/* Testimonial end */}

                {/* Contact begin */}
                <Contact/>
                {/* Contact end */}
        {/* Footer begin */}
        <Footer/>
        {/* Footer end */}
            


    </>
  )
}

export default About