import React from 'react';
import { Server, ShieldAlert, Cpu, Laptop } from 'lucide-react';
import './Services.css';

const Services = () => {
  const serviceList = [
    {
      title: "Network & Security",
      icon: <ShieldAlert size={32} />,
      desc: "Comprehensive firewall, VPN, and intrustion detection setups ensuring threat-proof communication lines."
    },
    {
      title: "Data Center Build",
      icon: <Server size={32} />,
      desc: "Robust physical and cloud infrastructure provisioning matching enterprise scalability demands."
    },
    {
      title: "IT Procurement",
      icon: <Cpu size={32} />,
      desc: "Strategic sourcing of high-end hardware and software licenses from trusted global OEMs."
    },
    {
      title: "App Blueprinting",
      icon: <Laptop size={32} />,
      desc: "End-to-end architecture design for modern, secure, and resilient business applications."
    }
  ];

  return (
    <section id="services" className="section section-dark">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          {serviceList.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
              <a href="#contact" className="service-link">Learn more &rarr;</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
