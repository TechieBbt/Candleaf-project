import React from 'react'
import "./cart.css";
import {Link } from "react-router-dom";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import Spiced from "../../Assets/smallproduct.png";

const cart = () => {
  return (
    <div className="cart">
        <Header/>
        <div className="mycart">
            <div className="cart-head">
                <div>Your cart items</div>
                <div>Back to shopping</div>
            </div>
            <div className="table-head">
                <div className="head1">Product</div>
                <div className="head2">
                    <span>Price</span><span>Quantity</span><span>Total</span>
                </div>
            </div>
            <hr/>
            <div className="table-in">
                <div className="leftTable">
                    <div className="proImg">
                        <img src={Spiced} alt=""/>
                    </div>
                    <div className="proImgside">
                        <div>Spiced Mint Candleaf®</div>
                        <div>Remove</div>
                    </div>
                </div>
                <div className="rightTable">
                    <span>$ 9.99</span><span className="boxq">1</span><span>$ 9.99</span>
                </div>
            </div>
            <hr/>
            <div className="underTable">
                <div className="under-ta">
                    <div className="firstside">
                        <span>Sub-total</span><span>$ 9.99</span>
                    </div>
                    <div className="secSide">
                        <Link to ="/checkout">
                            <button>Check-out</button>
                        </Link>
                    </div>
                </div>
                <div className="belowfirst">Tax and shipping cost will be calculated later</div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default cart