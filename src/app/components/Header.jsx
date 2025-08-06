"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Close mobile menu when clicking on a link
  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95 backdrop-blur-sm py-2 shadow-lg' : 'bg-black/90 py-4'}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo/Name - Always visible */}
          <Link 
            href="/" 
            className="text-2xl font-bold tracking-tight text-white hover:text-gray-300 transition-colors"
            onClick={closeMobileMenu}
          >
            SAAD-WEB
          </Link>

          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link 
              href="/" 
              className="text-white hover:text-gray-300 transition-colors relative group"
              onClick={closeMobileMenu}
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/about" 
              className="text-white hover:text-gray-300 transition-colors relative group"
              onClick={closeMobileMenu}
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/projects" 
              className="text-white hover:text-gray-300 transition-colors relative group"
              onClick={closeMobileMenu}
            >
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/services" 
              className="text-white hover:text-gray-300 transition-colors relative group"
              onClick={closeMobileMenu}
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/contact" 
              className="text-white hover:text-gray-300 transition-colors relative group"
              onClick={closeMobileMenu}
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          {/* Desktop Get Started Button - Hidden on mobile */}
          <Link 
            href="/get-started"
            className="hidden md:block bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition-colors duration-200"
            onClick={closeMobileMenu}
          >
            Get Started
          </Link>

          {/* Mobile Menu Button - Visible only on mobile */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu - Slides in from right */}
        <div className={`md:hidden fixed top-0 right-0 h-full w-64 bg-black/95 backdrop-blur-sm transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50 pt-20 px-6`}>
          <nav className="flex flex-col space-y-6 mt-8">
            <Link 
              href="/" 
              className="text-white text-xl py-2 border-b border-gray-800 hover:text-gray-300 transition-colors"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-white text-xl py-2 border-b border-gray-800 hover:text-gray-300 transition-colors"
              onClick={closeMobileMenu}
            >
              About
            </Link>
            <Link 
              href="/projects" 
              className="text-white text-xl py-2 border-b border-gray-800 hover:text-gray-300 transition-colors"
              onClick={closeMobileMenu}
            >
              Projects
            </Link>
            <Link 
              href="/services" 
              className="text-white text-xl py-2 border-b border-gray-800 hover:text-gray-300 transition-colors"
              onClick={closeMobileMenu}
            >
              Services
            </Link>
            <Link 
              href="/contact" 
              className="text-white text-xl py-2 border-b border-gray-800 hover:text-gray-300 transition-colors"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
            <Link 
              href="/get-started"
              className="mt-8 bg-white text-black px-6 py-3 rounded-md font-semibold text-center hover:bg-gray-200 transition-colors duration-200"
              onClick={closeMobileMenu}
            >
              Get Started
            </Link>
          </nav>
        </div>

        {/* Overlay when mobile menu is open */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={closeMobileMenu}
          />
        )}
      </div>
    </header>
  );
};

export default Header;