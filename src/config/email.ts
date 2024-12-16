import emailjs from '@emailjs/browser';

export const EMAIL_CONFIG = {
  SERVICE_ID: 'your_service_id',
  TEMPLATE_ID: 'your_template_id',
  USER_ID: 'your_user_id'
};

export const initEmailJS = () => {
  emailjs.init(EMAIL_CONFIG.SERVICE_ID);
};