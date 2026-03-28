import React from 'react';
import { Server, ShieldAlert, Cpu, Laptop } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import AnimatedSection from './AnimatedSection';
import './Services.css';

const Services = () => {
  const { t } = useLanguage();

  const serviceList = [
    {
      title: t('services', 'netTitle'),
      icon: <ShieldAlert size={32} />,
      desc: t('services', 'netDesc')
    },
    {
      title: t('services', 'dcTitle'),
      icon: <Server size={32} />,
      desc: t('services', 'dcDesc')
    },
    {
      title: t('services', 'procTitle'),
      icon: <Cpu size={32} />,
      desc: t('services', 'procDesc')
    },
    {
      title: t('services', 'appTitle'),
      icon: <Laptop size={32} />,
      desc: t('services', 'appDesc')
    }
  ];

  return (
    <section id="services" className="section section-dark">
      <div className="container">
        <AnimatedSection>
          <h2 className="section-title">{t('services', 'title')}</h2>
        </AnimatedSection>
        <div className="services-grid">
          {serviceList.map((service, index) => (
            <AnimatedSection key={index} delay={index * 150} className="service-grid-item">
              <div className="service-card">
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
                <a href="#contact" className="service-link">{t('services', 'learnMore')}</a>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
