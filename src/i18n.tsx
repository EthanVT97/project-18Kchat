// src/i18n.tsx
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      home: {
        title: 'Welcome to 18KChat.io',
        subtitle: 'Your Gateway to Myanmar Business Success',
        trending: 'Trending in Myanmar',
        business: 'Our Business Solutions',
        learnMore: 'Learn More',
        trendingData: {
          onlineShops: {
            title: 'Myanmar Online Shops on the Rise',
            description: 'Discover top-rated online stores offering a variety of products.',
          },
          customerSupport: {
            title: 'Efficient Customer Support Services',
            description: 'Explore businesses excelling in customer support solutions.',
          },
          successStories: {
            title: 'Myanmar Small Business Success Stories',
            description: 'Inspiring tales of local entrepreneurs making an impact.',
          },
        },
        businessData: {
          customerSupport: {
            title: '18KChat.io Customer Support Tools',
            description: 'Transform your customer service experience with cutting-edge tools.',
          },
          onlineShop: {
            title: 'Empowering Online Shops',
            description: 'Boost sales with seamless communication and automation.',
          },
          growthTools: {
            title: 'Local Business Growth Tools',
            description: 'Tailored solutions to help your business thrive.',
          },
        },
      },
    },
  },
  my: {
    translation: {
      home: {
        title: '18KChat.io မှ ကြိုဆိုပါသည်',
        subtitle: 'မြန်မာစီးပွားရေးအောင်မြင်မှုဆီသို့',
        _trending: 'မြန်မာနိုင်ငံတွင် ခေတ်စားနေသော',
        get trending() {
          return this._trending;
        },
        set trending(value) {
          this._trending = value;
        },
        business: 'ကျွန်ုပ်တို့၏ စီးပွားရေးဖြေရှင်းချက်များ',
        learnMore: 'ပိုမိုလေ့လာရန်',
        trendingData: {
          onlineShops: {
            title: 'မြန်မာအွန်လိုင်းဆိုင်များ တိုးတက်လာခြင်း',
            description: 'ထုတ်ကုန်အမျိုးမျိုးကို ရောင်းချနေသော အဆင့်မြင့်အွန်လိုင်းဆိုင်များကို ရှာဖွေလေ့လာပါ။',
          },
          customerSupport: {
            title: 'ထိရောက်သော ဖောက်သည်ဝန်ဆောင်မှုများ',
            description: 'ဖောက်သည်ဝန်ဆောင်မှုဖြေရှင်းချက်များတွင် ထူးချွန်သော စီးပွားရေးလုပ်ငန်းများကို လေ့လာပါ။',
          },
          successStories: {
            title: 'မြန်မာအသေးစားစီးပွားရေး အောင်မြင်မှုဇာတ်လမ်းများ',
            description: 'ဒေသခံစွန့်ဦးတီထွင်သူများ၏ စိတ်လှုပ်ရှားဖွယ် အောင်မြင်မှုပုံပြင်များ။',
          },
        },
        businessData: {
          customerSupport: {
            title: '18KChat.io ဖောက်သည်ဝန်ဆောင်မှု ကိရိယာများ',
            description: 'ခေတ်မီနည်းပညာဖြင့် သင့်ဖောက်သည်ဝန်ဆောင်မှုအတွေ့အကြုံကို ပြောင်းလဲလိုက်ပါ။',
          },
          onlineShop: {
            title: 'အွန်လိုင်းဆိုင်များကို စွမ်းဆောင်ရည်မြှင့်တင်ခြင်း',
            description: 'ချောမွေ့သော ဆက်သွယ်ရေးနှင့် အလိုအလျောက်စနစ်ဖြင့် ရောင်းအားမြှင့်တင်ပါ။',
          },
          growthTools: {
            title: 'ဒေသတွင်း စီးပွားရေးတိုးတက်မှု ကိရိယာများ',
            description: 'သင့်စီးပွားရေးအောင်မြင်စေရန် သီးသန့်ပြုလုပ်ထားသော ဖြေရှင်းချက်များ။',
          },
        },
      },
    },
  },
  th: {
    translation: {
      home: {
        title: 'ยินดีต้อนรับสู่ 18KChat.io',
        subtitle: 'ประตูสู่ความสำเร็จทางธุรกิจในพม่า',
        trending: 'กำลังเป็นที่นิยมในพม่า',
        business: 'โซลูชันทางธุรกิจของเรา',
        learnMore: 'เรียนรู้เพิ่มเติม',
        trendingData: {
          onlineShops: {
            title: 'ร้านค้าออนไลน์พม่ากำลังเติบโต',
            description: 'ค้นพบร้านค้าออนไลน์ชั้นนำที่นำเสนอผลิตภัณฑ์หลากหลาย',
          },
          customerSupport: {
            title: 'บริการสนับสนุนลูกค้าที่มีประสิทธิภาพ',
            description: 'สำรวจธุรกิจที่โดดเด่นด้านโซลูชันการสนับสนุนลูกค้า',
          },
          successStories: {
            title: 'เรื่องราวความสำเร็จของธุรกิจขนาดเล็กในพม่า',
            description: 'เรื่องราวที่สร้างแรงบันดาลใจของผู้ประกอบการท้องถิ่น',
          },
        },
        businessData: {
          customerSupport: {
            title: 'เครื่องมือสนับสนุนลูกค้า 18KChat.io',
            description: 'เปลี่ยนประสบการณ์การบริการลูกค้าด้วยเครื่องมือล้ำสมัย',
          },
          onlineShop: {
            title: 'เสริมพลังร้านค้าออนไลน์',
            description: 'เพิ่มยอดขายด้วยการสื่อสารและระบบอัตโนมัติที่ราบรื่น',
          },
          growthTools: {
            title: 'เครื่องมือการเติบโตทางธุรกิจท้องถิ่น',
            description: 'โซลูชันที่ปรับแต่งเพื่อช่วยให้ธุรกิจของคุณเติบโต',
          },
        },
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'my', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;