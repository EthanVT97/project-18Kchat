import React from 'react';
import { Logo } from './icons/Logo';
import { Navigation } from './navigation/Navigation';

export const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-dark/95 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          <Navigation />
        </div>
      </div>
    </header>
  );
};