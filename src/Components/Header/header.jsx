import React from 'react'
import './header.css';
import {Link } from "react-router-dom";
import Logo from '../../Assets/logo.png';
import Profile from '../../Assets/Profile.png';
import Cart from '../../Assets/Cart.png';

const header = () => {
  return (
    <div className='header'>
      <div className='nav'>
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
            <img src={Cart} alt="" />
          </Link>
        </div>
      </div>
      <div className="underline"> <hr/> </div>
    </div>
  )
}

export default header
