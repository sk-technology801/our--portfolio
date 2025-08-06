
"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

// Animated Section Component (Blink Reload on Hover)
const AnimatedSection = ({ children, id, isTechStack = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.section
      id={id}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={isHovered && !isTechStack ? [
        { opacity: 1 },
        { opacity: 0.3 },
        { opacity: 1 }
      ] : { opacity: 1 }}
      transition={isHovered && !isTechStack ? { times: [0, 0.5, 1], duration: 0.6, ease: "easeInOut" } : {}}
      className="py-16 bg-black"
    >
      {children(isHovered)}
    </motion.section>
  );
};

// Tech Stack Item Component (Upper to Lower, Right to Left on Section Hover)
const TechStackItem = ({ name, icon, isSectionHovered }) => {
  return (
    <motion.div
      animate={isSectionHovered ? { x: -20, y: 20 } : { x: 20, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col items-center justify-center p-4"
    >
      <span className="text-4xl text-white">{icon}</span>
      <span className="text-base md:text-lg font-medium mt-2">{name}</span>
    </motion.div>
  );
};

// Home Component
export default function Home() {
  const techStack = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "⬢" },
    { name: "Vue", icon: "🌈" },
    { name: "Angular", icon: "🅰️" },
    { name: "Svelte", icon: "🔥" },
    { name: "Remix", icon: "🎵" },
    { name: "Astro", icon: "🚀" },
    { name: "Lit", icon: "💡" },
    { name: "Three.js", icon: "🧊" },
    { name: "JavaScript", icon: "📜" },
    { name: "TypeScript", icon: "🛠️" },
    { name: "Vite", icon: "⚡" },
  ];

  return (
    <div className="text-white">
      {/* Hero Section */}
      <AnimatedSection id="hero">
        {() => (
          <div
            className="min-h-screen flex items-center bg-cover bg-center bg-black/60"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?_gl=1*154aag9*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTQzMzcxOTckbzQ4JGcxJHQxNzU0MzM4NTE5JGo1MyRsMCRoMA..')`,
            }}
          >
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-md space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold tracking-wide">[ Modren Stack ]</h2>
                <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                  Build Modern <br />
                  and Highly Optimized <br />
                  Sites With Saad
                </h1>
                <Link
                  href="/get-started"
                  className="inline-block bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition-colors duration-200"
                >
                  Start Your Project
                </Link>
              </div>
            </div>
          </div>
        )}
      </AnimatedSection>

      {/* Tech Stack Section */}
      <AnimatedSection id="tech-stack" isTechStack={true}>
        {(isHovered) => (
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">Saad Tech Stack</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {techStack.map((tech) => (
                <TechStackItem key={tech.name} name={tech.name} icon={tech.icon} isSectionHovered={isHovered} />
              ))}
            </div>
          </div>
        )}
      </AnimatedSection>

      {/* Showcase Section */}
      <AnimatedSection id="showcase">
        {() => (
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold tracking-wide">
                  <span className="inline-block mr-2">🚀</span> Innovative Web Solutions
                </h2>
                <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                  Create Stunning <br />
                  and High-Performance <br />
                  Websites with Saad
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
        )}
      </AnimatedSection>

      {/* Why Us Section */}
      <AnimatedSection id="why-us">
        {() => (
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold tracking-wide">[ Why Us ]</h2>
                <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                  Advance JS Solutions
                </h1>
                <p className="text-base md:text-lg max-w-md">
                  Build lightning-fast, scalable, and modern web applications with cutting-edge JavaScript frameworks. At SaadWebs, we craft high-performance, scalable, and future-ready web applications using the latest JavaScript technologies — including Next.js, Vue.js, Node.js, Express, Angular, TypeScript, Three.js, and more. From intuitive UIs to powerful backend architectures, we deliver full-stack solutions tailored for startups, enterprises, and everything in between.
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
                  src="https://images.pexels.com/photos/5496464/pexels-photo-5496464.jpeg?_gl=1*dpxxsw*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTQzMzcxOTckbzQ4JGcxJHQxNzU0MzM4NzM1JGoxNSRsMCRoMA.."
                  alt="Why ArafaWebs"
                  className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        )}
      </AnimatedSection>
    </div>
  );
}
