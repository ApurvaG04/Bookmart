import './App.css';
import React from 'react';
import { BsSearch, BsCart  } from "react-icons/bs";
import { VscAccount  } from "react-icons/vsc";

function Navigation () {
    return (
        <div className='navbar'>
            <a href='/'><span id='logo'>Bookmart</span></a>
            <div className='text-group'>
                <a href='/'><span className='nav-text'>Home</span></a>
                <a href='/sell'><span className='nav-text'>Sell</span></a>
                <a href='/purchase'><span className='nav-text'>Purchase</span></a>
            </div>
            <span id='search-icon'><BsSearch /></span>
            <span id='search-input'><input placeholder='Search books'/></span>
            <div className='icon-group'>
                <a href='/cart'><span id='cart-icon'><BsCart /></span></a>
                <a href='/profile'><span id='login-icon'><VscAccount /></span></a>
            </div>
        </div>
    )
}

export default Navigation