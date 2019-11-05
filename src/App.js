import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection'
import NavModeProvider from './contexts/navContext';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
    </>
  );
}

export default App;
