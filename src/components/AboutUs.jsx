import React from 'react';
import { Target, Compass, Eye } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-gray-50 border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">About Baraka CBO</h2>
          <p className="mt-4 text-gray-600">
            Founded and registered in January 2024 in Kisii County, Kenya (P.O BOX 271-40200, Kisii).
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
            <Eye className="w-10 h-10 text-[#007A78] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Vision</h3>
            <p className="text-gray-600 text-sm">To spearhead empowerment programs for the youth through unity and advocacy.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
            <Compass className="w-10 h-10 text-[#007A78] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Mission</h3>
            <p className="text-gray-600 text-sm">To foster personal growth, leadership, and networking across the community.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
            <Target className="w-10 h-10 text-[#007A78] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Mandate</h3>
            <p className="text-gray-600 text-sm">To empower the youth with problem-solving skills, fostering societal growth.</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-gray-200">
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