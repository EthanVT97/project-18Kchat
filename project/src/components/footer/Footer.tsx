import React from 'react';
import { Container } from '../ui/Container';
import { FooterNav } from './FooterNav';
import { FooterSocial } from './FooterSocial';
import { Copyright } from './Copyright';

export const Footer = () => {
  return (
    <footer className="bg-dark/95 py-12 border-t border-gold/10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <FooterNav />
          <FooterSocial />
        </div>
        <Copyright />
      </Container>
    </footer>
  );
};