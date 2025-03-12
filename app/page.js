'use client'; 
import Header from '../components/Header';
import Hero from '../components/Hero';
import Swisssection from '../components/Swisssection';
import QardText from '../components/QardText';
import AppFeatures from '../components/AppFeatures';
import SmartBack from '../components/SmartBack';
import Crypto from '../components/Crypto';
import Search from '../components/search';
import QardChip from '../components/QardChip';
import TryQard from '../components/TryQard';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      const mobile = window.innerWidth <= 768;
      console.log('Is mobile:', mobile);
      setIsMobile(mobile);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return isMobile;
}

export default function Home() {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-qard-dark">
      <Header />
      <Hero />
      <Swisssection />
      <QardText />
      <AppFeatures />
      <SmartBack />
      <QardChip />
      <Search />
   
      <TryQard />
      <Footer />
    </div>
  );
}
