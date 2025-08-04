
"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

// Header Component
const Header = () => {
  return (
    <header>
    
    </header>
  );
};

// Animated Section Component (Blink Reload on Hover)
const AnimatedSection = ({ children, id }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.section
      id={id}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={isHovered ? [
        { opacity: 1 },
        { opacity: 0.3 },
        { opacity: 1 }
      ] : { opacity: 1 }}
      transition={isHovered ? { times: [0, 0.5, 1], duration: 0.6, ease: "easeInOut" } : {}}
      className="py-16 bg-black"
    >
      {children}
    </motion.section>
  );
};

// Tech Stack Item Component (Blink Reload on Hover)
const TechStackItem = ({ icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={isHovered ? [
        { opacity: 1 },
        { opacity: 0.3 },
        { opacity: 1 }
      ] : { opacity: 1 }}
      transition={isHovered ? { times: [0, 0.5, 1], duration: 0.5, ease: "easeInOut" } : {}}
      className="flex items-center justify-center p-4"
    >
      <span className="text-4xl">{icon}</span>
    </motion.div>
  );
};

// Home Component
export default function Home() {
  const techStack = [
    { icon: "⚛️" }, // React
    { icon: "⬢" }, // Next.js
    { icon: "🌈" }, // Vue
    { icon: "🅰️" }, // Angular
    { icon: "🔥" }, // Svelte
    { icon: "🎵" }, // Remix
    { icon: "🚀" }, // Astro
    { icon: "💡" }, // Lit
    { icon: "🧊" }, // Three.js
    { icon: "📜" }, // JavaScript
    { icon: "🛠️" }, // TypeScript
    { icon: "⚡" }, // Vite
  ];

  return (
    <div className="text-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section
        className="min-h-screen flex items-center bg-cover bg-center bg-black/60"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?_gl=1*egbygh*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTQzMzE4MDIkbzQ3JGcxJHQxNzU0MzMxODg1JGo1OSRsMCRoMA..')`,
        }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-md space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold tracking-wide">[ Modren Stack ]</h2>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Build Modern <br />
              and Highly Optimized <br />
              Sites With Arafa
            </h1>
            <Link
              href="/get-started"
              className="inline-block bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition-colors duration-200"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <AnimatedSection id="tech-stack">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">Arafa Tech Stack</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {techStack.map((tech, index) => (
              <TechStackItem key={index} icon={tech.icon} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Showcase Section */}
      <AnimatedSection id="showcase">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-semibold tracking-wide">
                <span className="inline-block mr-2">🚀</span> Innovative Web Solutions
              </h2>
              <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                Create Stunning <br />
                and High-Performance <br />
                Websites with Arafa
              </h1>
              <p className="text-base md:text-lg max-w-md">
                Leverage our expertise in modern JavaScript frameworks to build dynamic, responsive, and scalable web applications tailored to your vision.
              </p>
            </div>
            <div className="w-full">
              <img
                src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Web development showcase"
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Why Us Section */}
      <AnimatedSection id="why-us">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-semibold tracking-wide">[ Why Us ]</h2>
              <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                Advance JS Solutions
              </h1>
              <p className="text-base md:text-lg max-w-md">
                Build lightning-fast, scalable, and modern web applications with cutting-edge JavaScript frameworks. At ArafaWebs, we craft high-performance, scalable, and future-ready web applications using the latest JavaScript technologies — including Next.js, Vue.js, Node.js, Express, Angular, TypeScript, Three.js, and more. From intuitive UIs to powerful backend architectures, we deliver full-stack solutions tailored for startups, enterprises, and everything in between.
              </p>
              <Link
                href="/get-started"
                className="inline-block bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition-colors duration-200"
              >
                Start Building
              </Link>
            </div>
            <div className="w-full">
              <img
                src="https://images.unsplash.com/photo-1516321310764-4b8a0aeb2679?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Why ArafaWebs"
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
