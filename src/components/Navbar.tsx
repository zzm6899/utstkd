import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-uts-blue sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Title */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="text-white font-bold text-xl">🥋</div>
            <div className="hidden sm:block text-white font-bold text-lg">UTS TAEKWONDO</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            <Link
              to="/"
              className={`transition-colors ${
                isActive('/') ? 'text-gold font-semibold' : 'text-white hover:text-gold'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`transition-colors ${
                isActive('/about') ? 'text-gold font-semibold' : 'text-white hover:text-gold'
              }`}
            >
              About
            </Link>
            <Link
              to="/training"
              className={`transition-colors ${
                isActive('/training') ? 'text-gold font-semibold' : 'text-white hover:text-gold'
              }`}
            >
              Training
            </Link>
            <Link
              to="/contact"
              className={`transition-colors ${
                isActive('/contact') ? 'text-gold font-semibold' : 'text-white hover:text-gold'
              }`}
            >
              Contact
            </Link>
            <Link
              to="/admin"
              className={`transition-colors ${
                isActive('/admin') ? 'text-gold font-semibold' : 'text-white hover:text-gold'
              }`}
            >
              Admin
            </Link>
          </div>

          {/* Mobile menu button */}
          <button onClick={toggleMenu} className="md:hidden text-white p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 border-t-2 border-gold">
          <div className="px-4 py-4 space-y-3">
            <Link
              to="/"
              className={`block py-2 transition-colors ${
                isActive('/') ? 'text-gold font-semibold' : 'text-white hover:text-gold'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`block py-2 transition-colors ${
                isActive('/about') ? 'text-gold font-semibold' : 'text-white hover:text-gold'
              }`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/training"
              className={`block py-2 transition-colors ${
                isActive('/training') ? 'text-gold font-semibold' : 'text-white hover:text-gold'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Training
            </Link>
            <Link
              to="/contact"
              className={`block py-2 transition-colors ${
                isActive('/contact') ? 'text-gold font-semibold' : 'text-white hover:text-gold'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/admin"
              className={`block py-2 transition-colors ${
                isActive('/admin') ? 'text-gold font-semibold' : 'text-white hover:text-gold'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Admin
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
