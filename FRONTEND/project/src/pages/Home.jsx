import React from 'react'
import HeroSection from '../componants/HeroSection'
import About from '../componants/About'
import Qualities from '../componants/Qualities'
import Menu from '../componants/Menu'
import WhoAreWe from '../componants/WhoAreWe'
import Team from '../componants/Team'
import Reservation from '../componants/Reservation'
import Footer from '../componants/Footer'

const Home = () => {
  return (
  <>
  <HeroSection/>
  <About/>
  <Qualities/>
  <Menu/>
  <WhoAreWe/>
  <Team/>
  <Reservation/>
  <Footer/>
  </>
  )
}

export default Home