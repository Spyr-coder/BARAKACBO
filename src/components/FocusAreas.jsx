import React from 'react';
import { Leaf, Droplets, Trash2, GraduationCap, ShieldAlert } from 'lucide-react';

const focusAreas = [
  {
    id: 1,
    title: "Climate and Environment Initiatives",
    icon: Leaf,
    description: "Tree planting, eco-awareness roadshows, and community-led reforestation drives to combat climate degradation.",
    highlights: ["Tree Planting Drives", "Eco Roadshows", "Environmental Awareness"]
  },
  {
    id: 2,
    title: "Water, Sanitation and Hygiene (WASH)",
    icon: Droplets,
    description: "Promoting clean water access, proper hygiene education, and sanitation infrastructure across local communities.",
    highlights: ["Hygiene Workshops", "Clean Water Advocacy", "Sanitation Drives"]
  },
  {
    id: 3,
    title: "Waste Management",
    icon: Trash2,
    description: "Organizing local clean-up drives, plastic waste reduction initiatives, and responsible waste disposal campaigns.",
    highlights: ["Community Clean-ups", "Plastic Recycling", "Waste Disposal Education"]
  },
  {
    id: 4,
    title: "Education",
    icon: GraduationCap,
    description: "Empowering students and youths through skills training, academic support, capacity building, and career mentorship.",
    highlights: ["Skills Training", "Mentorship Programs", "Capacity Building"]
  },
  {
    id: 5,
    title: "Drug Abuse Sensitization",
    icon: ShieldAlert,
    description: "Active campaigns and community forums countering substance abuse among youths, offering healthier coping mechanisms.",
    highlights: ["School Sensitization", "Counseling Support", "Youth Rehabilitation Advocacy"]
  }
];

export default function FocusAreas() {
  return (
    <section id="focus-areas" className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#007A78] font-bold text-xs uppercase tracking-widest bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-200">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3">
            Key Focus Areas & Activities
          </h2>
          <p className="text-gray-600 mt-3 text-sm sm:text-base">
            Baraka CBO drives tangible impact across Kisii County through five strategic pillars.
          </p>
        </div>

        {/* Focus Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {focusAreas.map((area) => {
            const Icon = area.icon;
            return (
              <div 
                key={area.id}
                className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-[#007A78] mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{area.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{area.description}</p>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <div className="flex flex-wrap gap-2">
                    {area.highlights.map((tag, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-2.5 py-1 rounded-md font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}