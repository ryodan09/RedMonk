import React, { useState, useEffect } from 'react';
import { Menu, X, Hexagon, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav', 'edge'), href: '#edge' },
    { name: t('nav', 'services'), href: '#services' },
    { name: t('nav', 'track'), href: '#track-record' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <a href="#" className="logo">
          <Hexagon className="logo-icon" size={28} />
          <span className="logo-text">RED MONK</span>
        </a>
        
        <nav className="desktop-nav">
          <button onClick={toggleLanguage} className="lang-toggle" title="Toggle Language">
            <Globe size={18} /> {language.toUpperCase()}
          </button>
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="nav-link">{link.name}</a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn-primary nav-cta">{t('nav', 'consult')}</a>
        </nav>

        <div className="mobile-actions">
          <button onClick={toggleLanguage} className="lang-toggle-mobile" title="Toggle Language">
            {language.toUpperCase()}
          </button>
          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav className="mobile-nav animate-fade-in">
          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="mobile-nav-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a 
                href="#contact" 
                className="btn btn-primary mobile-cta"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav', 'consult')}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
