"use client"
import React, { useEffect, useRef } from 'react';
import { Mail, Phone, Rocket, CheckCircle, Zap, Users } from 'lucide-react';

// Black Background with Pulsing Constellation Network
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

    // Constellation nodes
    const nodes = Array.from({ length: 20 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 3 + 2,
      opacity: Math.random() * 0.4 + 0.2,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
    }));

    // Connections between nodes
    const connections = [];
    nodes.forEach((node, i) => {
      for (let j = i + 1; j < nodes.length; j++) {
        if (Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y) < 150) {
          connections.push({ from: i, to: j });
        }
      }
    });

    // Animation loop
    const animate = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw solid black base
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      connections.forEach(({ from, to }) => {
        ctx.beginPath();
        ctx.moveTo(nodes[from].x, nodes[from].y);
        ctx.lineTo(nodes[to].x, nodes[to].y);
        ctx.strokeStyle = `rgba(0, 221, 235, ${0.2 * (Math.sin(time * 0.001) + 1) / 2})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Draw nodes
      nodes.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 221, 235, ${node.opacity * (Math.sin(time * 0.001) + 1) / 2})`;
        ctx.fill();

        // Update node position
        node.x += node.speedX;
        node.y += node.speedY;

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.speedX *= -1;
        if (node.y < 0 || node.y > canvas.height) node.speedY *= -1;
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
      <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,221,235,0.15)]" />
    </div>
  );
};

// Step Card Component
const StepCard = ({ number, title, description }) => {
  return (
    <div className="bg-black p-6 rounded-xl border border-gray-800 hover:border-[#00ddeb]/50 transition-all duration-300 shadow-[0_0_10px_rgba(0,221,235,0.2)]">
      <div className="text-3xl font-black text-[#00ddeb] mb-4">{number}</div>
      <h3 className="text-lg font-black text-white mb-2 animate-prismatic">{title}</h3>
      <p className="text-gray-300 text-sm font-bold leading-relaxed">{description}</p>
    </div>
  );
};

// Benefit Card Component
const BenefitCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-black p-6 rounded-xl border border-gray-800 hover:border-[#00ddeb]/50 transition-all duration-300 shadow-[0_0_10px_rgba(0,221,235,0.2)]">
      <Icon className="w-8 h-8 text-[#00ddeb] mb-4" />
      <h3 className="text-lg font-black text-white mb-2 animate-prismatic">{title}</h3>
      <p className="text-gray-300 text-sm font-bold leading-relaxed">{description}</p>
    </div>
  );
};

// Main Get Started Component
export default function GetStarted() {
  const steps = [
    {
      number: "01",
      title: "Connect",
      description: "Reach out via email or phone to discuss your project ideas and goals."
    },
    {
      number: "02",
      title: "Plan",
      description: "We collaborate to define your project scope, timeline, and requirements."
    },
    {
      number: "03",
      title: "Build",
      description: "Our team develops your solution with regular updates and feedback."
    }
  ];

  const benefits = [
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "We prioritize efficiency to launch your project on time."
    },
    {
      icon: CheckCircle,
      title: "High Quality",
      description: "Our solutions are built with precision and cutting-edge technology."
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "We provide ongoing support to ensure your success."
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
            <h1 className="text-6xl md:text-8xl font-black mb-6 text-white animate-prismatic">
              Get Started
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-bold mb-8 leading-relaxed max-w-3xl mx-auto">
              Launch your next big idea with us. Let's build something extraordinary together, step by step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="mailto:contact@yourcompany.com" className="px-8 py-4 bg-[#00ddeb]/20 text-white font-black rounded-full hover:bg-[#00ddeb]/40 transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(0,221,235,0.4)] flex items-center gap-2">
                <Mail className="w-5 h-5" /> Start Now
              </a>
              <a href="#steps" className="px-8 py-4 border-2 border-[#00ddeb] text-white font-black rounded-full hover:bg-[#00ddeb]/20 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                <Rocket className="w-5 h-5" /> Learn How
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Steps to Start Section */}
      <section id="steps" className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black mb-12 text-white text-center animate-prismatic">
            How to Get Started
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <StepCard
                key={index}
                {...step}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-white animate-prismatic">
              Why Work With Us
            </h2>
            <p className="text-xl text-gray-300 font-bold mb-8 leading-relaxed">
              Partner with us to unlock innovative solutions and unparalleled support for your project.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <BenefitCard
                  key={index}
                  {...benefit}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-white animate-prismatic">
              Ready to Begin?
            </h2>
            <p className="text-xl text-gray-300 font-bold mb-8 leading-relaxed">
              Contact us today to start your journey toward a groundbreaking project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:contact@yourcompany.com" className="px-8 py-4 bg-[#00ddeb]/20 text-white font-black rounded-full hover:bg-[#00ddeb]/40 transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(0,221,235,0.4)] flex items-center gap-2">
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