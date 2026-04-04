import React from 'react';
import { Mail } from 'lucide-react';
import { useContent } from '../context/ContentContext';

export const AnnouncementBar: React.FC = () => {
  const { content } = useContent();

  return (
    <div className="bg-gold text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-2 text-sm sm:text-base font-semibold">
          <Mail size={20} />
          <span>Join the Club</span>
        </div>
        <a
          href={`mailto:${content.contact.email}`}
          className="bg-uts-blue text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-sm"
        >
          Register Now
        </a>
      </div>
    </div>
  );
};
