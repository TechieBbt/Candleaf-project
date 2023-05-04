import React from 'react'
import Header from '../Header/header';
import './hero.css';

const Hero = () => {
  return (
    <div className='hero'>
        <Header/>
        <div className="innerh">
            <div className='heading'>
                🌱 <br/>
                The nature candle
            </div>
            <div className='text'>
                All handmade with natural soy wax, Candleaf is a companion for all your pleasure moments 
            </div>
            <div className='btn'>
                <button>Discover our collection</button>
            </div>
         </div>
        
    </div>
  )
}

export default Hero