import React, {useEffect} from 'react'
import './about.css';
import Aos from "aos";
import "aos/dist/aos.css";
import Mark from '../../Assets/checkmark.png';
import Candle from '../../Assets/cleancandleaf.png';

const About = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])
  return (
    <div className='about'>
        <div className='inner'>
            <div data-aos="flip-right" className='left-a'>
                <div className='head-a'>
                Clean and fragrant soy wax
                </div>
                <div className='text-a'>Made for your home and for your wellness</div>
                <div className='list'>
                    <div className="eachlist">
                        <img src={Mark} alt="" />
                        <span><b>Eco-sustainable:</b> All recyclable materials, 0% CO2 emissions</span>
                    </div>
                    <div className="eachlist">
                    <img src={Mark} alt="" />
                        <span><b>Hyphoallergenic:</b> 100% natural, human friendly ingredients </span>
                    </div>
                    <div className="eachlist">
                    <img src={Mark} alt="" />
                        <span><b>Handmade:</b> All candles are craftly made with love.</span>
                    </div>
                    <div className="eachlist">
                    <img src={Mark} alt="" />
                        <span><b>Long burning:</b> No more waste. Created for last long.</span>
                    </div>
                </div>
                <div className='butn'>
                    <button>Learn more</button>
                </div>
            </div>
            <div data-aos="flip-left" className='right-a'>
                <img src={Candle} alt="" />
            </div>
        </div>
    </div>
  )
}

export default About