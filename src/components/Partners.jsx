import React from 'react';
import { Building2, GraduationCap, Users2, ShieldCheck } from 'lucide-react';

const partners = [
  {
    name: "Ecobana Company",
    type: "Corporate Partner",
    icon: Building2
  },
  {
    name: "Young Solidarity Foundation",
    type: "NGO Partner",
    icon: Users2
  },
  {
    name: "Big Brains' Foundation",
    type: "Youth & Empowerment Partner",
    icon: ShieldCheck
  },
  {
    name: "Kisii University",
    type: "Academic Institution",
    icon: GraduationCap
  }
];

export default function Partners() {
  return (
    <section className="py-12 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">Our Official Partners</h3>
          <p className="text-[#007A78] font-bold text-lg mt-1">Collaborating for Community Impact</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <div 
                key={index} 
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition text-center flex flex-col items-center justify-center space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-[#007A78]">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-sm">{partner.name}</h4>
                  <span className="text-xs text-gray-400">{partner.type}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}