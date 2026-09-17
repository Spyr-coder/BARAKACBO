import React, { useState } from 'react';
import { Camera, X, Calendar, Tag } from 'lucide-react';

const galleryItems = [
  // Climate & Environmental Initiatives (4 Images)
  {
    id: 1,
    title: "Eco-Awareness & Community Tree Planting Drive",
    category: "Climate & Environmental Initiatives",
    date: "March 14, 2025",
    image: "https://res.cloudinary.com/dk1xirz7b/image/upload/v1789645882/WhatsApp_Image_2026-09-16_at_18.37.32_ebfjpl.jpg",
    description: "Mobilizing youth volunteers for local reforestation, environmental cleanup, and sustainable eco-practices across Kisii."
  },
  {
    id: 2,
    title: "Grassroots Waste Management & Clean-up Campaign",
    category: "Climate & Environmental Initiatives",
    date: "March 14, 2025",
    image: "https://res.cloudinary.com/dk1xirz7b/image/upload/v1789645881/WhatsApp_Image_2026-09-16_at_18.39.12_n2z7zx.jpg",
    description: "Community cleanup drive focused on plastic waste reduction and promoting clean, healthy living environments."
  },
  {
    id: 3,
    title: "Youth Climate Resilience Workshop",
    category: "Climate & Environmental Initiatives",
    date: "March 14, 2025",
    image: "https://res.cloudinary.com/dk1xirz7b/image/upload/v1789645881/WhatsApp_Image_2026-09-16_at_18.42.36_krfexc.jpg",
    description: "Interactive session educating local youth on environmental conservation, climate advocacy, and practical solutions."
  },
  {
    id: 4,
    title: "Environmental Roadshow & Conservation Outreach",
    category: "Climate & Environmental Initiatives",
    date: "March 14, 2025",
    image: "https://res.cloudinary.com/dk1xirz7b/image/upload/v1789645881/WhatsApp_Image_2026-09-16_at_18.42.57_pjwjar.jpg",
    description: "Outreach campaign sensitizing community members on ecological responsibility and sustainable resource management."
  },

  // Drug Abuse Sensitization (3 Images)
  {
    id: 5,
    title: "Youth Substance Abuse Prevention Forum",
    category: "Drug Abuse Sensitization",
    date: "May 14, 2025",
    image: "https://res.cloudinary.com/dk1xirz7b/image/upload/v1789645881/WhatsApp_Image_2026-09-17_at_14.49.07_xl5vqs.jpg",
    description: "Empowering young people with knowledge on countering drug abuse and developing healthy coping strategies for stress."
  },
  {
    id: 6,
    title: "School & Institution Anti-Drug Outreach",
    category: "Drug Abuse Sensitization",
    date: "May 14, 2025",
    image: "https://res.cloudinary.com/dk1xirz7b/image/upload/v1789645881/WhatsApp_Image_2026-09-17_at_14.49.06_1_tmrtze.jpg",
    description: "Sensitization campaign held in local institutions to guide students away from substance dependencies."
  },
  {
    id: 7,
    title: "Community Peer Support & Anti-Addiction Drive",
    category: "Drug Abuse Sensitization",
    date: "May 14, 2025",
    image: "https://res.cloudinary.com/dk1xirz7b/image/upload/v1789645881/WhatsApp_Image_2026-09-17_at_14.49.06_wy4qya.jpg",
    description: "Mobilizing youth groups to create peer support networks and combat drug addiction through open dialogues."
  }
];

const categories = ["All", "Climate & Environmental Initiatives", "Drug Abuse Sensitization"];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = activeTab === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);

  return (
    <section id="gallery" className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-teal-50 border border-teal-200 text-[#007A78] px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide mb-3">
            <Camera className="w-4 h-4" />
            <span>Field Impact</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Past Events & Field Impact</h2>
          <p className="mt-3 text-gray-600">
            Visual highlights from our environmental initiatives and drug abuse sensitization drives across Kisii.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                  activeTab === cat
                    ? "bg-[#007A78] text-white shadow-sm"
                    : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#007A78] text-xs font-bold px-3 py-1 rounded-full flex items-center space-x-1 shadow-sm">
                  <Tag className="w-3 h-3" />
                  <span>{item.category}</span>
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center space-x-1.5 text-xs text-gray-400 mb-2 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-[#007A78]" />
                  <span>{item.date}</span>
                </div>
                <h3 className="font-bold text-gray-800 text-lg group-hover:text-[#007A78] transition leading-snug">{item.title}</h3>
                <p className="text-gray-600 text-xs mt-2 line-clamp-2 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-gray-900/60 text-white p-2 rounded-full hover:bg-gray-900 transition z-10"
            >
              <X className="w-5 h-5" />
            </button>
            <img src={selectedImage.image} alt={selectedImage.title} className="w-full h-80 object-cover" />
            <div className="p-6">
              <div className="flex items-center space-x-3 mb-2">
                <span className="text-xs font-bold text-[#007A78] uppercase tracking-wide">{selectedImage.category}</span>
                <span className="text-gray-300">•</span>
                <span className="text-xs text-gray-500 font-medium">{selectedImage.date}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{selectedImage.title}</h3>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}