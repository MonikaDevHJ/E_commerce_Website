import React from 'react'
import Banner from './Banner'
import HomeCatagory from './HomeCatagory'
import CatagoryShowCase from './CatagoryShowCase'
import Registeer from './Registeer'
import LocationSpread from './LocationSpread'


const Home = () => {
  return (
    <div>
      <Banner/>
      <HomeCatagory/>
      <CatagoryShowCase/>
      <Registeer/>
      <LocationSpread/>
    </div>
  )
}

export default Home
