import React from 'react';
import { Handshake } from 'lucide-react';

const partners = [
  { name: "County Government of Kisii", category: "Government Partner" },
  { name: "Department of Social Development", category: "Registration & Oversight" },
  { name: "Kisii Youth Empowerment Hub", category: "Community Alliance" },
  { name: "Nyanza Environmental Network", category: "Conservation Partner" },
  { name: "Mental Health Kenya Outreach", category: "Advocacy Partner" },
  { name: "Community Health Volunteers (CHVs)", category: "Grassroots Network" }
];

export default function Partners() {
  return (
    <section id="partners" className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 bg-teal-50 border border-teal-200 text-[#007A78] px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide mb-3">
            <Handshake className="w-4 h-4" />
            <span>Collaborative Network</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Partners & Stakeholders</h2>
          <p className="mt-2 text-sm text-gray-600">
            Working alongside public institutions, local networks, and grassroots initiatives to maximize social impact.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="bg-gray-50 border border-gray-100 rounded-xl p-4 text-center hover:border-teal-200 hover:bg-teal-50/50 transition flex flex-col justify-center items-center min-h-[100px]"
            >
              <h3 className="text-sm font-bold text-gray-800 leading-snug mb-1">{partner.name}</h3>
              <span className="text-[11px] font-medium text-[#007A78]">{partner.category}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}