import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Language } from '../types';

interface LanguageState {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const useLanguage = create<LanguageState>()(
  persist(
    (set) => ({
      language: 'my',
      setLanguage: (language) => set({ language }),
    }),
    {
      name: '18k-language',
    }
  )
);