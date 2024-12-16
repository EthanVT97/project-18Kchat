import { useTranslation } from 'react-i18next';
import type { Translation } from '../types';

export const useLanguage = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language as keyof Translation;

  return {
    language: currentLang,
    changeLanguage: (lang: keyof Translation) => i18n.changeLanguage(lang)
  };
};