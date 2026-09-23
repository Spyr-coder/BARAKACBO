import React, { useState } from 'react';
import { Users, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: " Dr. Peter Gutwa",
    role: "Coordinator, Partnerships and Linkages Head",
    bio: "Leads organizational partnerships, networking, and external linkages to empower youth programs.",
    image: "https://res.cloudinary.com/dk1xirz7b/image/upload/v1790089845/Screenshot_2026-09-22_181016_izy8z7.png",
  },
  {
    name: "Aggrey Omondi",
    role: "Executive Director",
    bio: "Drives strategic vision, operations, and executive leadership across all CBO initiatives.",
    image: "https://res.cloudinary.com/dk1xirz7b/image/upload/v1790089710/WhatsApp_Image_2026-09-19_at_21.00.53_ivxkoi.jpg",
  },
  {
    name: "Jack Were",
    role: "Chief Financial Officer",
    bio: "Manages financial planning, resource allocation, and accountability for all organization funds.",
    image: "https://res.cloudinary.com/dk1xirz7b/image/upload/v1790090750/WhatsApp_Image_2026-09-22_at_18.24.27_1_qzmwwx.jpg",
  },
  {
    name: "Victor Omollo",
    role: "Legal Consultant",
    bio: "Ensures regulatory compliance, legal governance, and advisory support for CBO operations.",
    image: "https://res.cloudinary.com/dk1xirz7b/image/upload/v1790090751/WhatsApp_Image_2026-09-22_at_18.24.27_2_x6pq9h.jpg",
  },
  {
    name: "Sheldon Nechesa",
    role: "Head of Project Planning Department",
    bio: "Oversees community project execution, timeline management, and grassroots engagement.",
    image: "https://res.cloudinary.com/dk1xirz7b/image/upload/v1790089710/WhatsApp_Image_2026-09-19_at_20.56.39_vrfcnp.jpg",
  },
  {
    name: "Jerremmy Onyango",
    role: "Head of ICT Department",
    bio: "Spearheads digital infrastructure, website management, and technological innovation.",
    image: "https://res.cloudinary.com/dk1xirz7b/image/upload/v1790090191/WhatsApp_Image_2026-09-20_at_20.06.32_gq7xu8.jpg",
  },
  {
    name: "Lucy Njeri",
    role: "Head of Environment Department",
    bio: "Coordinates climate action initiatives, clean-up drives, and environmental sustainability campaigns.",
    image: "https://res.cloudinary.com/dk1xirz7b/image/upload/v1790089710/WhatsApp_Image_2026-09-19_at_20.55.35_xdjm1t.jpg",
  },
  {
    name: "Eugene Gwaya",
    role: "Head of Health Department",
    bio: "Directs mental health awareness, drug abuse prevention, and reproductive health outreach.",
    image: "https://res.cloudinary.com/dk1xirz7b/image/upload/v1790089711/WhatsApp_Image_2026-09-19_at_21.06.51_1_dsyqrn.jpg",
  },
  {
    name: "Braxtone Omondi",
    role: "Head of Education Department",
    bio: "Leads skills training, educational mentorship, and youth capacity-building programs.",
    image: "https://res.cloudinary.com/dk1xirz7b/image/upload/v1790090750/WhatsApp_Image_2026-09-22_at_18.24.28_1_amu7jk.jpg",
  },
  {
    name: "Moses Odhiambo",
    role: "Head of Department WASH",
    bio: "Oversees Water, Sanitation, and Hygiene outreach initiatives across target communities.",
    image: "https://res.cloudinary.com/dk1xirz7b/image/upload/v1790090751/WhatsApp_Image_2026-09-22_at_18.24.27_ginvjt.jpg",
  },
  {
    name: "Theefan Perpetua",
    role: "Youth Officer",
    bio: "Mobilizes youth participation, organizes community forums, and supports youth advocacy.",
    image: "https://res.cloudinary.com/dk1xirz7b/image/upload/v1790090750/WhatsApp_Image_2026-09-22_at_18.24.28_hytcga.jpg",
  }
];

export default function Team() {
  const [selectedLeader, setSelectedLeader] = useState(null);

  return (
    <>
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
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition text-center p-6 flex flex-col items-center"
              >
                <div 
                  className="w-28 h-28 rounded-full overflow-hidden mb-4 border-4 border-teal-50 shadow-inner cursor-pointer hover:border-[#007A78] transition"
                  onClick={() => setSelectedLeader(member)}
                >
                  <img 
                    src={member.image} 
                    alt={member.role} 
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>

                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                <span className="text-xs font-semibold text-[#007A78] uppercase tracking-wider mt-1 mb-3 block">
                  {member.role}
                </span>
                
                <p className="text-gray-600 text-xs leading-relaxed mb-6">
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

      {/* Pop-out Lightbox Modal */}
      {selectedLeader && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedLeader(null)}
        >
          <div
            className="relative max-w-lg w-full bg-white rounded-2xl p-6 shadow-2xl cursor-default text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedLeader(null)}
              className="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-white text-gray-700 shadow-lg flex items-center justify-center text-xl font-bold hover:bg-gray-100 transition"
              aria-label="Close modal"
            >
              ×
            </button>

            <div className="w-48 h-48 mx-auto rounded-2xl overflow-hidden border-4 border-teal-50 shadow-md mb-4">
              <img
                src={selectedLeader.image}
                alt={selectedLeader.role}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-xl font-bold text-gray-900">{selectedLeader.name}</h3>
            <span className="text-xs font-semibold text-[#007A78] uppercase tracking-wider mt-1 mb-2 block">
              {selectedLeader.role}
            </span>
            <p className="text-gray-600 text-sm leading-relaxed mt-3">
              {selectedLeader.bio}
            </p>
          </div>
        </div>
      )}
    </>
  );
}