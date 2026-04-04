import React from 'react';
import { useContent } from '../context/ContentContext';

export const About: React.FC = () => {
  const { content } = useContent();

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <img
          src={content.about.heroImage}
          alt="About UTS Taekwondo"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-uts-navy via-blue-900 to-transparent opacity-70"></div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold">About Taekwondo 태권도</h1>
        </div>
      </section>

      {/* What is Taekwondo */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-4xl font-bold text-uts-navy mb-6">Taekwondo 태권도</h2>
            <p className="text-lg text-gray-800 leading-relaxed">{content.about.taekwondoDescription}</p>
          </div>
        </div>
      </section>

      {/* Five Tenets */}
      <section className="py-16 md:py-24 bg-uts-navy">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            The Five Tenets of Taekwondo
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {content.about.tenets.map((tenet, index) => (
              <div
                key={index}
                className="bg-blue-800 p-6 rounded-lg hover:shadow-lg transition-all hover:transform hover:scale-105 text-center"
              >
                <div className="text-4xl font-bold text-gold mb-2 korean-text">{tenet.koreanName}</div>
                <h3 className="text-xl font-bold text-white mb-1">{tenet.englishName}</h3>
                <p className="text-sm text-gray-300 mb-4 italic">{tenet.romanized}</p>
                <p className="text-gray-100 text-sm leading-relaxed">{tenet.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Basic Terminology */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-uts-navy mb-16">
            Basic Terminology
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Numerals', content: content.about.basicTerminology.numerals },
              { title: 'Commands', content: content.about.basicTerminology.commands },
              { title: 'Poomsae (Forms)', content: content.about.basicTerminology.poomsae },
              { title: 'Techniques', content: content.about.basicTerminology.techniques },
            ].map((section) => (
              <div key={section.title} className="bg-blue-50 p-8 rounded-lg border-l-4 border-uts-blue">
                <h3 className="text-2xl font-bold text-uts-navy mb-4">{section.title}</h3>
                <p className="text-gray-800 leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>

          {/* Miscellaneous */}
          <div className="mt-8 bg-blue-50 p-8 rounded-lg border-l-4 border-uts-blue">
            <h3 className="text-2xl font-bold text-uts-navy mb-4">Miscellaneous</h3>
            <p className="text-gray-800 leading-relaxed">{content.about.basicTerminology.miscellaneous}</p>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 md:py-24 bg-uts-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-8">Our History</h2>
          <div className="bg-blue-800 p-8 rounded-lg">
            <p className="text-lg text-gray-100 leading-relaxed">{content.about.history}</p>
          </div>
        </div>
      </section>

      {/* Committee */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-uts-navy mb-16">2025 Committee</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Committee Image */}
            <div className="flex items-center justify-center">
              <img
                src={content.about.committeeImage}
                alt="Committee"
                className="rounded-lg shadow-lg max-h-96 object-cover"
              />
            </div>

            {/* Committee Members List */}
            <div className="space-y-4">
              {content.about.committeeMembers.map((member, index) => (
                <div key={index} className="p-6 bg-blue-50 rounded-lg border-l-4 border-gold">
                  <h3 className="text-lg font-bold text-uts-navy">{member.name}</h3>
                  <p className="text-gold font-semibold mb-2">{member.role}</p>
                  {member.email && <p className="text-sm text-gray-600">{member.email}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
