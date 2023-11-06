import React from 'react';
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
    <div className="footer">
      <p> Copyright &copy; {new Date().getFullYear()} by Pradeesh | All Rights Reserved</p>
    </div>
  </footer>
  )
}

export default Footer;