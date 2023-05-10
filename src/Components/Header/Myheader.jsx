import React from 'react'
import './header.css';
import {Link } from "react-router-dom";
import Logo from '../../Assets/logo.png';
import Profile from '../../Assets/Profile.png';
import Cart from '../../Assets/Cart.png';

const toggleMobileMenu = (menu) => {
    menu.classList.toggle('open');
  };

const Myheader = (props) => {
  return (
    <div className='header'>
      <div className='nav'>
        <div id="hamburger-icon" onClick={(e) => toggleMobileMenu(e.target)}>
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
          <ul class="mobile-menu">
            <li href="#">Discovery <i class="arrow down"></i></li>
            <li href="#">About</li>
            <li href="#">Contact us</li>
          </ul>
        </div>
        <div className='logo'>
          <Link to = "/">
            <img src={Logo} alt='logo'/>
          </Link>
        </div>
        <div className='middle-nav'>
          <ul>
            <li>Discovery <i class="arrow down"></i></li>
            <li>About</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className='right-nav'>
          <img src={Profile} alt=""/>
          <Link to = "/cart">
            <div className="cart-container" >
              <img src={Cart} alt="" />
              {props.quantity > 0 && <div className="cart-count">{props.quantity}</div>}
            </div>
          </Link>
        </div>
      </div>
      <div className="underline"> <hr/> </div>
    </div>
  )
}

export default Myheader