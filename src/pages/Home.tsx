import React from 'react';
import { useContent } from '../context/ContentContext';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const Home: React.FC = () => {
  const { content } = useContent();
  const navigate = useNavigate();

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src={content.home.heroImage}
          alt="UTS Taekwondo Club"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-uts-navy via-blue-900 to-transparent opacity-60"></div>

        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
              {content.home.tagline.split('|').map((part, i) => (
                <span key={i}>
                  {part.trim()}
                  {i < 2 && ' '}
                </span>
              ))}
            </h1>
          </div>
          <p className="text-lg md:text-2xl mb-8 text-gray-100">{content.home.description}</p>
          <button
            onClick={() => navigate('/training')}
            className="bg-gold text-uts-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all transform hover:scale-105 flex items-center gap-2 mx-auto"
          >
            View Classes <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Reasons to Join */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-uts-navy text-center mb-16">
            Why Join UTS Taekwondo?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.home.reasonsToJoin.map((reason, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-blue-50 to-white border-2 border-uts-blue rounded-lg hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl font-bold text-gold flex-shrink-0">0{index + 1}</div>
                  <p className="text-lg text-gray-800">{reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Classes Overview */}
      <section className="py-16 md:py-24 bg-uts-navy text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Our Classes</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-blue-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gold mb-4">Classes Overview</h3>
              <p className="text-gray-100 mb-6">{content.home.classesDescription}</p>
              <button
                onClick={() => navigate('/training')}
                className="bg-gold text-uts-navy px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-all"
              >
                View Full Schedule
              </button>
            </div>

            <div className="bg-blue-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gold mb-4">Our Approach</h3>
              <p className="text-gray-100">{content.home.aimsDescription}</p>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { title: 'Fitness', icon: '💪' },
              { title: 'Strength', icon: '🏋️' },
              { title: 'Flexibility', icon: '🤸' },
              { title: 'Meditation', icon: '🧘' },
            ].map((benefit) => (
              <div key={benefit.title} className="text-center p-6 bg-blue-900 rounded-lg">
                <div className="text-4xl mb-2">{benefit.icon}</div>
                <p className="font-bold text-gold">{benefit.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-uts-navy mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-700 mb-8">
            Join us for our first 2 FREE classes and experience the UTS Taekwondo difference!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/training')}
              className="bg-uts-blue text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-all"
            >
              View Classes
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="border-2 border-uts-blue text-uts-blue px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-all"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};
