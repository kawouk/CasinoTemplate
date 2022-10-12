import React from 'react';
import Preloder from '../Layout/Preloder';
import TopNav from '../Layout/TopNav';
import BreadCrumb from '../Layout/BreadCrumb';
import Footer from '../Layout/Footer';
import BlogComponent from './Components/BlogComponent';

function Blog() {
  return (
    <>
        <Preloder />
            <TopNav />
                <BreadCrumb Title="Blog Posts" SubTitle="Misco has thousands of free online games for all generation. Play action, racing, sports, and other fun games for free at Misco" />
                <BlogComponent/>
            <Footer />
    </>
  )
}

export default Blog