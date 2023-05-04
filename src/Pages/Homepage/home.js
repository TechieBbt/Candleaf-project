import React from 'react'
import HeroSection from '../../Components/HeroSection/Hero';
import Products from '../../Components/Products/products';
import About from '../../Components/About-Section/about';
import Testimonials from '../../Components/Testimonials/testimonials';
import Popular from '../../Components/Popular/popular';
import Footer from '../../Components/Footer/footer';

const home = () => {
  return (
    <div>
        <HeroSection/>
        <Products/>
        <About/>
        <Testimonials/>
        <Popular/>
        <Footer/>
    </div>
    
  )
}

export default home