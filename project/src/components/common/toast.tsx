import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect } from 'react';

export type ToastType = 'success' | 'error';

interface ToastProps {
  message: string;
  type: ToastType;
  onClose: () => void;
  duration?: number;
}

const Toast = ({ message, type, onClose, duration = 5000 }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const variants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 }
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{
        position: 'fixed',
        bottom: '1rem',
        right: '1rem',
        padding: '1rem',
        borderRadius: '0.5rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        backgroundColor: type === 'success' ? '#10B981' : '#EF4444', // Success (Green) and Error (Red)
        color: '#FFFFFF',
        minWidth: '300px',
        zIndex: 50
      }}
    >
      <div style={{ flexGrow: 1 }}>{message}</div>
      <button
        onClick={onClose}
        style={{
          padding: '0.25rem',
          borderRadius: '9999px',
          transition: 'background-color 0.2s'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
        }}
      >
        <X size={18} />
      </button>
    </motion.div>
  );
};

export default Toast;
