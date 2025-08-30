import React from 'react';
import '../index.css'; // Optional: CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
