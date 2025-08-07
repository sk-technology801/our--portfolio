"use client"
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Mail, Phone, MapPin, HelpCircle, ChevronDown } from 'lucide-react';

// Black Background with Glowing Starfield and Warp Streaks (unchanged)
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

    const stars = Array.from({ length: 100 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.3,
      speed: Math.random() * 0.5 + 0.2,
    }));

    const streaks = Array.from({ length: 3 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      length: Math.random() * 50 + 20,
      angle: Math.random() * Math.PI * 2,
      speed: Math.random() * 2 + 1,
      opacity: Math.random() * 0.3 + 0.2,
    }));

    const animate = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * (Math.sin(time * 0.001) + 1) / 2})`;
        ctx.fill();
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });

      streaks.forEach((streak) => {
        const x1 = streak.x;
        const y1 = streak.y;
        const x2 = streak.x + streak.length * Math.cos(streak.angle);
        const y2 = streak.y + streak.length * Math.sin(streak.angle);
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = `rgba(0, 221, 235, ${streak.opacity * (Math.sin(time * 0.002) + 1) / 2})`;
        ctx.lineWidth = 1;
        ctx.stroke();
        streak.x += streak.speed * Math.cos(streak.angle);
        streak.y += streak.speed * Math.sin(streak.angle);
        if (streak.x < 0 || streak.x > canvas.width || streak.y < 0 || streak.y > canvas.height) {
          streak.x = Math.random() * canvas.width;
          streak.y = Math.random() * canvas.height;
          streak.angle = Math.random() * Math.PI * 2;
        }
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

// Enhanced FAQ Card with Accordion and Image
const FAQCard = ({ question, answer, image }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-black p-6 rounded-2xl border border-gray-800 hover:border-[#00ddeb]/70 transition-all duration-300 shadow-[0_0_15px_rgba(0,221,235,0.2)] animate-slide-up">
      <button
        className="w-full flex items-center justify-between text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-black text-white animate-holographic">{question}</h3>
        <ChevronDown className={`w-6 h-6 text-[#00ddeb] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        {image && (
          <div className="mt-4 w-24 h-24 rounded-xl overflow-hidden">
            <Image
              src={image}
              alt={`${question} illustration`}
              width={96}
              height={96}
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        )}
        <p className="text-gray-200 text-sm font-bold leading-relaxed mt-4">{answer}</p>
      </div>
    </div>
  );
};

// Main Contact Component
export default function Contact() {
  const faqs = [
    {
      question: "How quickly can you start my project?",
      answer: "We typically begin within 1-2 weeks, depending on project scope and our current schedule. Contact us to discuss your timeline.",
    },
    {
      question: "What is your process for collaboration?",
      answer: "We start with a discovery phase to understand your needs, followed by iterative development and regular updates to ensure alignment.",
    },
    {
      question: "Do you offer ongoing support?",
      answer: "Yes, we provide maintenance and support packages to keep your project running smoothly after launch.",
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
            <h1 className="text-6xl md:text-8xl font-black mb-6 text-white animate-holographic">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-bold mb-8 leading-relaxed max-w-3xl mx-auto">
              Connect with us to turn your ideas into reality. We're ready to create something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="sardarsaadisaadi@gmail.com" className="px-8 py-4 bg-[#00ddeb]/20 text-white font-black rounded-full hover:bg-[#00ddeb]/40 transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(0,221,235,0.4)] animate-neon-flicker flex items-center gap-2">
                <Mail className="w-5 h-5" /> Email Us
              </a>
              <a href="03084931083" className="px-8 py-4 border-2 border-[#00ddeb] text-white font-black rounded-full hover:bg-[#00ddeb]/20 transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(0,221,235,0.4)] animate-neon-flicker flex items-center gap-2">
                <Phone className="w-5 h-5" /> Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Info Section with Form and Image */}
      <section id="contact" className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#00ddeb]/10 to-black" />
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-12 text-white text-center drop-shadow-lg animate-fade-in">
            Reach Out
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <p className="text-xl text-gray-200 font-bold mb-8 leading-relaxed text-center lg:text-left">
                Have questions or ready to start? Contact us via email, phone, or visit our office.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    value: "sardarsaadisaadi@gmail.com",
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    value: "03084931083",
                  },
                  {
                    icon: MapPin,
                    title: "Location",
                    value: "Faisalabad-Pakistan"
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-6 bg-gray-900 rounded-2xl border border-[#00ddeb]/30 hover:shadow-[0_0_20px_rgba(0,221,235,0.3)] transition-all duration-500 animate-slide-up"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <item.icon className="w-8 h-8 text-[#00ddeb] mx-auto mb-4" />
                    <h3 className="text-lg font-black text-white mb-2 text-center">{item.title}</h3>
                    {item.href ? (
                      <a href={item.href} className="text-gray-200 text-sm hover:text-[#00ddeb] transition-colors duration-200 block text-center">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-200 text-sm text-center">{item.value}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
            {/* Contact Form with Image */}
            <div className="bg-gray-900 rounded-2xl p-6 border border-[#00ddeb]/30 hover:shadow-[0_0_20px_rgba(0,221,235,0.3)] transition-all duration-500 animate-slide-up">
              <div className="w-full h-48 rounded-xl overflow-hidden mb-6">
               
              </div>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 bg-black border border-[#00ddeb]/30 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-[#00ddeb]/70 transition-all duration-300"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 bg-black border border-[#00ddeb]/30 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-[#00ddeb]/70 transition-all duration-300"
                />
                <textarea
                  placeholder="Your Message"
                  className="w-full p-3 bg-black border border-[#00ddeb]/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#00ddeb]/70 transition-all duration-300 h-32"
                ></textarea>
                <button
                  className="w-full px-8 py-3 bg-[#00ddeb]/30 text-white font-black rounded-full hover:bg-[#00ddeb]/50 transition-all duration-300 transform hover:scale-105 shadow-[0_0_10px_rgba(0,221,235,0.3)] animate-pulse"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section with Accordion */}
      <section id="faq" className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[#00ddeb]/5" />
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-12 text-white text-center drop-shadow-lg animate-fade-in">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <FAQCard key={index} {...faq} style={{ animationDelay: `${index * 0.2}s` }} />
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-[#00ddeb]/10" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-white drop-shadow-lg animate-fade-in">
              Ready to Start?
            </h2>
            <p className="text-xl text-gray-200 font-bold mb-8 leading-relaxed drop-shadow-md">
              Let's collaborate to create something extraordinary. Contact us now to get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="sardarsaadisaadi@gmail.com"
                className="px-8 py-4 bg-[#00ddeb]/30 text-white font-black rounded-full hover:bg-[#00ddeb]/50 transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(0,221,235,0.4)] animate-neon-flicker flex items-center gap-2"
              >
                <Mail className="w-5 h-5" /> Email Us
              </a>
              <a
                href="03084931083"
                className="px-8 py-4 border-2 border-[#00ddeb] text-white font-black rounded-full hover:bg-[#00ddeb]/20 transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(0,221,235,0.4)] animate-neon-flicker flex items-center gap-2"
              >
                <Phone className="w-5 h-5" /> Call Us
              </a>
            </div>
            <div className="mt-8 w-full max-w-md mx-auto h-64 rounded-xl overflow-hidden">
             
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}