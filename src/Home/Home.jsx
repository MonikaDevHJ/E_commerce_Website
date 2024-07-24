import React from 'react'
import Banner from './Banner'
import HomeCatagory from './HomeCatagory'
import CatagoryShowCase from './CatagoryShowCase'
import Registeer from './Registeer'
import LocationSpread from './LocationSpread'
import AboutUs from './AboutUs'
import AppSection from './AppSection'
import Sponser from './Sponser'


const Home = () => {
  return (
    <div>
      <Banner/>
      <HomeCatagory/>
      <CatagoryShowCase/>
      <Registeer/>
      <LocationSpread/>
      <AboutUs/>
      <AppSection/>
      <Sponser/>
    </div>
  )
}

export default Home
