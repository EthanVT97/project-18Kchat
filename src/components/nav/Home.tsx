import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation();
  
  const containerStyle = {
    backgroundColor: '#FFFFFF',
    color: '#006400',
    padding: '2rem',
    borderRadius: '0.5rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const sectionStyle = {
    marginBottom: '2rem',
    padding: '1rem',
    borderRadius: '0.375rem',
    border: '1px solid #006400'
  };

  const titleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#006400',
    marginBottom: '1rem'
  };

  const linkStyle = {
    display: 'inline-block',
    padding: '0.5rem 1rem',
    margin: '0.5rem',
    backgroundColor: '#006400',
    color: '#FFFFFF',
    borderRadius: '0.375rem',
    textDecoration: 'none',
    transition: 'opacity 0.3s ease'
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={containerStyle}
    >
      <h1 style={{ ...titleStyle, fontSize: '2rem', textAlign: 'center' }}>
        {t('nav.welcome')}
      </h1>

      <div style={sectionStyle}>
        <h2 style={titleStyle}>{t('nav.categories')}</h2>
        <div>
          <Link to="/category/gaming" style={linkStyle}>{t('nav.gaming')}</Link>
          <Link to="/category/social" style={linkStyle}>{t('nav.social')}</Link>
          <Link to="/category/business" style={linkStyle}>{t('nav.business')}</Link>
          <Link to="/category/education" style={linkStyle}>{t('nav.education')}</Link>
          <Link to="/category/shopping" style={linkStyle}>{t('nav.shopping')}</Link>
          <Link to="/category/entertainment" style={linkStyle}>{t('nav.entertainment')}</Link>
        </div>
      </div>

      <div style={sectionStyle}>
        <h2 style={titleStyle}>{t('nav.popularCities')}</h2>
        <div>
          <Link to="/city/yangon" style={linkStyle}>{t('nav.yangon')}</Link>
          <Link to="/city/mandalay" style={linkStyle}>{t('nav.mandalay')}</Link>
          <Link to="/city/naypyidaw" style={linkStyle}>{t('nav.naypyidaw')}</Link>
          <Link to="/city/bagan" style={linkStyle}>{t('nav.bagan')}</Link>
          <Link to="/city/mawlamyine" style={linkStyle}>{t('nav.mawlamyine')}</Link>
          <Link to="/city/taunggyi" style={linkStyle}>{t('nav.taunggyi')}</Link>
        </div>
      </div>

      <div style={sectionStyle}>
        <h2 style={titleStyle}>{t('nav.features')}</h2>
        <div>
          <Link to="/feature/chat" style={linkStyle}>{t('nav.realTimeChat')}</Link>
          <Link to="/feature/voice" style={linkStyle}>{t('nav.voiceCalls')}</Link>
          <Link to="/feature/groups" style={linkStyle}>{t('nav.groupChats')}</Link>
          <Link to="/feature/sharing" style={linkStyle}>{t('nav.fileSharing')}</Link>
          <Link to="/feature/stickers" style={linkStyle}>{t('nav.myanmarStickers')}</Link>
          <Link to="/feature/themes" style={linkStyle}>{t('nav.customThemes')}</Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;