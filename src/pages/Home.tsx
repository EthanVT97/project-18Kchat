import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaRocket, FaTools, FaChartLine } from 'react-icons/fa';
import './Home.css';

const trendingData = [
  {
    id: 1,
    title: 'Myanmar Online Shops on the Rise',
    description: 'Discover top-rated online stores offering a variety of products.',
    image: '/images/online-shops.jpg',
    icon: <FaRocket />,
  },
  {
    id: 2,
    title: 'Efficient Customer Support Services',
    description: 'Explore businesses excelling in customer support solutions.',
    image: '/images/customer-support.jpg',
    icon: <FaTools />,
  },
  {
    id: 3,
    title: 'Myanmar Small Business Success Stories',
    description: 'Inspiring tales of local entrepreneurs making an impact.',
    image: '/images/small-business.jpg',
    icon: <FaChartLine />,
  },
];

const businessData = [
  {
    id: 1,
    title: '18KChat.io Customer Support Tools',
    description: 'Transform your customer service experience with cutting-edge tools.',
    link: '/customer-support',
    icon: <FaTools />,
  },
  {
    id: 2,
    title: 'Empowering Online Shops',
    description: 'Boost sales with seamless communication and automation.',
    link: '/online-shop-solutions',
    icon: <FaRocket />,
  },
  {
    id: 3,
    title: 'Local Business Growth Tools',
    description: 'Tailored solutions to help your business thrive.',
    link: '/business-growth',
    icon: <FaChartLine />,
  },
];

export const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="home-container">
      <header className="hero-section">
        <div className="hero-content">
          <h1>{t('home.title', 'Welcome to 18KChat.io')}</h1>
          <p>{t('home.subtitle', 'Your Gateway to Myanmar Business Success')}</p>
          <div className="hero-cta">
            <a href="/get-started" className="cta-button primary">
              {t('home.getStarted', 'Get Started')}
            </a>
            <a href="/learn-more" className="cta-button secondary">
              {t('home.learnMore', 'Learn More')}
            </a>
          </div>
        </div>
      </header>

      <section className="trending-section">
        <div className="section-header">
          <h2>{t('home.trending', 'Trending in Myanmar')}</h2>
          <p>{t('home.trendingSubtitle', 'Stay updated with the latest business trends')}</p>
        </div>
        <div className="trending-grid">
          {trendingData.map((item) => (
            <div className="trending-card" key={item.id}>
              <div className="card-image-container">
                <img src={item.image} alt={item.title} className="trending-image" />
                <div className="card-icon">{item.icon}</div>
              </div>
              <div className="card-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href="#" className="read-more">
                  {t('home.readMore', 'Read More')} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="business-section">
        <div className="section-header">
          <h2>{t('home.business', 'Our Business Solutions')}</h2>
          <p>{t('home.businessSubtitle', 'Comprehensive tools for your business growth')}</p>
        </div>
        <div className="business-grid">
          {businessData.map((item) => (
            <div key={item.id} className="business-card">
              <div className="business-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href={item.link} className="business-link">
                {t('home.learnMore', 'Learn More')} →
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>{t('home.ctaTitle', 'Ready to Transform Your Business?')}</h2>
          <p>{t('home.ctaDescription', 'Join thousands of successful businesses in Myanmar')}</p>
          <a href="/signup" className="cta-button primary">
            {t('home.startNow', 'Start Now')}
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-info">
            <p>© {new Date().getFullYear()} 18KChat.io. {t('home.rightsReserved', 'All rights reserved.')}</p>
          </div>
          <div className="footer-links">
            <a href="/privacy">{t('home.privacy', 'Privacy Policy')}</a>
            <a href="/terms">{t('home.terms', 'Terms of Service')}</a>
            <a href="/contact">{t('home.contact', 'Contact Us')}</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;