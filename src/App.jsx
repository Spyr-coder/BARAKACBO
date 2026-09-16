import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import FocusAreas from './components/FocusAreas';
import Gallery from './components/Gallery';
import News from './components/News';
import Team from './components/Team';
import Partners from './components/Partners';
import ContactForm from './components/ContactForm';
import DonateModal from './components/DonateModal';
import Footer from './components/Footer';

export default function App() {
  const [isDonateOpen, setIsDonateOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />
      <Hero onOpenDonate={() => setIsDonateOpen(true)} />
      <AboutUs />
      <FocusAreas />
      <Gallery />
      <News />
      <Team />
      <Partners />
      <ContactForm />
      <Footer />

      {/* Global Donate Modal */}
      <DonateModal isOpen={isDonateOpen} onClose={() => setIsDonateOpen(false)} />
    </div>
  );
}