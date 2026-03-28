import React from 'react';
import { Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import AnimatedSection from './AnimatedSection';
import './Contact.css';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section section-dark">
      <div className="container">
        <AnimatedSection>
          <div className="contact-wrapper">
            <div className="contact-info">
              <h2 className="section-title" style={{textAlign: 'left'}}>{t('contact', 'title')}</h2>
              <p className="contact-desc">
                {t('contact', 'desc')}
              </p>
              
              <div className="contact-details">
                <div className="contact-detail-item">
                  <strong>{t('contact', 'hq')}</strong>
                  <p>Jakarta, Indonesia (Mock Address)</p>
                </div>
                <div className="contact-detail-item">
                  <strong>{t('contact', 'email')}</strong>
                  <p>consult@redmonk-dummy.example.com</p>
                </div>
              </div>
            </div>
            
            <div className="contact-form-container">
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label htmlFor="name">{t('contact', 'nameLabel')}</label>
                  <input type="text" id="name" placeholder="John Doe" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="company">{t('contact', 'companyLabel')}</label>
                  <input type="text" id="company" placeholder="Enterprise Corp" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="brief">{t('contact', 'briefLabel')}</label>
                  <textarea 
                    id="brief" 
                    rows="4" 
                    placeholder={t('contact', 'briefPlaceholder')}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary submit-btn">
                  {t('contact', 'sendBtn')} <Send size={18} style={{marginLeft: '8px'}}/>
                </button>
              </form>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;
