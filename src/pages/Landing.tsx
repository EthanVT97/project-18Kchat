import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Chatbot from '../components/chat/Chatbot';
import { initScrollHandler } from '../utils/scrollHandler';
import { landingData } from '../data/landingData';
import '../styles/variables.css';
import './Landing.css';

const Landing: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [visibleFeatures, setVisibleFeatures] = useState<number[]>([]);

  useEffect(() => {
    const cleanup = initScrollHandler();
    
    // Simulate loading
    setTimeout(() => setIsLoading(false), 1000);

    // Scroll reveal for features
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisibleFeatures(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.feature-card').forEach((card) => {
      observer.observe(card);
    });

    return () => {
      cleanup();
      observer.disconnect();
    };
  }, []);

  return (
    <div className="landing-container">
      <nav className="landing-nav">
        <div className="logo">18KChat</div>
        <div className={`nav-links ${isLoading ? 'loading' : ''}`}>
          <Link to="/about">About</Link>
          <Link to="/price">Pricing</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>

      <section className="hero-section">
        <h1 className={isLoading ? 'loading' : ''}>{landingData.hero.title}</h1>
        <p>{landingData.hero.subtitle}</p>
        <Link to="/login" className="cta-button">{landingData.hero.ctaText}</Link>
        
        <div className="stats-grid">
          {Object.entries(landingData.stats).map(([key, value]) => (
            <div key={key} className="stat-item">
              <h3>{value}</h3>
              <p>{key}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="features-section">
        <h2>{landingData.features.title}</h2>
        <div className="features-grid">
          {landingData.features.items.map((feature, index) => (
            <div
              key={index}
              data-index={index}
              className={`feature-card ${visibleFeatures.includes(index) ? 'visible' : ''}`}
            >
              <i className={`fas fa-${feature.icon} feature-icon`}></i>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <h2>{landingData.cta.title}</h2>
        <p>{landingData.cta.subtitle}</p>
        <Link to="/login" className="cta-button">{landingData.cta.buttonText}</Link>
      </section>

      <Chatbot />
    </div>
  );
};

export default Landing;