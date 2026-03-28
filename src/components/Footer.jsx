import React from 'react';
import { Hexagon, Globe, MessageCircle, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="logo logo-footer">
            <Hexagon className="logo-icon" size={28} />
            <span className="logo-text">RED MONK</span>
          </div>
          <p className="footer-desc">
            {t('footer', 'desc')}
          </p>
          <div className="social-links">
            <a href="#" className="social-link"><Globe size={20} /></a>
            <a href="#" className="social-link"><MessageCircle size={20} /></a>
            <a href="#" className="social-link"><Mail size={20} /></a>
          </div>
        </div>
        
        <div className="footer-links-group">
          <h4 className="footer-title">{t('footer', 'navTitle')}</h4>
          <ul className="footer-links">
            <li><a href="#edge">{t('nav', 'edge')}</a></li>
            <li><a href="#services">{t('nav', 'services')}</a></li>
            <li><a href="#track-record">{t('nav', 'track')}</a></li>
          </ul>
        </div>
        
        <div className="footer-links-group">
          <h4 className="footer-title">{t('footer', 'legalTitle')}</h4>
          <ul className="footer-links">
            <li><a href="#">{t('footer', 'privacy')}</a></li>
            <li><a href="#">{t('footer', 'tos')}</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} {t('footer', 'rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
