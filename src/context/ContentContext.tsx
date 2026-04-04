import React, { createContext, useContext, useState } from 'react';
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

function loadInitialContent(): WebsiteContent {
  const savedContent = localStorage.getItem(STORAGE_KEY);
  if (savedContent) {
    try {
      return JSON.parse(savedContent) as WebsiteContent;
    } catch (error) {
      console.error('Failed to parse saved content, using defaults', error);
    }
  }
  return defaultContent;
}

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<WebsiteContent>(loadInitialContent);

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

  return (
    <ContentContext.Provider value={{ content, updateContent, saveContent, resetContent }}>
      {children}
    </ContentContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};
