import React from 'react';
import Preloder from '../Layout/Preloder';
import TopNav from '../Layout/TopNav';
import BreadCrumb from '../Layout/BreadCrumb';
import Footer from '../Layout/Footer';
import AccountSection from './Components/AccountSection';

function Account() {
  return (
    <>

        {/*Preloader */}
        <Preloder/>

            {/*TopNav */}
            <TopNav />

                {/*BreadCrumb Account */}
                    <BreadCrumb Title="frequently asked questions" SubTitle="Misco has thousands of free online games for all generation. Play action, racing, sports, and other fun games for free at Misco"/>

                {/*Account Section */}
                <AccountSection/>

            {/*Footer */}
            <Footer/>

    </>
  )
}

export default Account