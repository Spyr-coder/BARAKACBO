import React, { useState } from 'react';
import { Newspaper, Calendar, Clock, ArrowRight, X } from 'lucide-react';

const newsArticles = [
  {
    id: 1,
    title: "Youth Environmental Conservation & Tree Planting Drive",
    date: "March 16, 2025",
    readTime: "3 min read",
    category: "Environment",
    image: "https://res.cloudinary.com/dk1xirz7b/image/upload/v1789645882/WhatsApp_Image_2026-09-16_at_18.37.32_ebfjpl.jpg",
    summary: "Baraka CBO mobilized youth volunteers for an intensive environmental restoration drive and sustainable eco-awareness campaign.",
    content: "To combat environmental degradation and build sustainable communities, Baraka CBO spearheaded a grassroots environmental drive in Kisii County. Youth volunteers gathered for tree planting, public area clean-ups, and interactive sessions on local climate action. The initiative empowered participants with practical eco-friendly habits to foster healthy living environments."
  },
  {
    id: 2,
    title: "Substance Abuse Prevention & Youth Mental Wellness Forum",
    date: "May 17, 2025",
    readTime: "4 min read",
    category: "Drug Abuse Prevention",
    image: "https://res.cloudinary.com/dk1xirz7b/image/upload/v1789645881/WhatsApp_Image_2026-09-17_at_14.49.07_xl5vqs.jpg",
    summary: "Engaging local students and youths in open discussions to counter drug dependencies and promote positive mental health.",
    content: "Addressing the growing concern of substance abuse among students, Baraka CBO hosted a comprehensive sensitization forum focused on anti-addiction education and mental wellness. Community facilitators provided guidance on stress management, peer pressure resistance, and building healthy coping mechanisms to keep young people focused on personal and academic success."
  },
  {
    id: 3,
    title: "Grassroots Waste Management & Community Clean-up Campaign",
    date: "March 16, 2025",
    readTime: "3 min read",
    category: "Community Health",
    image: "https://res.cloudinary.com/dk1xirz7b/image/upload/v1789645881/WhatsApp_Image_2026-09-16_at_18.39.12_n2z7zx.jpg",
    summary: "Promoting healthy living environments through structured community clean-ups and plastic waste disposal advocacy.",
    content: "In alignment with our commitment to environmental sustainability, Baraka CBO organized a community-wide sanitation campaign. Volunteers cleared littered public areas, advocated for proper waste disposal, and educated local vendors on maintaining clean, hygienic environments to prevent disease outbreaks and boost social resilience."
  }
];

export default function News() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <section id="news" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 bg-teal-50 border border-teal-200 text-[#007A78] px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide mb-3">
            <Newspaper className="w-4 h-4" />
            <span>Updates & Stories</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Latest News & Sensitization Updates</h2>
          <p className="mt-3 text-gray-600">
            Stay updated with our ongoing projects, community workshops, and stories of youth transformation.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {newsArticles.map((article) => (
            <article 
              key={article.id} 
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover hover:scale-105 transition duration-300" 
                  />
                  <span className="absolute top-3 left-3 bg-[#007A78] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-xs text-gray-500 space-x-4 mb-3">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5 text-[#007A78]" />
                      <span>{article.date}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5 text-[#007A78]" />
                      <span>{article.readTime}</span>
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 leading-snug hover:text-[#007A78] transition cursor-pointer" onClick={() => setSelectedArticle(article)}>
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
                    {article.summary}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <button 
                  onClick={() => setSelectedArticle(article)}
                  className="inline-flex items-center space-x-2 text-[#007A78] font-bold text-sm hover:text-[#005f5d] transition"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Modal View */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 bg-gray-900/60 text-white p-2 rounded-full hover:bg-gray-900 transition z-10"
            >
              <X className="w-5 h-5" />
            </button>
            <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-60 object-cover" />
            <div className="p-6 overflow-y-auto space-y-4">
              <div className="flex items-center space-x-3 text-xs text-[#007A78] font-semibold">
                <span>{selectedArticle.category}</span>
                <span>•</span>
                <span>{selectedArticle.date}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{selectedArticle.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{selectedArticle.content}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}