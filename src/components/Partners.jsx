import React, { useState } from 'react';

const partners = [
  {
    name: "Ecobana Company",
    type: "Corporate Partner",
    logo: "https://res.cloudinary.com/dk1xirz7b/image/upload/v1790089711/WhatsApp_Image_2026-09-20_at_08.11.31_znzpeo.jpg"
  },
  {
    name: "Young Solidarity Foundation",
    type: "NGO Partner",
    logo: "https://res.cloudinary.com/dk1xirz7b/image/upload/v1790089712/WhatsApp_Image_2026-09-20_at_08.17.33_a8icsf.jpg"
  },
  {
    name: "Big Brains' Foundation",
    type: "Youth & Empowerment Partner",
    logo: "https://res.cloudinary.com/dk1xirz7b/image/upload/v1790089711/WhatsApp_Image_2026-09-20_at_08.06.51_raynpd.jpg"
  },
  {
    name: "Kisii University",
    type: "Academic Institution",
    logo: "https://res.cloudinary.com/dk1xirz7b/image/upload/v1790089711/WhatsApp_Image_2026-09-20_at_08.15.31_gfcnsv.jpg"
  }
];

export default function Partners() {
  const [selectedLogo, setSelectedLogo] = useState(null);

  return (
    <>
      {/* Added id="partners" here */}
      <section id="partners" className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">Our Official Partners</h3>
            <p className="text-[#007A78] font-bold text-lg mt-1">Collaborating for Community Impact</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition text-center flex flex-col items-center justify-center space-y-3"
              >
                <div 
                  className="w-16 h-16 rounded-xl overflow-hidden bg-teal-50 flex items-center justify-center p-1 border border-gray-100 cursor-pointer"
                  onClick={() => setSelectedLogo(partner)}
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name + " logo"} 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-sm">{partner.name}</h4>
                  <span className="text-xs text-gray-400">{partner.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedLogo && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedLogo(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl p-4 shadow-2xl cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedLogo(null)}
              className="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-white text-gray-700 shadow-lg flex items-center justify-center text-xl font-bold hover:bg-gray-100 transition"
              aria-label="Close image"
            >
              ×
            </button>

            <img
              src={selectedLogo.logo}
              alt={selectedLogo.name + " logo"}
              className="max-w-full max-h-[80vh] w-auto h-auto object-contain rounded-xl"
            />

            <div className="text-center mt-3">
              <h4 className="font-bold text-gray-800">{selectedLogo.name}</h4>
              <span className="text-xs text-gray-400">{selectedLogo.type}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}