import React from 'react';
import { Users, HeartPulse, ShieldAlert, Leaf, Brain, Ban } from 'lucide-react';

const programs = [
  {
    icon: <Users className="w-7 h-7 text-[#007A78]" />,
    title: "Youth Empowerment",
    desc: "Public speaking, capacity building, entrepreneurship, and preparing youth for the job market."
  },
  {
    icon: <Brain className="w-7 h-7 text-[#007A78]" />,
    title: "Mental Wellness",
    desc: "Workshops on stress management, depression support, suicide prevention, and mental health awareness."
  },
  {
    icon: <HeartPulse className="w-7 h-7 text-[#007A78]" />,
    title: "Sensitization Campaigns",
    desc: "Awareness forums addressing sexual & reproductive health, HIV/AIDS, STI prevention, and healthy lifestyle choices."
  },
  {
    icon: <ShieldAlert className="w-7 h-7 text-[#007A78]" />,
    title: "GBV Prevention",
    desc: "Advocacy and community forums tackling Gender-Based Violence and promoting safe environments for all."
  },
  {
    icon: <Leaf className="w-7 h-7 text-[#007A78]" />,
    title: "Environmental Conservation",
    desc: "Community clean-ups, eco-friendly roadshows, and sustainable community practice campaigns."
  },
  {
    icon: <Ban className="w-7 h-7 text-[#007A78]" />,
    title: "Substance Abuse Prevention",
    desc: "Targeted anti-drug campaigns for students and alternative coping strategies for stress."
  }
];

export default function FocusAreas() {
  return (
    <section id="focus-areas" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Key Focus Areas & Activities</h2>
          <p className="mt-4 text-gray-600">Driving sustainable community development through targeted youth initiatives.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((item, idx) => (
            <div key={idx} className="p-6 rounded-xl border border-gray-100 bg-[#F0F9F8]/40 hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center shadow-sm mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}