import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-container">
      <nav className="page-nav">
        <Link to="/" className="nav-logo">18KChat</Link>
      </nav>
      
      <div className="about-content">
        <h1>About 18KChat</h1>
        <div className="about-sections">
          <section className="about-section">
            <h2>Our Mission</h2>
            <p>To provide seamless and secure communication for everyone, everywhere.</p>
          </section>
          
          <section className="about-section">
            <h2>Our Story</h2>
            <p>Founded with a vision to revolutionize digital communication, 18KChat has grown into a trusted platform for millions of users worldwide.</p>
          </section>

          <section className="about-section">
            <h2>Our Values</h2>
            <ul>
              <li>Privacy First</li>
              <li>User-Centric Design</li>
              <li>Continuous Innovation</li>
              <li>Global Accessibility</li>
            </ul>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;