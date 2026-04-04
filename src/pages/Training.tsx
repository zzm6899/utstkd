import React from 'react';
import { useContent } from '../context/ContentContext';
import { Clock, MapPin } from 'lucide-react';

export const Training: React.FC = () => {
  const { content } = useContent();

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <img
          src={content.training.heroImage}
          alt="Training"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-uts-navy via-blue-900 to-transparent opacity-70"></div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Training Classes</h1>
          <p className="text-xl text-gray-100">{content.training.classesIntro}</p>
        </div>
      </section>

      {/* Beginner Tip */}
      <section className="py-8 bg-gold">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-uts-navy font-bold text-lg">
            💡 {content.training.beginnerTip}
          </p>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-uts-navy mb-16">Class Schedule</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.training.schedule.map((entry, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-blue-50 to-white border-2 border-uts-blue rounded-lg hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl font-bold text-gold flex-shrink-0 min-w-fit">{entry.day}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-uts-blue font-semibold mb-2">
                      <Clock size={18} />
                      {entry.time}
                    </div>
                    <p className="text-gray-700">{entry.activities}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Location */}
          <div className="mt-12 p-8 bg-uts-navy text-white rounded-lg flex items-start gap-4">
            <MapPin size={32} className="text-gold flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-bold mb-2">Location</h3>
              <p className="text-lg text-gray-100">{content.training.location}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-24 bg-uts-navy text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gold mb-4">Pricing</h2>
          <p className="text-center text-lg text-gray-100 mb-16">
            Try your first 2 classes for FREE!
          </p>

          {/* Membership Plans */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {content.training.pricing.map((plan) => (
              <div
                key={plan.name}
                className="p-6 bg-blue-800 rounded-lg text-center hover:bg-blue-700 transition-colors"
              >
                <h3 className="text-lg font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-gold mb-2">${plan.price}</div>
              </div>
            ))}
          </div>

          {/* Additional Fees */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-blue-800 rounded-lg">
              <h3 className="text-xl font-bold text-gold mb-2">Grading</h3>
              <p className="text-lg text-gray-100">${content.training.gradingPrice}</p>
              <p className="text-sm text-gray-300 mt-2">(Includes new belt)</p>
            </div>
            <div className="p-6 bg-blue-800 rounded-lg">
              <h3 className="text-xl font-bold text-gold mb-2">AT Registration</h3>
              <p className="text-lg text-gray-100">${content.training.atRegistration}</p>
              <p className="text-sm text-gray-300 mt-2">
                (Compulsory for competing or grading to black belt)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Uniform & Equipment */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-uts-navy mb-16">
            Uniform & Equipment
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {content.training.uniformAndEquipment.map((item) => (
              <div
                key={item.name}
                className="p-4 bg-blue-50 rounded-lg border-l-4 border-gold flex justify-between items-center"
              >
                <span className="font-semibold text-gray-800">{item.name}</span>
                <span className="text-gold font-bold text-lg">${item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-uts-blue to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Join?</h2>
          <p className="text-xl text-gray-100 mb-8">
            Start your Taekwondo journey today with your first 2 classes completely free!
          </p>
          <a
            href="mailto:utstaekwondo@gmail.com"
            className="bg-gold text-uts-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all inline-block"
          >
            Contact Us to Register
          </a>
        </div>
      </section>
    </main>
  );
};
