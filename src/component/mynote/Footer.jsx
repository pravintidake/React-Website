import React from 'react';
import './mynote.css';
const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <>
        <footer>
            <p>Copyright &copy; {year} by Pravin Tidake</p>
        </footer>
      </>
    )
  }
  export default Footer;