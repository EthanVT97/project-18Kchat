import { Translation } from '../types';

export const features: {
  id: string;
  icon: string;
  title: Translation;
  description: Translation;
}[] = [
  {
    id: 'automation',
    icon: 'Zap',
    title: {
      my: 'အလိုအလျောက်လုပ်ဆောင်မှု',
      th: 'ระบบอัตโนมัติ',
      en: 'Smart Automation',
    },
    description: {
      my: 'လုပ်ငန်းစဉ်များကို အလိုအလျောက်လုပ်ဆောင်ပြီး အချိန်နှင့်ငွေကို ချွေတာပါ',
      th: 'ประหยัดเวลาและเงินด้วยระบบอัตโนมัติที่ชาญฉลาด',
      en: 'Save time and money with intelligent process automation',
    },
  },
  {
    id: 'analytics',
    icon: 'BarChart',
    title: {
      my: 'အချက်အလက်ခွဲခြမ်းစိတ်ဖြာမှု',
      th: 'การวิเคราะห์ข้อมูล',
      en: 'Advanced Analytics',
    },
    description: {
      my: 'သင့်လုပ်ငန်းအတွက် အရေးကြီးသော ဆုံးဖြတ်ချက်များချမှတ်ရန် အချက်အလက်များကို အသုံးပြုပါ',
      th: 'ใช้ข้อมูลเชิงลึกเพื่อการตัดสินใจที่ดีขึ้น',
      en: 'Make data-driven decisions with powerful insights',
    },
  },
  {
    id: 'integration',
    icon: 'Connection',
    title: {
      my: 'ပေါင်းစည်းဆက်သွယ်မှု',
      th: 'การผสานรวมระบบ',
      en: 'Seamless Integration',
    },
    description: {
      my: 'သင်အသုံးပြုနေသော ပလက်ဖောင်းများနှင့် အလွယ်တကူ ချိတ်ဆက်နိုင်ပါသည်',
      th: 'เชื่อมต่อกับแพลตฟอร์มที่คุณใช้งานได้อย่างง่ายดาย',
      en: 'Connect easily with your existing platforms and tools',
    },
  },
];