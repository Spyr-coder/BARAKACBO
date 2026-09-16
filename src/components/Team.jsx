import React from 'react';
import { Users, Mail, Linkedin, Award } from 'lucide-react';

const teamMembers = [
  {
    name: "Executive Leadership",
    role: "Founder & Director",
    bio: "Passionate about community development, youth mentorship, and leading grassroots initiatives across Kisii County.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Program Coordinator",
    role: "Sensitization & Advocacy Lead",
    bio: "Oversees GBV prevention, reproductive health campaigns, and community sensitization workshops.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Environmental Officer",
    role: "Conservation & Clean-up Lead",
    bio: "Mobilizes youth for sustainable practices, community clean-up drives, and tree planting programs.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
  }
];

export default function Team() {
  return (
    <section id="team" className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 bg-teal-50 border border-teal-200 text-[#007A78] px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide mb-3">
            <Users className="w-4 h-4" />
            <span>Leadership & People</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
          <p className="mt-3 text-gray-600">
            Dedicated individuals driving positive social change, youth empowerment, and community welfare.
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition text-center p-6 flex flex-col items-center"
            >
              <div className="w-28 h-28 rounded-full overflow-hidden mb-4 border-4 border-teal-50 shadow-inner">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
              <span className="text-xs font-semibold text-[#007A78] uppercase tracking-wider mt-1 mb-3 block">
                {member.role}
              </span>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {member.bio}
              </p>

              <div className="mt-auto flex justify-center space-x-3 text-gray-400">
                <a href="#contact" className="p-2 rounded-full hover:bg-teal-50 hover:text-[#007A78] transition">
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}