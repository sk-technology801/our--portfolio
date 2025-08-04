"use client"
import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Code, Zap, Users, Globe, Database, Star, Mail, Phone, Brush, Smartphone, Layout } from 'lucide-react';

// Black Background with Glowing Hexagonal Grid
const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Hexagon grid parameters
    const hexSize = 50;
    const hexagons = [];
    const cols = Math.ceil(canvas.width / (hexSize * 1.5)) + 1;
    const rows = Math.ceil(canvas.height / (hexSize * Math.sqrt(3))) + 1;

    // Generate hexagons
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

    // Animation loop
    const animate = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw solid black base
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw hexagons
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

        // Update opacity
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

// Service Card with Black Theme and Cyan Accents
const ServiceCard = ({ title, description, icon: Icon, features }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-black p-6 rounded-xl border border-gray-800 hover:border-[#00ddeb]/50 transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(0,221,235,0.2)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-[#00ddeb]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative w-full h-48 bg-gray-900 rounded-lg mb-6 overflow-hidden flex items-center justify-center">
        <Icon className="w-24 h-24 text-[#00ddeb] group-hover:scale-110 transition-transform duration-300" />
      </div>
      <div className="relative z-10">
        <h3 className="text-xl font-black text-white mb-3 group-hover:text-[#00ddeb] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-300 text-sm font-bold leading-relaxed mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {features.map((feature, index) => (
            <span 
              key={index}
              className="inline-flex items-center gap-1 px-3 py-1 bg-gray-900 text-gray-300 font-bold text-xs rounded-full border border-gray-800 hover:border-[#00ddeb]/50 transition-colors duration-200"
            >
              {feature}
            </span>
          ))}
        </div>
        <a 
          href="#contact" 
          className="inline-block px-6 py-2 bg-[#00ddeb]/20 text-white font-black rounded-full hover:bg-[#00ddeb]/40 transition-all duration-300"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

// Testimonial Card with Black Theme and Cyan Accents
const TestimonialCard = ({ quote, author, role }) => {
  return (
    <div className="bg-black p-6 rounded-xl border border-gray-800 hover:border-[#00ddeb]/50 transition-all duration-300 shadow-[0_0_10px_rgba(0,221,235,0.1)]">
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-[#00ddeb] fill-[#00ddeb]" />
        ))}
      </div>
      <p className="text-gray-300 text-sm font-bold leading-relaxed mb-4">
        "{quote}"
      </p>
      <div>
        <p className="text-white font-black">{author}</p>
        <p className="text-gray-400 text-xs">{role}</p>
      </div>
    </div>
  );
};

// Main Services Component
export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Building high-performance websites with modern frameworks and seamless functionality.",
      icon: Globe,
      features: ["React", "Node.js", "Scalable", "SEO"]
    },
    {
      title: "Mobile App Development",
      description: "Creating fast and secure mobile apps for iOS and Android with intuitive interfaces.",
      icon: Smartphone,
      features: ["React Native", "Cross-Platform", "Secure", "Fast"]
    },
    {
      title: "UI/UX Design",
      description: "Crafting engaging and user-centric designs to elevate your brand's experience.",
      icon: Brush,
      features: ["Prototyping", "Wireframes", "User-Centric", "Responsive"]
    },
    {
      title: "Cloud Solutions",
      description: "Delivering scalable and secure cloud infrastructure for efficient operations.",
      icon: Database,
      features: ["AWS", "Serverless", "Secure", "Scalable"]
    }
  ];

  const testimonials = [
    {
      quote: "Their web development service revolutionized our digital presence.",
      author: "Jane Doe",
      role: "CEO, TechCorp"
    },
    {
      quote: "The mobile app they built is incredibly fast and user-friendly.",
      author: "John Smith",
      role: "Founder, AppStudio"
    },
    {
      quote: "Their UI/UX design took our brand to the next level.",
      author: "Emily Johnson",
      role: "Creative Director, DesignX"
    }
  ];

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Hero Section */}
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

      {/* Services Grid */}
      <section id="services" className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black mb-12 text-white text-center">
            Our Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-white">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-300 font-bold mb-8 leading-relaxed">
              Our expertise and client-focused approach deliver innovative solutions tailored to your needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="p-4 bg-gray-900 rounded-xl border border-[#00ddeb]/30">
                <h3 className="text-xl font-black text-white mb-2">Innovative Technology</h3>
                <p className="text-gray-300 text-sm">We leverage the latest tools to build future-ready solutions.</p>
              </div>
              <div className="p-4 bg-gray-900 rounded-xl border border-[#00ddeb]/30">
                <h3 className="text-xl font-black text-white mb-2">Client-Centric</h3>
                <p className="text-gray-300 text-sm">Your vision drives our process, ensuring tailored results.</p>
              </div>
            </div>
            <a href="#contact" className="px-8 py-4 bg-[#00ddeb]/20 text-white font-black rounded-full hover:bg-[#00ddeb]/40 transition-all duration-300 transform hover:scale-105 shadow-[0_0_10px_rgba(0,221,235,0.3)]">
              Start Your Journey
            </a>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black mb-12 text-white text-center">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-900 rounded-xl text-center border border-[#00ddeb]/30">
              <div className="text-3xl font-black text-white mb-4">01</div>
              <h3 className="text-xl font-black text-white mb-2">Discovery</h3>
              <p className="text-gray-300 text-sm">We analyze your needs and define project goals.</p>
            </div>
            <div className="p-6 bg-gray-900 rounded-xl text-center border border-[#00ddeb]/30">
              <div className="text-3xl font-black text-white mb-4">02</div>
              <h3 className="text-xl font-black text-white mb-2">Development</h3>
              <p className="text-gray-300 text-sm">We build robust solutions with agile methodologies.</p>
            </div>
            <div className="p-6 bg-gray-900 rounded-xl text-center border border-[#00ddeb]/30">
              <div className="text-3xl font-black text-white mb-4">03</div>
              <h3 className="text-xl font-black text-white mb-2">Delivery</h3>
              <p className="text-gray-300 text-sm">We deploy and support your project for success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black mb-12 text-white text-center">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                {...testimonial}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-white">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-300 font-bold mb-8 leading-relaxed">
              Ready to transform your business? Contact us to discuss your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:contact@yourcompany.com" className="px-8 py-4 bg-[#00ddeb]/20 text-white font-black rounded-full hover:bg-[#00ddeb]/40 transition-all duration-300 transform hover:scale-105 shadow-[0_0_10px_rgba(0,221,235,0.3)] flex items-center gap-2">
                <Mail className="w-5 h-5" /> Email Us
              </a>
              <a href="tel:+1234567890" className="px-8 py-4 border-2 border-[#00ddeb] text-white font-black rounded-full hover:bg-[#00ddeb]/20 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                <Phone className="w-5 h-5" /> Call Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}