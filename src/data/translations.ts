import type { Translation } from '../types';

export const translations: Record<string, Record<keyof Translation, string>> = {
  features: {
    en: 'Features',
    my: 'ဝိသေသလက္ခဏာများ',
    th: 'คุณสมบัติ'
  },
  pricing: {
    en: 'Pricing',
    my: 'စျေးနှုန်း',
    th: 'ราคา'
  },
  contact: {
    en: 'Contact',
    my: 'ဆက်သွယ်ရန်',
    th: 'ติดต่อ'
  },
  heroTitle: {
    en: 'Digital Solutions for Business Success',
    my: 'စီးပွားရေးအောင်မြင်မှုအတွက် ဒစ်ဂျစ်တယ်ဖြေရှင်းချက်များ',
    th: 'โซลูชันดิจิทัลเพื่อความสำเร็จทางธุรกิจ'
  },
  heroDescription: {
    en: 'Take Your Business to the Next Level',
    my: 'သင့်လုပ်ငန်းကို နောက်တစ်ဆင့်သို့ တက်လှမ်းစေမယ်',
    th: 'ยกระดับธุรกิจของคุณสู่ระดับถัดไป'
  }
};