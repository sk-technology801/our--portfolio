"use client"
import React from 'react';
import { Mail, Phone, MapPin, Twitter, Github, Linkedin } from 'lucide-react';

// Footer Component
export default function Footer() {
  const companyLinks = [
    { name: 'About', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
  ];

  const serviceLinks = [
    { name: 'Web Development', href: '/services#web-development' },
    { name: 'Mobile Apps', href: '/services#mobile-apps' },
    { name: 'UI/UX Design', href: '/services#ui-ux-design' },
    { name: 'Cloud Solutions', href: '/services#cloud-solutions' },
  ];

  const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com/yourcompany', icon: Twitter },
    { name: 'GitHub', href: 'https://github.com/sk-technology801?tab=repositories', icon: Github },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/sk-technology-05080b338/', icon: Linkedin },
  ];

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Links */}
          <div className="border-l-2 border-[#00ddeb]/30 pl-4">
            <h3 className="text-lg font-black text-white mb-4 animate-minimal-pulse">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 text-sm font-bold hover:text-[#00ddeb] hover:border-b-2 hover:border-[#00ddeb]/50 transition-all duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Links */}
          <div className="border-l-2 border-[#00ddeb]/30 pl-4">
            <h3 className="text-lg font-black text-white mb-4 animate-minimal-pulse">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 text-sm font-bold hover:text-[#00ddeb] hover:border-b-2 hover:border-[#00ddeb]/50 transition-all duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="border-l-2 border-[#00ddeb]/30 pl-4">
            <h3 className="text-lg font-black text-white mb-4 animate-minimal-pulse">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#00ddeb]" />
                <a
                  className="text-gray-300 text-sm font-bold hover:text-[#00ddeb] hover:border-b-2 hover:border-[#00ddeb]/50 transition-all duration-200"
                >
                  sardarsaadisaadi@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#00ddeb]" />
                <a
                  className="text-gray-300 text-sm font-bold hover:text-[#00ddeb] hover:border-b-2 hover:border-[#00ddeb]/50 transition-all duration-200"
                >
                  03084931083
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#00ddeb]" />
                <span className="text-gray-300 text-sm font-bold">
                  Faisalabad Pakistan
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="border-l-2 border-[#00ddeb]/30 pl-4">
            <h3 className="text-lg font-black text-white mb-4 animate-minimal-pulse">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-[#00ddeb] hover:text-white transition-colors duration-200 animate-minimal-pulse"
                  aria-label={link.name}
                >
                  <link.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-[#00ddeb]/30 text-center">
          <p className="text-gray-400 text-sm font-bold">
            &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}