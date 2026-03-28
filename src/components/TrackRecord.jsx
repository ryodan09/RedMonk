import React from 'react';
import { Briefcase, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import AnimatedSection from './AnimatedSection';
import './TrackRecord.css';

const TrackRecord = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      company: "Berca Hardayaperkasa",
      role: "Enterprise Solutions Architect",
      years: "2018 - 2021",
      desc: "Architected cutting-edge data centers and deployed multi-vendor security solutions for government and top-tier banks."
    },
    {
      company: "Mastersystem Infotama",
      role: "Lead Infrastructure Engineer",
      years: "2015 - 2018",
      desc: "Spearheaded advanced Cisco networking projects and scaled IT environments for major enterprises in Indonesia."
    },
    {
      company: "MyRepublic",
      role: "Network Core Specialist",
      years: "2013 - 2015",
      desc: "Designed and maintained high-speed fiber backbone routing, ensuring 99.9% uptime for massive consumer bases."
    }
  ];

  return (
    <section id="track-record" className="section section-light">
      <div className="container">
        <div className="track-layout">
          <AnimatedSection className="track-header">
            <h2 className="section-title" style={{textAlign: 'left'}}>{t('track', 'title')}</h2>
            <p className="track-intro">
              {t('track', 'intro')}
            </p>
            <div className="track-stats">
              <div className="stat-item">
                <Briefcase className="stat-icon" size={24} />
                <span className="stat-number">10+</span>
                <span className="stat-label">{t('track', 'yearsLabel')}</span>
              </div>
              <div className="stat-item">
                <Award className="stat-icon" size={24} />
                <span className="stat-number">50+</span>
                <span className="stat-label">{t('track', 'projectsLabel')}</span>
              </div>
            </div>
          </AnimatedSection>
          
          <div className="timeline">
            {experiences.map((exp, index) => (
              <AnimatedSection key={index} delay={index * 200} className="timeline-item-wrapper">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h3 className="company-name">{exp.company}</h3>
                    <div className="role-years">
                      <span className="role-title">{exp.role}</span>
                      <span className="years-badge">{exp.years}</span>
                    </div>
                    <p className="exp-desc">{exp.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackRecord;
