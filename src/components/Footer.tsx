import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';
import { useContent } from '../context/ContentContext';

export const Footer: React.FC = () => {
  const { content } = useContent();

  return (
    <footer className="bg-uts-navy text-gray-100 border-t-4 border-gold mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">UTS Taekwondo 태권도</h3>
            <p className="text-sm text-gray-300">
              Training Mind, Body, and Spirit through the way of the foot and fist.
            </p>
          </div>

          {/* Location Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Location</h3>
            <p className="text-sm text-gray-300 mb-2">{content.contact.location}</p>
            <p className="text-xs text-gray-400">{content.contact.locationDetails}</p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Connect With Us</h3>
            <div className="space-y-2">
              <a
                href={`mailto:${content.contact.email}`}
                className="flex items-center gap-2 text-sm text-gold hover:text-white transition-colors"
              >
                <Mail size={16} />
                {content.contact.email}
              </a>
              <a
                href={content.contact.discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gold hover:text-white transition-colors"
              >
                <MessageCircle size={16} />
                Discord
              </a>
              <a
                href={`https://instagram.com/${content.contact.instagramHandle.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gold hover:text-white transition-colors"
              >
                <span>📸</span>
                {content.contact.instagramHandle}
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          {/* Committee Info */}
          <div className="mb-6">
            <h3 className="text-white font-bold text-sm mb-3">2025 Committee</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs text-gray-300">
              {content.about.committeeMembers.map((member) => (
                <div key={member.name}>
                  <p className="font-semibold text-gold">{member.role}</p>
                  <p>{member.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-xs text-gray-400 border-t border-gray-700 pt-6">
            <p>&copy; 2025 UTS Taekwondo Club. All rights reserved.</p>
            <p className="mt-2">Affiliated with ActivateUTS</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
