import React from 'react'
import HomeBanner from './HomeBanner'
import "../Home/Home.css"
import HomeColumnSec1 from './HomeColumnSec1'
import HomeVideoSec from '../../Components/VideoSection/HomeVideoSec'
import HomeCourseSec from './HomeCourseSec'
import HomeColumnSec2 from './HomeColumnSec2'
import TopFooter from '../../Components/TopFooter/TopFooter'
import ModalSection from '../../Components/VideoSection/ModalSection'

const Home = () => {
  return (
    <>
    <ModalSection/>
    <HomeBanner/>
    <HomeColumnSec1/>
    <HomeVideoSec/>
    <HomeCourseSec/>
    <HomeColumnSec2/>
    <TopFooter/>
    </>
  )
}

export default Home