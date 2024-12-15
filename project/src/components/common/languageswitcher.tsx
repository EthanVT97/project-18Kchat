import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'my', name: 'Myanmar' },
  { code: 'th', name: 'Thai' }
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  return (
    <div className="flex gap-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`px-3 py-1 rounded ${
            i18n.language === lang.code
              ? 'bg-primary text-dark'
              : 'bg-dark text-primary'
          }`}
        >
          {lang.name}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;