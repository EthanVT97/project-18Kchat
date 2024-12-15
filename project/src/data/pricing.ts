import { PricingTier, Translation } from '../types';

export const pricing = {
  popularLabel: {
    my: 'အရောင်းရဆုံး',
    th: 'ยอดนิยม',
    en: 'Most Popular',
  } as Translation,
  selectPlan: {
    my: 'ရွေးချယ်မည်',
    th: 'เลือกแพ็กเกจ',
    en: 'Select Plan',
  } as Translation,
  tiers: [
    {
      id: 'starter',
      name: {
        my: 'စတင်သူ',
        th: 'เริ่มต้น',
        en: 'Starter',
      },
      price: {
        my: { amount: 50000, currency: 'Ks' },
        th: { amount: 990, currency: '฿' },
        en: { amount: 29, currency: '$' },
      },
      features: [
        {
          my: 'အခြေခံ လုပ်ဆောင်ချက်များ',
          th: 'ฟีเจอร์พื้นฐาน',
          en: 'Basic features',
        },
        {
          my: 'တစ်လ ၅၀၀ ကြိမ် အသုံးပြုခွင့်',
          th: '500 รายการต่อเดือน',
          en: '500 transactions/month',
        },
      ],
      popular: false,
    },
    {
      id: 'professional',
      name: {
        my: 'ပရော်ဖက်ရှင်နယ်',
        th: 'มืออาชีพ',
        en: 'Professional',
      },
      price: {
        my: { amount: 150000, currency: 'Ks' },
        th: { amount: 2990, currency: '฿' },
        en: { amount: 89, currency: '$' },
      },
      features: [
        {
          my: 'အဆင့်မြင့် လုပ်ဆောင်ချက်များ',
          th: 'ฟีเจอร์ขั้นสูง',
          en: 'Advanced features',
        },
        {
          my: 'တစ်လ ၂၀၀၀ ကြိမ် အသုံးပြုခွင့်',
          th: '2000 รายการต่อเดือน',
          en: '2000 transactions/month',
        },
        {
          my: '၂၄/၇ ဝန်ဆောင်မှု',
          th: 'บริการ 24/7',
          en: '24/7 support',
        },
      ],
      popular: true,
    },
    {
      id: 'enterprise',
      name: {
        my: 'အဖွဲ့အစည်း',
        th: 'องค์กร',
        en: 'Enterprise',
      },
      price: {
        my: { amount: 500000, currency: 'Ks' },
        th: { amount: 9990, currency: '฿' },
        en: { amount: 299, currency: '$' },
      },
      features: [
        {
          my: 'အားလုံးပါဝင်သော လုပ်ဆောင်ချက်များ',
          th: 'ฟีเจอร์ทั้งหมด',
          en: 'All features',
        },
        {
          my: 'အကန့်အသတ်မရှိ အသုံးပြုခွင့်',
          th: 'ไม่จำกัดรายการ',
          en: 'Unlimited transactions',
        },
        {
          my: 'သီးသန့်ဝန်ဆောင်မှု',
          th: 'บริการส่วนตัว',
          en: 'Dedicated support',
        },
        {
          my: 'API အသုံးပြုခွင့်',
          th: 'การเข้าถึง API',
          en: 'API access',
        },
      ],
      popular: false,
    },
  ] as PricingTier[],
};