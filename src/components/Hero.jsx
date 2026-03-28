import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Hero.css';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-shape hero-shape-1"></div>
        <div className="hero-shape hero-shape-2"></div>
      </div>
      
      <div className="container hero-container relative">
        <div className="hero-content">
          <div className="hero-badge animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <ShieldCheck size={18} />
            <span>{t('hero', 'badge')}</span>
          </div>
          
          <h1 className="hero-title animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {t('hero', 'title1')} <br />
            <span className="text-primary">{t('hero', 'title2')}</span>
          </h1>
          
          <p className="hero-subtitle animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {t('hero', 'subtitle')}
          </p>
          
          <div className="hero-actions animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a href="#contact" className="btn btn-primary hero-btn">
              {t('hero', 'btnConsult')} <ArrowRight size={18} className="ml-2" />
            </a>
            <a href="#services" className="btn hero-btn-outline">
              {t('hero', 'btnExplore')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
