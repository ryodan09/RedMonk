import React from 'react';
import { Hexagon, Globe, MessageCircle, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="logo logo-footer">
            <Hexagon className="logo-icon" size={28} />
            <span className="logo-text">RED MONK</span>
          </div>
          <p className="footer-desc">
            Elite IT Infrastructure & Security-First Solutions. Bringing enterprise resilience to modern businesses.
          </p>
          <div className="social-links">
            <a href="#" className="social-link"><Globe size={20} /></a>
            <a href="#" className="social-link"><MessageCircle size={20} /></a>
            <a href="#" className="social-link"><Mail size={20} /></a>
          </div>
        </div>
        
        <div className="footer-links-group">
          <h4 className="footer-title">Navigation</h4>
          <ul className="footer-links">
            <li><a href="#edge">Our Edge</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#track-record">Track Record</a></li>
          </ul>
        </div>
        
        <div className="footer-links-group">
          <h4 className="footer-title">Legal</h4>
          <ul className="footer-links">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Red Monk IT Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
