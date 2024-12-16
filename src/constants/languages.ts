import type { Translation } from '../types';

export const SUPPORTED_LANGUAGES: Array<keyof Translation> = ['en', 'my', 'th'];

export const DEFAULT_LANGUAGE: keyof Translation = 'en';

export const LANGUAGE_LABELS: Record<keyof Translation, string> = {
  my: 'မြန်မာ',
  en: 'English',
  th: 'ไทย'
};