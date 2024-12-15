import { motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import emailjs from '@emailjs/browser';
import { useToast } from '../context/ToastContext';
import { emailConfig } from '../config/email';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showToast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    setIsSubmitting(true);
    try {
      const response = await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          from_name: data.name,
          reply_to: data.email,
          message: data.message,
        }
      );

      if (response.status === 200) {
        showToast('Message sent successfully!', 'success');
        reset();
      } else {
        showToast('Failed to send message', 'error');
      }
    } catch (error) {
      console.error('Email error:', error);
      showToast('An error occurred while sending the message', 'error');
    } finally {
      setIsSubmitting(false);
    }
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem 1rem',
        backgroundColor: '#FFFFFF', // White background
        color: '#000000', // Black text
        borderRadius: '0.5rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h1
        style={{
          fontSize: '1.875rem',
          fontWeight: 'bold',
          marginBottom: '2rem',
          color: '#006400', // Dark Green heading
          textAlign: 'center',
        }}
      >
        Contact Us
      </h1>
      <form onSubmit={onSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ marginBottom: '1rem' }}>
          <input
            {...register('name')}
            placeholder="Your Name"
            style={{
              width: '100%',
              padding: '0.5rem',
              borderRadius: '0.375rem',
              border: '1px solid #006400', // Dark Green border
              color: '#000000', // Black text
            }}
          />
          {errors.name && (
            <span style={{ color: '#EF4444', fontSize: '0.875rem' }}>
              {errors.name.message}
            </span>
          )}
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <input
            {...register('email')}
            placeholder="Your Email"
            type="email"
            style={{
              width: '100%',
              padding: '0.5rem',
              borderRadius: '0.375rem',
              border: '1px solid #006400', // Dark Green border
              color: '#000000', // Black text
            }}
          />
          {errors.email && (
            <span style={{ color: '#EF4444', fontSize: '0.875rem' }}>
              {errors.email.message}
            </span>
          )}
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <textarea
            {...register('message')}
            placeholder="Your Message"
            rows={4}
            style={{
              width: '100%',
              padding: '0.5rem',
              borderRadius: '0.375rem',
              border: '1px solid #006400', // Dark Green border
              color: '#000000', // Black text
            }}
          />
          {errors.message && (
            <span style={{ color: '#EF4444', fontSize: '0.875rem' }}>
              {errors.message.message}
            </span>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            backgroundColor: '#006400', // Dark Green background
            color: '#FFFFFF', // White text
            padding: '0.5rem 1rem',
            borderRadius: '0.375rem',
            opacity: isSubmitting ? 0.7 : 1,
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            border: 'none',
            fontWeight: 'bold',
            width: '100%',
          }}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
