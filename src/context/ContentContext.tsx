import React, { createContext, useContext, useState, useEffect } from 'react';
import type { WebsiteContent } from '../types/content';
import { defaultContent } from '../data/content';

interface ContentContextType {
  content: WebsiteContent;
  updateContent: (newContent: WebsiteContent) => void;
  saveContent: () => void;
  resetContent: () => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

const STORAGE_KEY = 'utstkd_website_content';

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<WebsiteContent>(defaultContent);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load content from localStorage on mount
  useEffect(() => {
    const savedContent = localStorage.getItem(STORAGE_KEY);
    if (savedContent) {
      try {
        setContent(JSON.parse(savedContent));
      } catch (error) {
        console.error('Failed to parse saved content, using defaults', error);
        setContent(defaultContent);
      }
    } else {
      setContent(defaultContent);
    }
    setIsLoaded(true);
  }, []);

  const updateContent = (newContent: WebsiteContent) => {
    setContent(newContent);
  };

  const saveContent = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
  };

  const resetContent = () => {
    setContent(defaultContent);
    localStorage.removeItem(STORAGE_KEY);
  };

  if (!isLoaded) {
    return <div className="flex items-center justify-center min-h-screen bg-slate-900">Loading...</div>;
  }

  return (
    <ContentContext.Provider value={{ content, updateContent, saveContent, resetContent }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};
