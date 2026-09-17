import React, { useState, useEffect } from 'react';
import { Heart, ChevronRight, ChevronLeft, MapPin } from 'lucide-react';

const heroImages = [
  {
    url: "https://res.cloudinary.com/dk1xirz7b/image/upload/v1789645882/WhatsApp_Image_2026-09-16_at_18.37.32_ebfjpl.jpg",
    caption: "Climate & Environmental Clean-Up Drive",
    tag: "Climate & Environment"
  },
  {
    url: "https://res.cloudinary.com/dk1xirz7b/image/upload/v1789645881/WhatsApp_Image_2026-09-17_at_14.49.07_xl5vqs.jpg",
    caption: "Drug Abuse Sensitization Workshop",
    tag: "Drug Abuse Prevention"
  },
  {
    url: "https://res.cloudinary.com/dk1xirz7b/image/upload/v1789645881/WhatsApp_Image_2026-09-16_at_18.39.12_n2z7zx.jpg",
    caption: "Community Clean-up & Youth Mobilization",
    tag: "Community Action"
  }
];

export default function Hero({ onOpenDonate }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);

  return (
    <section className="relative bg-gradient-to-b from-teal-50/60 via-white to-white py-12 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-teal-100/80 border border-teal-200 text-[#007A78] px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide">
              <MapPin className="w-4 h-4 text-[#007A78]" />
              <span>Kisii, Kenya</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight tracking-tight">
              Empowering Youths, <br />
              <span className="text-[#007A78]">Building Communities.</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
              Baraka CBO is dedicated to fostering community empowerment, environmental sustainability, educational outreach, and health advocacy across grassroots youth networks.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button 
                onClick={onOpenDonate}
                className="bg-[#007A78] text-white px-7 py-3.5 rounded-full font-bold shadow-lg hover:bg-[#005f5d] hover:shadow-teal-900/20 transition flex items-center space-x-2"
              >
                <Heart className="w-5 h-5 fill-current" />
                <span>Support Our Cause</span>
              </button>

              <a 
                href="#about" 
                className="border-2 border-gray-200 text-gray-700 px-7 py-3.5 rounded-full font-semibold hover:border-[#007A78] hover:text-[#007A78] transition flex items-center space-x-2"
              >
                <span>Learn More</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Image Carousel Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[380px] sm:h-[420px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gray-900">
              {heroImages.map((img, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <img
                    src={img.url}
                    alt={img.caption}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                    <span className="bg-[#007A78] text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-2">
                      {img.tag}
                    </span>
                    <p className="text-sm font-semibold leading-snug">{img.caption}</p>
                  </div>
                </div>
              ))}

              <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <div className="absolute bottom-3 right-6 z-20 flex space-x-1.5">
                {heroImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === currentSlide ? 'w-6 bg-[#007A78]' : 'w-2 bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}