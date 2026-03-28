import React from 'react';
import { Building2, Shield, Network } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './OurEdge.css';

const OurEdge = () => {
  const { t } = useLanguage();

  const edgeItems = [
    {
      icon: <Building2 className="edge-icon" size={48} />,
      title: t('edge', 'expTitle'),
      description: t('edge', 'expDesc')
    },
    {
      icon: <Shield className="edge-icon" size={48} />,
      title: t('edge', 'secTitle'),
      description: t('edge', 'secDesc')
    },
    {
      icon: <Network className="edge-icon" size={48} />,
      title: t('edge', 'vendorTitle'),
      description: t('edge', 'vendorDesc')
    }
  ];

  return (
    <section id="edge" className="section section-light">
      <div className="container">
        <h2 className="section-title">{t('edge', 'title')}</h2>
        
        <div className="edge-grid">
          {edgeItems.map((item, index) => (
            <div className="edge-card" key={index}>
              <div className="edge-icon-wrapper">
                {item.icon}
              </div>
              <h3 className="edge-title">{item.title}</h3>
              <p className="edge-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurEdge;
