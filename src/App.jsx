import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import OurEdge from './components/OurEdge';
import Services from './components/Services';
import TrackRecord from './components/TrackRecord';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <OurEdge />
        <Services />
        <TrackRecord />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
