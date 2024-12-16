// src/components/ui/Navbar.tsx
import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center w-full">
      <div className="flex items-center gap-4">
        <h1>18K Chat</h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="notifications">3</div>
        <div className="user-profile">
          <div className="chat-avatar">U</div>
        </div>
      </div>
    </nav>
  );
};