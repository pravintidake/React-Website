import React from 'react';
import logo from './logo.svg';
import './mynote.css';
const Header = () => {
    return (
      <>
        <h2 className="header">
          <img src={logo} className="logo" alt="logo"/> Ashirvad Keep
        </h2>
      </>
    )
  }
  export default Header;