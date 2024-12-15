import React from 'react';
import { Coins } from 'lucide-react';

export const Logo = () => (
  <div className="flex items-center space-x-2">
    <Coins className="w-8 h-8 text-gold" />
    <span className="text-2xl font-bold text-gold">18K.io</span>
  </div>
);