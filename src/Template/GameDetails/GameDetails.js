import React from 'react'
import Preloder from '../Layout/Preloder'
import TopNav from '../Layout/TopNav'
import BreadCrumb from '../Layout/BreadCrumb'
import Footer from '../Layout/Footer'
import GameDetailsComp from './Components/GameDetailsComp'

function GameDetails() {
  return (
    <>
        <Preloder/>
            <TopNav/>
                <BreadCrumb Title="Start Playing" SubTitle="Misco has thousands of free online games for all generation. Play action, racing, sports, and other fun games for free at Misco"/>
                <GameDetailsComp/>
            <Footer/>
        
    </>
  )
}

export default GameDetails