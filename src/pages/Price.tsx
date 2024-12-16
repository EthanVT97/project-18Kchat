import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import './Price.css';

const Price: React.FC = () => {
  return (
    <div className="pricing-container">
      <nav className="page-nav">
        <Link to="/" className="nav-logo">18KChat</Link>
      </nav>

      <div className="pricing-content">
        <h1>Choose Your Plan</h1>
        <div className="pricing-grid">
          <div className="pricing-card">
            <h2>Free</h2>
            <p className="price">$0/month</p>
            <ul>
              <li>Basic Chat Features</li>
              <li>1 Group Chat</li>
              <li>Basic Support</li>
            </ul>
            <Link to="/login" className="pricing-cta">Get Started</Link>
          </div>

          <div className="pricing-card featured">
            <h2>Pro</h2>
            <p className="price">$9.99/month</p>
            <ul>
              <li>Unlimited Chats</li>
              <li>10 Group Chats</li>
              <li>Priority Support</li>
              <li>File Sharing</li>
            </ul>
            <Link to="/login" className="pricing-cta">Try Pro</Link>
          </div>

          <div className="pricing-card">
            <h2>Enterprise</h2>
            <p className="price">Custom</p>
            <ul>
              <li>All Pro Features</li>
              <li>Custom Integration</li>
              <li>24/7 Support</li>
              <li>Admin Dashboard</li>
            </ul>
            <Link to="/contact" className="pricing-cta">Contact Us</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Price;