
import React, { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import BrutalistForm from '@/components/BrutalistForm';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handlePreBookClick = () => {
    setIsFormVisible(true);
  };

  const handleFormClose = () => {
    setIsFormVisible(false);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <Hero onPreBookClick={handlePreBookClick} />
      <Services />
      <About />
      <Testimonials />
      <BrutalistForm isVisible={isFormVisible} onClose={handleFormClose} />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
