import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import './Layout.css';

interface LayoutProps {
  children: ReactNode;
  changeLanguage: (lang: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, changeLanguage }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`layout ${theme}`}>
      <nav>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/price">Price</Link>
          <Link to="/login">Login</Link>
        </div>
        <div className="nav-controls">
          <button onClick={toggleTheme}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <div className="language-switcher">
            <button onClick={() => changeLanguage('en')}>EN</button>
            <button onClick={() => changeLanguage('my')}>MY</button>
            <button onClick={() => changeLanguage('th')}>TH</button>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;