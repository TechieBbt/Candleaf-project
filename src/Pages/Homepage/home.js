import React from 'react'
import Hero from '../../Components/Hero/hero';
import Products from '../../Components/Products/products';
import About from '../../Components/About-Section/about';
import Testimonials from '../../Components/Testimonials/testimonials';
import Popular from '../../Components/Popular/popular';
import Footer from '../../Components/Footer/footer';

const home = () => {
  return (
    <div>
    `   <Hero/>
        <Products/>
        <About/>
        <Testimonials/>
        <Popular/>
        <Footer/>
    </div>
    
  )
}

export default home