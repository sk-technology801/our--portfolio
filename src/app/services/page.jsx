"use client"
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ExternalLink, Code, Zap, Users, Globe, Database, Brush, Smartphone, Layout } from 'lucide-react';

// Black Background with Glowing Hexagonal Grid (unchanged)
const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const hexSize = 50;
    const hexagons = [];
    const cols = Math.ceil(canvas.width / (hexSize * 1.5)) + 1;
    const rows = Math.ceil(canvas.height / (hexSize * Math.sqrt(3))) + 1;

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const x = i * hexSize * 1.5;
        const y = j * hexSize * Math.sqrt(3) + (i % 2) * (hexSize * Math.sqrt(3) / 2);
        hexagons.push({
          x,
          y,
          opacity: Math.random() * 0.2,
          speed: Math.random() * 0.005 + 0.002,
        });
      }
    }

    const animate = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      hexagons.forEach((hex) => {
        ctx.beginPath();
        for (let k = 0; k < 6; k++) {
          const angle = (Math.PI / 3) * k;
          const hx = hex.x + hexSize * Math.cos(angle);
          const hy = hex.y + hexSize * Math.sin(angle);
          ctx[k === 0 ? 'moveTo' : 'lineTo'](hx, hy);
        }
        ctx.closePath();
        ctx.strokeStyle = `rgba(0, 221, 235, ${hex.opacity * (Math.sin(time * hex.speed) + 1) / 2})`;
        ctx.lineWidth = 1;
        ctx.stroke();
        hex.opacity = Math.max(0, Math.min(0.2, hex.opacity + Math.sin(time * hex.speed) * 0.001));
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate(0);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-black">
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,221,235,0.1)]" />
    </div>
  );
};

