import React from "react";
import "./Footer.css"; // Create this file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} Yucai Learning. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
