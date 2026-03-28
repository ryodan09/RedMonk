import React from 'react';
import { Building2, Shield, Network } from 'lucide-react';
import './OurEdge.css';

const OurEdge = () => {
  const edgeItems = [
    {
      icon: <Building2 className="edge-icon" size={48} />,
      title: "Enterprise Experience",
      description: "Proven track record managing robust infrastructure for top-tier companies. We bring big-tech reliability to your business."
    },
    {
      icon: <Shield className="edge-icon" size={48} />,
      title: "Security-First DNA",
      description: "Security is never an afterthought. From network architecture to application deployment, every layer is fortified."
    },
    {
      icon: <Network className="edge-icon" size={48} />,
      title: "Direct Vendor Access",
      description: "Leverage our strategic partnerships with global vendors to secure the right technology at the best value."
    }
  ];

  return (
    <section id="edge" className="section section-light">
      <div className="container">
        <h2 className="section-title">Our Edge</h2>
        
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
