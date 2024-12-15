import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="bg-dark border-b border-primary/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-primary text-2xl font-bold">
            18K.io
          </Link>
          
          <div className="flex items-center gap-8">
            <Link to="/" className="hover:text-primary">
              {t('nav.home')}
            </Link>
            <Link to="/about" className="hover:text-primary">
              {t('nav.about')}
            </Link>
            <Link to="/contact" className="hover:text-primary">
              {t('nav.contact')}
            </Link>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;