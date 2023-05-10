import React, {useEffect} from 'react'
import Header from '../Header/Header';
import './Hero.css';
import Aos from "aos";
import "aos/dist/aos.css";


const Hero = () => {
    useEffect(() => {
        Aos.init({duration: 3000});
    }, [])
  
  return (
    <div className='hero'>
        <Header/>
        <div data-aos="zoom-in" className="innerh">
            <div data-aos="fade-up" className='heading'>
                🌱 <br/>
                The nature candle
            </div>
            <div data-aos="fade-down" className='text'>
                All handmade with natural soy wax, Candleaf is a companion for all your pleasure moments 
            </div>
            <div data-aos="flip-right" className='btn'>
                <button>Discover our collection</button>
            </div>
         </div>
        
    </div>
  )
}

export default Hero