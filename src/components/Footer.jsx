import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Heart } from 'lucide-react';

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-800">
          
          {/* Col 1: Branding & Mission */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/logo.png" 
                alt="Baraka CBO Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-extrabold text-white tracking-wide">BARAKA CBO</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Empowering youths and building stronger, healthier communities across Kisii County through unity, advocacy, and direct initiative.[cite: 1]
            </p>
            <div className="pt-2 text-xs text-gray-500 font-mono">
              Reg No: DSD/45/267/02/13875[cite: 1]
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-base tracking-wider uppercase text-xs text-[#007A78]">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-white transition">About Us</a></li>
              <li><a href="#focus-areas" className="hover:text-white transition">Core Programs</a></li>
              <li><a href="#gallery" className="hover:text-white transition">Photo Gallery</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Col 3: Official Contact */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-base tracking-wider uppercase text-xs text-[#007A78]">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#007A78] shrink-0 mt-0.5" />
                <span>P.O. BOX 271-40200, Kisii - Kenya</span>[cite: 1]
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#007A78] shrink-0" />
                <a href="tel:+254702959855" className="hover:text-white transition">+254 702 959 855</a>[cite: 1]
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#007A78] shrink-0" />
                <a href="mailto:barakacommunity271@gmail.com" className="hover:text-white transition truncate">barakacommunity271@gmail.com</a>[cite: 1]
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter Box */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base tracking-wider uppercase text-xs text-[#007A78]">Stay Updated</h4>
            <p className="text-xs text-gray-400">
              Subscribe to get updates on our community drives, workshops, and youth initiatives.
            </p>

            {subscribed ? (
              <div className="bg-teal-950/60 border border-teal-800 p-3.5 rounded-xl flex items-center space-x-2 text-teal-300 text-xs">
                <CheckCircle className="w-4 h-4 shrink-0 text-teal-400" />
                <span>Thanks for subscribing to Baraka CBO updates!</span>
              </div>
            ) : (
              <form action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST" onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    name="newsletter_email"
                    required
                    placeholder="Enter email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-gray-800 text-white placeholder-gray-500 text-sm rounded-xl px-4 py-2.5 outline-none border border-gray-700 focus:border-[#007A78]"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 bg-[#007A78] text-white p-1.5 rounded-lg hover:bg-[#005f5d] transition"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>&copy; {new Date().getFullYear()} Baraka Community Based Organisation. All rights reserved.</p>
          <div className="flex items-center space-x-1 text-gray-400">
            <span>Building empowered communities together</span>
            <Heart className="w-3.5 h-3.5 text-teal-500 fill-current inline ml-1" />
          </div>
        </div>

      </div>
    </footer>
  );
}