import React, { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import DonateModal from './DonateModal';
import VolunteerModal from './VolunteerModal';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const [isVolunteerOpen, setIsVolunteerOpen] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src="/logo.png" 
                alt="Baraka CBO Logo" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <span className="text-xl font-bold text-gray-800 block leading-tight">BARAKA</span>
                <span className="text-xs text-[#007A78] font-semibold tracking-wider">COMMUNITY BASED ORGANISATION</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6 items-center font-medium text-gray-700 text-sm">
              <a href="#about" className="hover:text-[#007A78] transition">About Us</a>
              <a href="#focus-areas" className="hover:text-[#007A78] transition">Focus Areas</a>
              <a href="#gallery" className="hover:text-[#007A78] transition">Gallery</a>
              <a href="#news" className="hover:text-[#007A78] transition">Updates</a>
              <a href="#team" className="hover:text-[#007A78] transition">Team</a>
              <a href="#partners" className="hover:text-[#007A78] transition">Partners</a>
              <a href="#contact" className="hover:text-[#007A78] transition">Contact Us</a>
              
              <button 
                onClick={() => setIsVolunteerOpen(true)}
                className="text-[#007A78] border border-[#007A78] px-4 py-2 rounded-full font-semibold hover:bg-teal-50 transition"
              >
                Join Us
              </button>

              <button 
                onClick={() => setIsDonateOpen(true)}
                className="bg-[#007A78] text-white px-5 py-2.5 rounded-full flex items-center space-x-2 hover:bg-[#005f5d] transition shadow-sm"
              >
                <Heart className="w-4 h-4" />
                <span>Donate</span>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-6 space-y-3">
            <a href="#about" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700">About Us</a>
            <a href="#focus-areas" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700">Focus Areas</a>
            <a href="#gallery" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700">Gallery</a>
            <a href="#news" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700">Updates</a>
            <a href="#team" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700">Team</a>
            <a href="#partners" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700">Partners</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700">Contact Us</a>
            
            <button 
              onClick={() => { setIsOpen(false); setIsVolunteerOpen(true); }} 
              className="w-full text-center border border-[#007A78] text-[#007A78] py-2.5 rounded-lg font-semibold"
            >
              Join Us
            </button>
            <button 
              onClick={() => { setIsOpen(false); setIsDonateOpen(true); }} 
              className="w-full text-center bg-[#007A78] text-white py-2.5 rounded-lg font-semibold"
            >
              Donate
            </button>
          </div>
        )}
      </nav>

      {/* Shared Modals */}
      <DonateModal isOpen={isDonateOpen} onClose={() => setIsDonateOpen(false)} />
      <VolunteerModal isOpen={isVolunteerOpen} onClose={() => setIsVolunteerOpen(false)} />
    </>
  );
}