// Enhanced Service Card with Image Support and Animations
const ServiceCard = ({ title, description, icon: Icon, features, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-black p-6 rounded-2xl border border-gray-800 hover:border-[#00ddeb]/70 transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(0,221,235,0.3)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-[#00ddeb]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative w-full h-48 rounded-xl mb-6 overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={`${title} preview`}
            layout="fill"
            objectFit="cover"
            className="rounded-xl transition-transform duration-500 group-hover:scale-110"
            priority
          />
        ) : (
          <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
            <Icon className="w-24 h-24 text-[#00ddeb] group-hover:scale-110 transition-transform duration-300" />
          </div>
        )}
        <div className={`absolute inset-0 bg-black/40 flex items-center justify-center space-x-4 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <a 
            href="#contact" 
            className="bg-[#00ddeb]/30 hover:bg-[#00ddeb]/50 text-white p-3 rounded-full transition-colors duration-200"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div className="relative z-10">
        <h3 className="text-2xl font-black text-white mb-3 group-hover:text-[#00ddeb] transition-colors duration-300 drop-shadow-lg">
          {title}
        </h3>
        <p className="text-gray-300 text-sm font-bold leading-relaxed mb-4 drop-shadow-md">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {features.map((feature, index) => (
            <span 
              key={index}
              className="inline-flex items-center gap-1 px-3 py-1 bg-gray-900 text-gray-200 font-bold text-xs rounded-full border border-gray-700 hover:border-[#00ddeb]/70 transition-colors duration-200"
            >
              {feature}
            </span>
          ))}
        </div>
        <a 
          href="#contact" 
          className="inline-block px-6 py-2 bg-[#00ddeb]/30 text-white font-black rounded-full hover:bg-[#00ddeb]/50 transition-all duration-300 transform hover:scale-105"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

// Main Services Component with Enhanced Sections
export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Building high-performance, responsive websites with modern frameworks, optimized for speed and scalability.",
      icon: Globe,
      features: ["React", "Next.js", "SEO", "Performance"],
      image: "/images/bitcoin.jpg.jpeg"
    },
    {
      title: "Mobile App Development",
      description: "Crafting intuitive, secure, and cross-platform mobile apps for iOS and Android with seamless UX.",
      icon: Smartphone,
      features: ["React Native", "Cross-Platform", "Secure", "Fast"],
      image: "/images/mobile-app.jpg"
    },
    {
      title: "UI/UX Design",
      description: "Designing user-centric, visually stunning interfaces with a focus on engagement and accessibility.",
      icon: Brush,
      features: ["Figma", "Prototyping", "Responsive", "User-Centric"],
      image: "/images/ux.jpg"
    },
    {
      title: "Cloud Solutions",
      description: "Providing scalable, secure cloud infrastructure with serverless architectures for modern businesses.",
      icon: Database,
      features: ["AWS", "Serverless", "Secure", "Scalable"],
      image: "/images/cloud.jpg"
    }
  ];

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Hero Section (Unchanged) */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <AnimatedBackground />
        <div className="absolute inset-0 bg-black/30 z-5" />
        <div className="container mx-auto px-6 z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-black mb-6 text-white">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-bold mb-8 leading-relaxed max-w-3xl mx-auto">
              Transform your business with our cutting-edge solutions in web, mobile, design, and cloud technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#services" className="px-8 py-4 bg-[#00ddeb]/20 text-white font-black rounded-full hover:bg-[#00ddeb]/40 transition-all duration-300 transform hover:scale-105 shadow-[0_0_10px_rgba(0,221,235,0.3)]">
                Explore Services
              </a>
              <a href="#contact" className="px-8 py-4 border-2 border-[#00ddeb] text-white font-black rounded-full hover:bg-[#00ddeb]/20 transition-all duration-300 transform hover:scale-105">
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Grid with Animation */}
      <section id="services" className="py-20 bg-black relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black mb-12 text-white text-center drop-shadow-lg animate-fade-in">
            Our Expertise
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Why Choose Us Section with Interactive Cards */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-[#00ddeb]/10" />
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-12 text-white text-center drop-shadow-lg animate-fade-in">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Innovative Technology",
                description: "We leverage cutting-edge tools to deliver future-ready solutions.",
                icon: Zap
              },
              {
                title: "Client-Centric Approach",
                description: "Your vision drives our process, ensuring tailored results.",
                icon: Users
              },
              {
                title: "Proven Expertise",
                description: "Years of experience delivering high-quality, scalable projects.",
                icon: Layout
              }
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-gray-900 rounded-2xl border border-[#00ddeb]/30 hover:border-[#00ddeb]/70 transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(0,221,235,0.3)] animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <item.icon className="w-12 h-12 text-[#00ddeb] mb-4 mx-auto" />
                <h3 className="text-xl font-black text-white mb-2 text-center">{item.title}</h3>
                <p className="text-gray-200 text-sm text-center">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-[#00ddeb]/30 text-white font-black rounded-full hover:bg-[#00ddeb]/50 transition-all duration-300 transform hover:scale-105 shadow-[0_0_10px_rgba(0,221,235,0.3)] animate-pulse"
            >
              Start Your Journey
            </a>
          </div>
        </div>
      </section>

      {/* Enhanced Our Process Section with Timeline */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black mb-12 text-white text-center drop-shadow-lg animate-fade-in">
            Our Process
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#00ddeb]/30 hidden md:block"></div>
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We analyze your needs, define goals, and create a project roadmap."
              },
              {
                step: "02",
                title: "Development",
                description: "Our team builds robust solutions using agile methodologies."
              },
              {
                step: "03",
                title: "Delivery",
                description: "We deploy, test, and support your project for optimal success."
              }
            ].map((step, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center mb-12 animate-slide-up ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="md:w-1/2 p-6">
                  <div className="p-6 bg-gray-900 rounded-2xl border border-[#00ddeb]/30 hover:border-[#00ddeb]/70 transition-all duration-300">
                    <div className="text-3xl font-black text-[#00ddeb] mb-4">{step.step}</div>
                    <h3 className="text-xl font-black text-white mb-2">{step.title}</h3>
                    <p className="text-gray-200 text-sm">{step.description}</p>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}