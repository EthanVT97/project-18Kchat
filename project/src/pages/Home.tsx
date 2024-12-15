import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  // Animation variants for sections
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.5 }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      className="space-y-16"
    >
      {/* Hero Section */}
      <motion.section
        className="py-20 text-center"
        variants={fadeInUp}
      >
        <h1 className="text-5xl font-bold mb-6 text-primary">
          {t('hero.title')}
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          {t('hero.subtitle')}
        </p>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="py-16 bg-dark/50"
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Example feature cards */}
            <div className="bg-dark rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-primary">
                {t('features.feature1.title')}
              </h3>
              <p className="text-gray-300 mt-2">
                {t('features.feature1.description')}
              </p>
            </div>
            <div className="bg-dark rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-primary">
                {t('features.feature2.title')}
              </h3>
              <p className="text-gray-300 mt-2">
                {t('features.feature2.description')}
              </p>
            </div>
            <div className="bg-dark rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-primary">
                {t('features.feature3.title')}
              </h3>
              <p className="text-gray-300 mt-2">
                {t('features.feature3.description')}
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="py-16 text-center"
        variants={fadeInUp}
      >
        <div className="bg-primary/10 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4 text-primary">
            {t('cta.title')}
          </h2>
          <button className="bg-primary text-dark px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition">
            {t('cta.button')}
          </button>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Home;
