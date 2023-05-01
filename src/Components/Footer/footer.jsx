import React from 'react'
import './footer.css';
import Footlogo from '../../Assets/footlogo.png';

const footer = () => {
  return (
    <div className='footer'>
        <hr/>
        <div className="inner-f">
            <div className="left-f">
                <img src={Footlogo} alt=""/>
                <span className="footText">Your natural candle made for your home and for your wellness.</span>
            </div>
            <div className="right-f">
                <div className="footlist">
                    <ul>
                        <li><span>Discovery</span></li>
                        <li>New season</li>
                        <li>Most searched</li>
                        <li>Most selled</li>
                    </ul>
                </div>
                <div className="footright2">
                    <div className="footlist">
                        <ul>
                            <li><span>About</span></li>
                            <li>Help</li>
                            <li>Shipping</li>
                            <li>Affiliate</li>
                        </ul>
                    </div>
                    <div className="footlist">
                        <ul>
                            <li><span>Info</span></li>
                            <li>Contact us</li>
                            <li>Privacy Policies</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default footer