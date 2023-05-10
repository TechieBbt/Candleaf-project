import React from 'react'
import './shipping.css';
import Logo from '../../Assets/logo.png';
import {Link } from "react-router-dom";
import CounterProduct from "../../Assets/productcounter.png";

const shipping = () => {
  return (
    <div className="shipg">
        <div className="shipping">
            <div className="bigship">
                <div className="ship-details">
                    <div className="logo2">
                        <Link to = "/">
                            <img src={Logo} alt='logo'/>
                        </Link>
                    </div>
                    <div className="fill-ship">
                        <div className="steps-s">
                            <Link to ="/cart" style={{ textDecoration:'none'}}> 
                            <div className="step-a">Cart</div> 
                            </Link>
                            <div className="step-arrow"> {'>'} </div>
                            <Link to ="/checkout" style={{ textDecoration:'none'}}> 
                            <div className="step-a">Details</div>
                            </Link>
                            <div className="step-arrow"> {'>'} </div>
                            <div className="step-b">Shipping</div>
                            <div className="step-arrow"> {'>'} </div>
                            <div className="step-c">Payment</div>
                        </div>
                        <div className="summarybox">
                            <div className="summary">
                                <div className="placed-text">Contact</div>
                                <input type="text" className="sum-input" Value="joe.spagnuolo@uxbly.com"></input>
                                <div className="sum-btn">Edit</div>
                            </div>
                            <div className="middleline">
                                <hr/>
                            </div>
                            <div className="summary">
                                <div className="placed-text">Ship to</div>
                                <input type="text" className="sum-input" Value="Via Firenze 23, 92023, Campobello di  Licata AG, Italia"></input>
                                <div className="sum-btn">Edit</div>
                            </div>
                        </div>
                        <div className="shipmeth">
                            <div className="ship-m">Shipping method</div>
                            <div className="shipbox">
                                <div className="ship-b">
                                    <label for="myRadio" class="radio">
                                        <input type="radio" id="myRadio" />
                                        <div className="radio-radio"></div>
                                        Standard Shipping
                                    </label>
                                    <div className="free">Free</div>
                                </div>
                            </div>                        
                        </div>
                    </div>                
                </div>
            </div>
            <div className="coupon">
                <div className="coupon-details">
                    <div className="coupon-top">
                        <div className="c-top-a">
                            <div className="counternumber"> 1
                            </div>
                            <div>
                            <img src={CounterProduct} alt=""/>
                            </div>
                        </div>
                        <div className="c-top-b">
                            <span>Spiced Mint Candleaf®</span><span>$ 9.99</span>
                        </div>
                    </div>
                    <div className="shortline"> 
                    <hr/>
                    </div>
                    <div className="coupon-code">
                        <input type="code" id="c-code" placeholder="Coupon code"></input>
                        <button id="add-code">Add Code</button>
                    </div>
                    <div className="shortline"> 
                    <hr/>
                    </div>
                    <div className="calc">
                        <div className="subtotal">
                            <div className="subtext">Subtotal</div>
                            <div className="subamount">$  9.99</div>
                        </div>
                        <div className="subship">
                            <div className="subtext">Shipping</div>
                            <div className="subtext">Calculated at the next step</div>
                        </div>
                        <div className="shortline"> 
                        <hr/>
                        </div>
                        <div className="total">
                            <div className="subtext">Total</div>
                            <div className="total-amount">$  9.99</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>         
        <div className="below-d">
            <Link to ="/checkout" style={{ textDecoration:'none'}}> 
                <div className="back-to-c">Back to Details</div> 
            </Link>
            <Link to ="/" onClick={() => window.scrollTo(0, 0)} style={{ textDecoration:'none'}}> 
                <button onClick={() => window.scrollTo(0, 0)}>Go to Payment</button>
            </Link>
        </div>
    </div>
    
)
}

export default shipping