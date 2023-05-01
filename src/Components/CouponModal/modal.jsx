import React from 'react'

const modal = () => {
  return (
    <div>
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
  )
}

export default modal