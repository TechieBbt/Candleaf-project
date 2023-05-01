import React from 'react'
import "./checkout.css";
import {Link } from "react-router-dom";
import Logo from '../../Assets/logo.png';
import Cart1 from '../../Assets/Cart1.png';
import CounterProduct from "../../Assets/productcounter.png";

const checkout = () => {
  return (
    <div className="checkout">
        
        <div className="check">
            <div className="details">
                <div className="logo2">
                    <Link to = "/">
                        <img src={Logo} alt='logo'/>
                    </Link>
                </div>
                <div className="drop">
                    <div className="drop-down">
                        <div className="cartdrop">
                            <img src={Cart1} alt=""/>
                        </div>
                        <div className="details-drop">
                            <span>See  your order details</span><span> <i class="d-arrow down"></i></span>
                        </div>
                        <div className="pricedrop">$ 9.99</div>
                    </div>
                </div>
                <div className="fill-details">
                    <div className="steps">
                        <Link to ="/cart" style={{ textDecoration:'none'}}> 
                        <div className="step-a">Cart</div> 
                        </Link>
                        <div className="step-arrow"> {'>'} </div>
                        <div className="step-b">Details</div>
                        <div className="step-arrow"> {'>'} </div>
                        <div className="step-c">Shipping</div>
                        <div className="step-arrow"> {'>'} </div>
                        <div className="step-c">Payment</div>
                    </div>
                    <div className="contact">
                        <div className="con-head">
                            <div className="con-left">Contact</div>
                            <div className="con-right">Do you have an account?  <span>Login</span> </div>
                        </div>
                        <div className="input">
                            <input type="email" id="email" placeholder="Email or mobile phone number"></input>
                        </div>
                        <div className="under-input">
                            <input type="checkbox"></input>
                            <div className="box-desc">Add me to Candleaf newsletter for a 10% discount</div>
                        </div>
                    </div>
                    <div className="ship">
                        <div className="shiphead">Shipping Address</div>
                        <div className="ship-input">
                            <div className="names">
                                <input type="name" id="name" placeholder="Name"></input>
                                <input type="name" id="name" placeholder="Second Name"></input>
                            </div>
                            <input type="address" id="note" placeholder="Address and number"></input>
                            <input type="message" id="note" placeholder="Shipping note (optional)"></input>
                            <div className="other-inputs">
                                <input type="city" id="other-i" placeholder="City"></input>
                                <input type="code" id="other-i" placeholder="Postal Code"></input>
                                <label for="Province" placeholder="Province" id="province"> Province
                                    <select name="Province" id="select-p" value="Province">
                                    <option placeholder="Province">Province</option>
                                    </select>
                                </label>
                            </div>
                            <label for="Country/Region" placeholder="Country/Region" id="country"> Country/Region
                                <select name="Country/Region" id="select-cr"> 
                                <option placeholder="Italy">Italy</option>
                                </select>
                            </label>
                        </div>
                        <div className="under-ship">
                            <input type="checkbox"></input>
                            <div className="box-text">Save this information for a future fast checkout</div>
                        </div>
                    </div>
                    <div className="below-d">
                        <Link to ="/cart" style={{ textDecoration:'none'}}> 
                        <div className="back-to-c">Back to Cart</div> 
                        </Link>
                        <Link to ="/shipping" style={{ textDecoration:'none'}}> 
                        <button>Go to shipping</button>
                        </Link>
                    </div>
                </div>                
            </div>
            <div className="coupon">
                <div className="coupon-details">
                    <div className="coupon-top">
                        <div className="c-top-a">
                            <div className="counternumber"> 1
                            {/* <img src={CounterNumber} alt=""/> */}
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
    </div>
  )
}

export default checkout