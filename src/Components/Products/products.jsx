import React from 'react'
import './products.css';
import {Link } from "react-router-dom";
import Candle1 from '../../Assets/image 1.png';
import Candle2 from '../../Assets/image 2.png';
import Candle3 from '../../Assets/image 3.png';
import Candle4 from '../../Assets/image 4.png';
import Candle5 from '../../Assets/image 5.png';
import Candle6 from '../../Assets/image 6.png';
import Candle7 from '../../Assets/image 7.png';
import Candle8 from '../../Assets/image 8.png';

const products = () => {
  return (
    <div className='products'>
        <div className='above-p'>
            <div className="head">Products</div>
            <div className="text">Order it for you or for your beloved ones</div>
        </div>
        <div className='below-p'>
            <div className="box-p">
                <Link to="/product">
                <button className="add-to-cart">View Product</button>
                </Link>
                <div className="candle">
                    <img src={Candle1} alt=""/>
                </div>
                <div className='belowCandle'>
                    <span className="desc1">Spiced Mint</span>
                    <span className="desc2">9.99$</span>
                </div>
            </div>
            <div className="box-p">
                <button className="add-to-cart">View Product</button>
                <div className="candle">
                    <img src={Candle2} alt=""/>
                </div>
                <div className='belowCandle'>
                    <span className="desc1">Sweet Strawberry</span>
                    <span className="desc2">9.99$</span>
                </div>
            </div>
            <div className="box-p">
                <button className="add-to-cart">View Product</button>
                <div className="candle">
                    <img src={Candle3} alt=""/>
                </div>
                <div className='belowCandle'>
                    <span className="desc1">Cool Blueberries</span>
                    <span className="desc2">9.99$</span>
                </div>
            </div>
            <div className="box-p">
                <button className="add-to-cart">View Product</button>
                <div className="candle">
                    <img src={Candle4} alt=""/>
                </div>
                <div className='belowCandle'>
                    <span className="desc1">Juicy Lemon</span>
                    <span className="desc2">9.99$</span>
                </div>
            </div>
            <div className="box-p">
                <button className="add-to-cart">View Product</button>
                <div className="candle">
                    <img src={Candle5} alt=""/>
                </div>
                <div className='belowCandle'>
                    <span className="desc1">Product name</span>
                    <span className="desc2">9.99$</span>
                </div>
            </div>
            <div className="box-p">
                <button className="add-to-cart">View Product</button>
                <div className="candle">
                    <img src={Candle6} alt=""/>
                </div>
                <div className='belowCandle'>
                    <span className="desc1">Fragrant Cinnamon</span>
                    <span className="desc2">9.99$</span>
                </div>
            </div>
            <div className="box-p">
                <button className="add-to-cart">View Product</button>
                <div className="candle">
                    <img src={Candle7} alt=""/>
                </div>
                <div className='belowCandle'>
                    <span className="desc1">Summer Cherries</span>
                    <span className="desc2">9.99$</span>
                </div>
            </div>
            <div className="box-p">
                <button className="add-to-cart">View Product</button>
                <div className="candle">
                    <img src={Candle8} alt=""/>
                </div>
                <div className='belowCandle'>
                    <span className="desc1">Clean Lavander</span>
                    <span className="desc2">9.99$</span>
                </div>
            </div>
        </div>
    </div>
  )
}


export default products