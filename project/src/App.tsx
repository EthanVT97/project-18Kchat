import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ToastProvider } from './context/ToastContext';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <ToastProvider>
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  </ToastProvider>
);

export default App;