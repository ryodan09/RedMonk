import React from 'react';
import { Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section section-dark">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-info">
            <h2 className="section-title" style={{textAlign: 'left'}}>Let's Build It.</h2>
            <p className="contact-desc">
              Ready to fortify your IT infrastructure? Fill out the brief form and we’ll get back to you with a tailored technical consultation.
            </p>
            
            <div className="contact-details">
              <div className="contact-detail-item">
                <strong>HQ</strong>
                <p>Jakarta, Indonesia (Mock Address)</p>
              </div>
              <div className="contact-detail-item">
                <strong>Email</strong>
                <p>consult@redmonk-dummy.example.com</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="John Doe" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input type="text" id="company" placeholder="Enterprise Corp" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="brief">Project Brief</label>
                <textarea 
                  id="brief" 
                  rows="4" 
                  placeholder="Tell us about your IT needs, e.g., Data Center migration or Firewall upgrade..."
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary submit-btn">
                Send Request <Send size={18} style={{marginLeft: '8px'}}/>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
