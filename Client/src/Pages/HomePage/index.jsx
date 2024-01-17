import React from 'react'
import Products from '../../Components/ProductsSection'
import { Helmet } from 'react-helmet-async'
import AboutUs from '../../Components/AboutUs'
import Leader from '../../Components/LeaderShip'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Products/>
      <AboutUs/>
      <Leader/>
    </div>
  )
}

export default Home
