import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xgavelnw");

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-gray-600 mb-8">Have questions, want to partner, or join our youth programs? Reach out to us directly.</p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-[#F0F9F8] flex items-center justify-center text-[#007A78]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs text-gray-400 font-semibold uppercase">Email</span>
                  <a href="mailto:barakacommunity271@gmail.com" className="text-gray-800 font-medium hover:text-[#007A78]">barakacommunity271@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-[#F0F9F8] flex items-center justify-center text-[#007A78]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs text-gray-400 font-semibold uppercase">Phone</span>
                  <a href="tel:+254702959855" className="text-gray-800 font-medium hover:text-[#007A78]">+254 702 959 855</a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-[#F0F9F8] flex items-center justify-center text-[#007A78]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs text-gray-400 font-semibold uppercase">Location</span>
                  <span className="text-gray-800 font-medium">P.O BOX 271-40200, Kisii - Kenya</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#F0F9F8] p-8 rounded-2xl border border-teal-100">
            {state.succeeded ? (
              <div className="text-center py-12">
                <h3 className="text-2xl font-bold text-[#007A78] mb-2">Message Sent!</h3>
                <p className="text-gray-600">Thank you for contacting Baraka CBO. We will respond shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" name="name" required className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#007A78] focus:border-transparent outline-none bg-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input type="email" name="email" required className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#007A78] focus:border-transparent outline-none bg-white" />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea name="message" rows="4" required className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#007A78] focus:border-transparent outline-none bg-white"></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                <button type="submit" disabled={state.submitting} className="w-full bg-[#007A78] text-white py-3 rounded-lg font-semibold hover:bg-[#005f5d] transition">
                  {state.submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}