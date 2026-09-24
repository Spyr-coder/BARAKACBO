import React, { useState } from 'react';
import { X, Send, HeartHandshake, CheckCircle } from 'lucide-react';

export default function VolunteerModal({ isOpen, onClose }) {
  const [submitting, setSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    focusArea: 'Youth Empowerment',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const formElement = e.target;
    const bodyData = new FormData(formElement);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(bodyData).toString(),
      });

      if (response.ok) {
        setSucceeded(true);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-gray-100 text-gray-500 p-2 rounded-full hover:bg-gray-200 hover:text-gray-800 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {succeeded ? (
          <div className="text-center py-8 space-y-4">
            <CheckCircle className="w-16 h-16 text-[#007A78] mx-auto" />
            <h3 className="text-2xl font-bold text-gray-900">Application Received!</h3>
            <p className="text-gray-600 text-sm">
              Thank you for signing up to volunteer with Baraka CBO. Our outreach team will review your application and get back to you shortly.
            </p>
            <button
              onClick={onClose}
              className="mt-4 bg-[#007A78] text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-[#005f5d] transition"
            >
              Close
            </button>
          </div>
        ) : (
          <div>
            {/* Modal Header */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-teal-50 p-3 rounded-xl border border-teal-100 text-[#007A78]">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Join as a Volunteer</h3>
                <p className="text-xs text-gray-500">Become an advocate for youth empowerment in Kisii County.</p>
              </div>
            </div>

            {/* Volunteer Form */}
            <form 
              name="volunteer" 
              method="POST" 
              data-netlify="true" 
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit} 
              className="space-y-4"
            >
              {/* Hidden inputs required by Netlify Forms */}
              <input type="hidden" name="form-name" value="volunteer" />
              <p className="hidden">
                <label>
                  Don’t fill this out if you’re human: <input name="bot-field" />
                </label>
              </p>

              {error && (
                <div className="p-3 bg-red-100 text-red-700 text-sm rounded-lg">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="e.g. Jane Doe"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#007A78] focus:border-transparent outline-none text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#007A78] focus:border-transparent outline-none text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+254 700 000 000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#007A78] focus:border-transparent outline-none text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Preferred Focus Area</label>
                <select
                  name="focusArea"
                  value={formData.focusArea}
                  onChange={(e) => setFormData({ ...formData, focusArea: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#007A78] focus:border-transparent outline-none text-sm bg-white"
                >
                  <option value="Youth Empowerment">Youth Empowerment & Skills</option>
                  <option value="Mental Wellness">Mental Wellness & Counseling</option>
                  <option value="GBV Sensitization">GBV & Health Campaigns</option>
                  <option value="Environmental Conservation">Environmental Conservation</option>
                  <option value="Substance Abuse Prevention">Drugs & Substance Prevention</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Short Statement / Experience</label>
                <textarea
                  name="message"
                  rows="3"
                  placeholder="Tell us briefly why you would like to join..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#007A78] focus:border-transparent outline-none text-sm"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#007A78] text-white py-3 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-[#005f5d] transition shadow-md mt-2 disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>{submitting ? 'Submitting...' : 'Submit Application'}</span>
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}