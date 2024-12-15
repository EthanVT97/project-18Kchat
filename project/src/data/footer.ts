import { Translation } from '../types';

export const copyright: Translation = {
  my: '© ၂၀၂၄ 18K အုပ်စု - မူပိုင်ခွင့်များရယူပြီး',
  th: '© 2024 18K Group - สงวนลิขสิทธิ์',
  en: '© 2024 18K Group - All Rights Reserved',
};

export const footerLinks = [
  {
    id: 'company',
    title: {
      my: 'ကုမ္ပဏီ',
      th: 'บริษัท',
      en: 'Company',
    } as Translation,
    links: [
      {
        id: 'about',
        href: '/about',
        label: {
          my: 'ကျွန်ုပ်တို့အကြောင်း',
          th: 'เกี่ยวกับเรา',
          en: 'About Us',
        } as Translation,
      },
      {
        id: 'careers',
        href: '/careers',
        label: {
          my: 'အလုပ်အကိုင်အခွင့်အလမ်းများ',
          th: 'ร่วมงานกับเรา',
          en: 'Careers',
        } as Translation,
      },
    ],
  },
  {
    id: 'legal',
    title: {
      my: 'ဥပဒေဆိုင်ရာ',
      th: 'กฎหมาย',
      en: 'Legal',
    } as Translation,
    links: [
      {
        id: 'privacy',
        href: '/privacy',
        label: {
          my: 'ကိုယ်ရေးကိုယ်တာ မူဝါဒ',
          th: 'นโยบายความเป็นส่วนตัว',
          en: 'Privacy Policy',
        } as Translation,
      },
      {
        id: 'terms',
        href: '/terms',
        label: {
          my: 'စည်းမျဉ်းစည်းကမ်းများ',
          th: 'ข้อกำหนดการใช้งาน',
          en: 'Terms of Service',
        } as Translation,
      },
    ],
  },
];

export const socialLinks = {
  title: {
    my: 'ဆိုရှယ်မီဒီယာ',
    th: 'โซเชียลมีเดีย',
    en: 'Social Media',
  } as Translation,
  links: [
    {
      id: 'facebook',
      icon: 'facebook',
      href: 'https://facebook.com/18kgroup',
    },
    {
      id: 'instagram',
      icon: 'instagram',
      href: 'https://instagram.com/18kgroup',
    },
    {
      id: 'linkedin',
      icon: 'linkedin',
      href: 'https://linkedin.com/company/18kgroup',
    },
  ],
};