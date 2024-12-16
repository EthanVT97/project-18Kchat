import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const buttonStyle = (isActive: boolean) => ({
    backgroundColor: isActive ? '#006400' : '#FFFFFF',
    color: isActive ? '#FFFFFF' : '#006400',
    border: '1px solid #006400',
    padding: '0.5rem 1rem',
    margin: '0 0.5rem',
    borderRadius: '0.375rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  });

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', padding: '1rem' }}>
      <button 
        onClick={() => changeLanguage('en')} 
        style={buttonStyle(i18n.language === 'en')}
      >
        English
      </button>
      <button 
        onClick={() => changeLanguage('my')} 
        style={buttonStyle(i18n.language === 'my')}
      >
        မြန်မာ
      </button>
      <button 
        onClick={() => changeLanguage('th')} 
        style={buttonStyle(i18n.language === 'th')}
      >
        ไทย
      </button>
    </div>
  );
};

export default LanguageSwitcher;