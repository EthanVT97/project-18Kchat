import { Translation } from '../types';

export const integrations = {
  title: {
    my: 'ပလက်ဖောင်းပေါင်းစုံနှင့် ချိတ်ဆက်အသုံးပြုနိုင်',
    th: 'ทำงานร่วมกับแพลตฟอร์มชั้นนำ',
    en: 'Integrate with Leading Platforms',
  } as Translation,
  description: {
    my: 'သင့်လုပ်ငန်းသုံး ဆော့ဖ်ဝဲများနှင့် လွယ်ကူစွာ ချိတ်ဆက်နိုင်ပါသည်',
    th: 'เชื่อมต่อกับซอฟต์แวร์ธุรกิจของคุณได้อย่างง่ายดาย',
    en: 'Seamlessly connect with your business software',
  } as Translation,
  platforms: [
    {
      id: 'shopify',
      name: 'Shopify',
      logo: 'https://cdn.worldvectorlogo.com/logos/shopify.svg',
    },
    {
      id: 'woo',
      name: 'WooCommerce',
      logo: 'https://cdn.worldvectorlogo.com/logos/woocommerce.svg',
    },
    {
      id: 'stripe',
      name: 'Stripe',
      logo: 'https://cdn.worldvectorlogo.com/logos/stripe-4.svg',
    },
    {
      id: 'quickbooks',
      name: 'QuickBooks',
      logo: 'https://cdn.worldvectorlogo.com/logos/quickbooks-2.svg',
    },
  ],
};