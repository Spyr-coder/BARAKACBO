import React, { useState } from 'react';
import { Camera, X, Tag } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    title: "Community Clean-up Drive",
    category: "Environmental",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800",
    description: "Youth mobilization for local environmental conservation and sustainability in Kisii."
  },
  {
    id: 2,
    title: "Youth Empowerment Workshop",
    category: "Youth Empowerment",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
    description: "Capacity building, public speaking, and entrepreneurship training sessions."
  },
  {
    id: 3,
    title: "Mental Wellness Campaign",
    category: "Sensitization",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    description: "Community forum on stress management, depression awareness, and suicide prevention."
  },
  {
    id: 4,
    title: "Substance Abuse Awareness Forum",
    category: "Sensitization",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800",
    description: "Engaging student communities on drug prevention and positive coping mechanisms."
  },
  {
    id: 5,
    title: "GBV Advocacy Session",
    category: "Sensitization",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800",
    description: "Sensitization workshop promoting safe environments and reproductive health."
  },
  {
    id: 6,
    title: "Tree Planting Initiative",
    category: "Environmental",
    image: "https://images.unsplash.com/photo-1576085898323-218337e3e43c?auto=format&fit=crop&q=80&w=800",
    description: "Promoting healthy living environments and social resilience."
  }
];

const categories = ["All", "Sensitization", "Youth Empowerment", "Environmental"];

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
            <span>Community Action</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Past Events & Field Impact</h2>
          <p className="mt-3 text-gray-600">
            Visual highlights from our sensitization roadshows, workshops, and environmental initiatives in Kisii.
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
              <div className="relative h-52 overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#007A78] text-xs font-bold px-3 py-1 rounded-full flex items-center space-x-1">
                  <Tag className="w-3 h-3" />
                  <span>{item.category}</span>
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-gray-800 text-lg group-hover:text-[#007A78] transition">{item.title}</h3>
                <p className="text-gray-600 text-xs mt-2 line-clamp-2">{item.description}</p>
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
            <img src={selectedImage.image} alt={selectedImage.title} className="w-full h-72 object-cover" />
            <div className="p-6">
              <span className="text-xs font-bold text-[#007A78] uppercase tracking-wide">{selectedImage.category}</span>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">{selectedImage.title}</h3>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}