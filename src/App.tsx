import React from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { Navbar } from './components/common/navbar';

const App: React.FC = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
      </main>
    </div>
  );
};

export default App;