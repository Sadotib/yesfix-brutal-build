
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import AppDownloadCTA from '@/components/AppDownloadCTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <AppDownloadCTA />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
