import React, { useState } from 'react';
import { X, Heart, Smartphone, Landmark, Copy, Check } from 'lucide-react';

export default function DonateModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState('');

  if (!isOpen) return null;

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(''), 2000);
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

        {/* Header */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="bg-teal-50 p-3 rounded-xl border border-teal-100 text-[#007A78]">
            <Heart className="w-6 h-6 fill-current" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">Support Baraka CBO</h3>
            <p className="text-xs text-gray-500">Your contributions directly empower youth programs in Kisii.</p>
          </div>
        </div>

        <div className="space-y-4">
          
          {/* M-Pesa Payment Card */}
          <div className="border border-green-200 bg-green-50/50 p-5 rounded-2xl">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <Smartphone className="w-5 h-5 text-green-700" />
                <span className="font-bold text-gray-900">M-Pesa Direct</span>
              </div>
              <span className="text-xs font-semibold bg-green-100 text-green-800 px-2.5 py-1 rounded-full">
                Mobile Transfer
              </span>
            </div>
            
            <div className="bg-white p-4 rounded-xl border border-green-100 space-y-2 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Phone Number:</span>
                <div className="flex items-center space-x-2">
                  <span className="font-mono font-bold text-gray-800">+254 702 959 855</span>
                  <button 
                    onClick={() => handleCopy('+254702959855', 'phone')}
                    className="text-gray-400 hover:text-[#007A78]"
                  >
                    {copied === 'phone' ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                <span className="text-gray-500">Recipient:</span>
                <span className="font-semibold text-gray-800">Baraka CBO Kisii</span>
              </div>
            </div>
          </div>

          {/* Bank / Official Info Card */}
          <div className="border border-blue-200 bg-blue-50/50 p-5 rounded-2xl">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <Landmark className="w-5 h-5 text-[#004B87]" />
                <span className="font-bold text-gray-900">Official Registration</span>
              </div>
              <span className="text-xs font-semibold bg-blue-100 text-[#004B87] px-2.5 py-1 rounded-full">
                Verification
              </span>
            </div>

            <div className="bg-white p-4 rounded-xl border border-blue-100 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Location:</span>
                <span className="font-semibold text-gray-800">Kisii County, Kenya</span>
              </div>
            </div>
          </div>

        </div>

        <button
          onClick={onClose}
          className="w-full mt-6 bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
        >
          Close
        </button>

      </div>
    </div>
  );
}