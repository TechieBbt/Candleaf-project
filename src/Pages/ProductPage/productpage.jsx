import React, { useState } from "react";
import "./productpage.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/footer";
import Spiced from "../../Assets/spiced.png";
import cart from "../../Assets/whiteCart.png";

const Product = () => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div>
      <Header quantity={quantity} />
      <div className="about-product">
        <div className="left-side">
          <img src={Spiced} alt="" />          
        </div>
        <div className="right-side">
          <div className="right1">Spiced Mint Candleaf®</div>
          <div className="right2">
            <div className="right2a">
              <span>$9.99</span>
              <div className="quantity">
                <div className="q-text">Quantity</div>
                <div className="q-box">
                  <button onClick={handleIncrement}>+</button>
                  <input type="number" value={quantity} readOnly />
                  <button onClick={handleDecrement}>-</button>
                </div>
              </div>
            </div>
            <div className="right2b">
              <div className="choose-a">
                <div className="onegroup">
                  <div className="smallcircle"></div>
                  <div className="onetext"> One time purchase</div>
                </div>
                <div className="choose-b">
                  <div className="subflex">
                    <div className="sub-sub">
                      <div className="s-gcircle"></div>
                      <span>Subscribe and deliver every</span>
                      <span>4 weeks <i class="arrow down"></i></span>
                    </div>
                    <div className="sub-s">
                      Subscribe now and get the 10% of discount on every recurring
                      order. The discount will be applied at checkout.
                      <span className="greentext">See details</span>
                    </div>
                  </div>
                  <div className="sub-btn">
                    <button>
                      <img src={cart} alt="" /> + Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div className="right3">
            <div className="right3a">
              <div className="under1">
              All hand-made with natural soy wax, Candleaf is made for your
              pleasure moments.
              <div className="under2">🚚 FREE SHIPPING</div>
              </div>
            </div>
            <div className="right3b">
              <div>
                <b>Wax:</b> Top grade Soy wax that delivers a smoke less,
                consistent burn
              </div>
              <div>
                <b>Fragrance:</b> Premium quality ingredients with natural
                essential oils
              </div>
              <div>
                <b>Burning Time:</b> 70-75 hours <b>Dimension:</b> 10cm x 5cm{" "}
                <b>Weight:</b> 400g
              </div>
            </div>
          </div>
      <Footer />
    </div>
  );
};

export default Product;
