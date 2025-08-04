"use client";
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-black text-white py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex items-center">
        {/* Logo/Name */}
        <Link href="/" className="text-2xl font-bold tracking-tight">
          Your Portfolio
        </Link>

        {/* Spacer to push nav to center */}
        <div className="flex-grow"></div>

        {/* Navigation Links */}
        <nav className="flex space-x-8 text-lg">
          <Link 
            href="/" 
            className="relative top-0 hover:-translate-y-1 transition-transform duration-200 ease-in-out"
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className="relative top-0 hover:-translate-y-1 transition-transform duration-200 ease-in-out"
          >
            About
          </Link>
          <Link 
            href="/projects" 
            className="relative top-0 hover:-translate-y-1 transition-transform duration-200 ease-in-out"
          >
            Projects
          </Link>
          <Link 
            href="/services" 
            className="relative top-0 hover:-translate-y-1 transition-transform duration-200 ease-in-out"
          >
            Services
          </Link>
          <Link 
            href="/contact" 
            className="relative top-0 hover:-translate-y-1 transition-transform duration-200 ease-in-out"
          >
            Contact
          </Link>
        </nav>

        {/* Spacer to push button to right */}
        <div className="flex-grow"></div>

        {/* Get Started Button */}
        <Link 
          href="/get-started"
          className="bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition-colors duration-200"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
};

export default Header;