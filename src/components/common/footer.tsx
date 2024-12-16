import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-dark/90 border-t border-primary/20 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-primary text-xl font-bold mb-4">18K.io</h3>
            <p className="text-gray-400">
              {t('footer.copyright')}
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-primary">
                Home
              </Link>
              <Link to="/about" className="block text-gray-400 hover:text-primary">
                About
              </Link>
              <Link to="/contact" className="block text-gray-400 hover:text-primary">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;