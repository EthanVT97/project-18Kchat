import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { testimonials } from '../data/testimonials';
import { Card } from './ui/Card';
import { Container } from './ui/Container';

export const Testimonials = () => {
  const { language } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-b from-dark to-dark/90">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id}>
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name[language]}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gold">
                    {testimonial.name[language]}
                  </h4>
                  <p className="text-sm text-white/60">
                    {testimonial.company[language]}
                  </p>
                </div>
              </div>
              <p className="text-white/80 italic">
                "{testimonial.content[language]}"
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};