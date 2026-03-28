import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import './Hero.css';

const Hero = () => {
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
            <span>Enterprise Grade IT Solutions</span>
          </div>
          
          <h1 className="hero-title animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Elite IT Infrastructure & <br />
            <span className="text-primary">Security-First Solutions</span>
          </h1>
          
          <p className="hero-subtitle animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Bridging enterprise experience from Berca, Mastersystem, and MyRepublic 
            to your business growth. We build resilient, high-performance IT environments.
          </p>
          
          <div className="hero-actions animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a href="#contact" className="btn btn-primary hero-btn">
              Consult Now <ArrowRight size={18} className="ml-2" />
            </a>
            <a href="#services" className="btn hero-btn-outline">
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
