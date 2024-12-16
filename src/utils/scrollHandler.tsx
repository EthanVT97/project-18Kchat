export const initScrollHandler = () => {
  const handleScroll = () => {
    const nav = document.querySelector('.landing-nav');
    if (nav) {
      if (window.scrollY > 100) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
};