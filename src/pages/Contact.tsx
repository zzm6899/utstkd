import React from 'react';
import { useContent } from '../context/ContentContext';
import { Mail, MapPin, MessageCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const { content } = useContent();

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <img
          src={content.contact.heroImage}
          alt="Contact Us"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-uts-navy via-blue-900 to-transparent opacity-70"></div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold">Contact Us</h1>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-uts-navy mb-16">Get In Touch</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Email */}
            <div className="p-8 bg-blue-50 rounded-lg text-center border-2 border-uts-blue hover:shadow-lg transition-all">
              <Mail size={48} className="text-gold mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-uts-navy mb-2">Email</h3>
              <a
                href={`mailto:${content.contact.email}`}
                className="text-blue-600 hover:text-blue-800 text-lg break-all"
              >
                {content.contact.email}
              </a>
            </div>

            {/* Discord */}
            <div className="p-8 bg-blue-50 rounded-lg text-center border-2 border-uts-blue hover:shadow-lg transition-all">
              <MessageCircle size={48} className="text-gold mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-uts-navy mb-2">Discord</h3>
              <a
                href={content.contact.discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-lg"
              >
                Join our Discord
              </a>
            </div>

            {/* Instagram */}
            <div className="p-8 bg-blue-50 rounded-lg text-center border-2 border-uts-blue hover:shadow-lg transition-all">
              <span className="text-5xl mx-auto mb-4 block">📸</span>
              <h3 className="text-2xl font-bold text-uts-navy mb-2">Instagram</h3>
              <a
                href={`https://instagram.com/${content.contact.instagramHandle.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-lg"
              >
                {content.contact.instagramHandle}
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="p-8 bg-uts-navy text-white rounded-lg flex flex-col md:flex-row items-start gap-6">
            <MapPin size={48} className="text-gold flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold mb-2">Location</h3>
              <p className="text-lg text-gray-100">{content.contact.location}</p>
              <p className="text-gray-300 mt-2">{content.contact.locationDetails}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Committee Contacts */}
      <section className="py-16 md:py-24 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-uts-navy mb-16">Committee Contacts</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* President */}
            <div className="p-8 bg-white rounded-lg border-2 border-gold">
              <h3 className="text-2xl font-bold text-uts-navy mb-4">President</h3>
              <p className="text-gray-700 mb-4">For general inquiries and club information.</p>
              <a
                href={`mailto:${content.contact.presidentEmail}`}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold"
              >
                <Mail size={20} />
                {content.contact.presidentEmail}
              </a>
            </div>

            {/* Treasurer */}
            <div className="p-8 bg-white rounded-lg border-2 border-gold">
              <h3 className="text-2xl font-bold text-uts-navy mb-4">Treasurer</h3>
              <p className="text-gray-700 mb-4">For membership, fees, and financial inquiries.</p>
              <a
                href={`mailto:${content.contact.treasurerEmail}`}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold"
              >
                <Mail size={20} />
                {content.contact.treasurerEmail}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-uts-navy mb-12">Send us a Message</h2>

          <div className="bg-blue-50 p-8 rounded-lg border-2 border-uts-blue">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-uts-navy mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border-2 border-uts-blue rounded-lg focus:outline-none focus:border-gold"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-uts-navy mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border-2 border-uts-blue rounded-lg focus:outline-none focus:border-gold"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-uts-navy mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border-2 border-uts-blue rounded-lg focus:outline-none focus:border-gold"
                  placeholder="Message subject"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-uts-navy mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-2 border-2 border-uts-blue rounded-lg focus:outline-none focus:border-gold resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="button"
                  onClick={() => {
                    alert(
                      'For now, please use the email addresses above to contact us. Form integration coming soon!',
                    );
                  }}
                  className="bg-uts-blue text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-all"
                >
                  Send Message
                </button>
              </div>

              <p className="text-center text-sm text-gray-600 mt-4">
                Or email us directly at{' '}
                <a href={`mailto:${content.contact.email}`} className="text-blue-600 hover:text-blue-800 font-bold">
                  {content.contact.email}
                </a>
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ-like section */}
      <section className="py-16 md:py-24 bg-uts-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gold mb-16">Quick Answers</h2>

          <div className="space-y-6">
            <div className="bg-blue-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gold mb-2">When do classes start?</h3>
              <p className="text-gray-100">
                Check our Training page for the full class schedule. Beginners should aim for Monday or Wednesday
                classes.
              </p>
            </div>

            <div className="bg-blue-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gold mb-2">Do I need prior experience?</h3>
              <p className="text-gray-100">
                No! We welcome students of all levels, from complete beginners to experienced practitioners.
              </p>
            </div>

            <div className="bg-blue-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gold mb-2">How much does it cost?</h3>
              <p className="text-gray-100">
                Your first 2 classes are FREE! See our Training page for full pricing details.
              </p>
            </div>

            <div className="bg-blue-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gold mb-2">What do I need to bring?</h3>
              <p className="text-gray-100">
                For your first classes, just bring yourself! We can discuss uniform and equipment after you've decided
                to join.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
