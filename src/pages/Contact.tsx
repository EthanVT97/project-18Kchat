import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-container">
      <nav className="page-nav">
        <Link to="/" className="nav-logo">18KChat</Link>
      </nav>

      <div className="contact-content">
        <h1>Contact Us</h1>
        <div className="contact-grid">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>We'd love to hear from you. Please fill out this form.</p>
            <div className="contact-details">
              <p>Email: support@18kchat.com</p>
              <p>Hours: Mon-Fri 9:00 AM - 5:00 PM</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
              />
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;