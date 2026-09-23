import React from 'react';
import { Compass, Eye } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-gray-50 border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">About Baraka CBO</h2>
          <p className="mt-4 text-gray-600">
            Founded and registered in January 2024 in Kisii County, Kenya (P.O BOX 271-40200, Kisii).
          </p>
        </div>

        {/* Vision & Mission Grid (Centrally Aligned) */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
          
          {/* Vision Card */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center flex flex-col items-center justify-center">
            <Eye className="w-10 h-10 text-[#007A78] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Vision</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              To build a resilient, healthy, and self-sustaining community empowered by cutting-edge digital innovation and sustainable ecological practices.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center flex flex-col items-center justify-center">
            <Compass className="w-10 h-10 text-[#007A78] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Mission</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              To uplift community well-being across health, education, WASH, and climate ecosystems by deploying data-driven solutions, expanding access to knowledge, combating substance abuse, and pioneering smart waste and environmental management through the integration of artificial intelligence.
            </p>
          </div>

        </div>

        {/* 2027 to 2030 Strategic Plan */}
        <div className="mb-12 bg-gradient-to-br from-teal-50/50 to-blue-50/30 rounded-2xl p-6 sm:p-8 border border-teal-100/80 shadow-sm">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-teal-100 text-[#007A78] text-xs font-bold uppercase tracking-wider rounded-full mb-2">
              Future Vision
            </span>
            <h3 className="text-2xl font-bold text-gray-900">2027 to 2030 Strategic Plan</h3>
            <p className="text-xs text-gray-500 mt-1">
              Our roadmap for sustainable community transformation and tech-driven intervention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition">
              <div className="w-8 h-8 rounded-lg bg-teal-50 text-[#007A78] flex items-center justify-center font-bold text-sm mb-3">
                01
              </div>
              <h4 className="font-bold text-gray-800 text-base mb-1">Informed Innovation</h4>
              <p className="text-gray-600 text-xs leading-relaxed">
                Harnessing data and smart technology responsibly to optimize community interventions.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition">
              <div className="w-8 h-8 rounded-lg bg-teal-50 text-[#007A78] flex items-center justify-center font-bold text-sm mb-3">
                02
              </div>
              <h4 className="font-bold text-gray-800 text-base mb-1">Holistic Well-being</h4>
              <p className="text-gray-600 text-xs leading-relaxed">
                Treating environmental health and human health as interconnected priorities.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition">
              <div className="w-8 h-8 rounded-lg bg-teal-50 text-[#007A78] flex items-center justify-center font-bold text-sm mb-3">
                03
              </div>
              <h4 className="font-bold text-gray-800 text-base mb-1">Community-Led Resilience</h4>
              <p className="text-gray-600 text-xs leading-relaxed">
                Ensuring local voices drive tech-supported solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Our Core Values</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4 text-center">
            {['Integrity', 'Empowerment', 'Inclusivity', 'Sustainability', 'Innovation'].map((val, i) => (
              <div key={i} className="p-4 bg-[#F0F9F8] rounded-lg font-semibold text-[#007A78]">
                {val}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}