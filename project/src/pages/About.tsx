import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-16"
    >
      {/* Page Title */}
      <motion.h1
        className="text-4xl font-bold text-primary mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {t('about.title', 'About 18K.io')}
      </motion.h1>

      {/* Content Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4">
            {t('about.vision.title', 'Our Vision')}
          </h2>
          <p className="text-gray-300">
            {t(
              'about.vision.description',
              'Connecting Myanmar and Thailand through innovative digital solutions.'
            )}
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4">
            {t('about.mission.title', 'Our Mission')}
          </h2>
          <p className="text-gray-300">
            {t(
              'about.mission.description',
              'Providing cutting-edge technology solutions while respecting local cultures.'
            )}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
