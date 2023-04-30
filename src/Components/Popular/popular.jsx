import React from 'react'
import './popular.css';
import Candle1 from '../../Assets/image 1.png';
import Candle2 from '../../Assets/image 2.png';
import Candle3 from '../../Assets/image 3.png';
import Candle4 from '../../Assets/image 4.png';

const popular = () => {
  return (
    <div className='popular'>
        <div className='top-p'>
            <div>Popular</div>
            <div>Our top selling product that you may like</div>
        </div>
        <div className='down-p'>
            <div className="box-pp">
                    <div className="candle">
                        <img src={Candle1} alt=""/>
                    </div>
                    <div className='belCandle'>
                        <span className="desc1">Spiced Mint</span>
                        <span className="desc2">9.99$</span>
                    </div>
                </div>
                <div className="box-pp">
                    <div className="candle">
                        <img src={Candle2} alt=""/>
                    </div>
                    <div className='belCandle'>
                        <span className="desc1">Sweet Strawberry</span>
                        <span className="desc2">9.99$</span>
                    </div>
                </div>
                <div className="box-pp">
                    <div className="candle">
                        <img src={Candle3} alt=""/>
                    </div>
                    <div className='belCandle'>
                        <span className="desc1">Cool Blueberries</span>
                        <span className="desc2">9.99$</span>
                    </div>
                </div>
                <div className="box-pp">
                    <div className="candle">
                        <img src={Candle4} alt=""/>
                    </div>
                    <div className='belCandle'>
                        <span className="desc1">Juicy Lemon</span>
                        <span className="desc2">9.99$</span>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default popular