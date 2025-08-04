"use client"
import React, { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, HelpCircle } from 'lucide-react';

// Black Background with Glowing Starfield and Warp Streaks
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

    // Stars and streaks
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

    // Animation loop
    const animate = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw solid black base
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * (Math.sin(time * 0.001) + 1) / 2})`;
        ctx.fill();

        // Move stars (simulate depth)
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });

      // Draw warp streaks
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

        // Move streaks
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

// FAQ Card Component with Holographic Styling
const FAQCard = ({ question, answer }) => {
  return (
    <div className="bg-black p-6 rounded-xl border border-gray-800 hover:border-[#00ddeb]/50 transition-all duration-300 shadow-[0_0_10px_rgba(0,221,235,0.2)]">
      <h3 className="text-lg font-black text-white mb-2 animate-holographic">{question}</h3>
      <p className="text-gray-300 text-sm font-bold leading-relaxed">{answer}</p>
    </div>
  );
};

// Main Contact Component
export default function Contact() {
  const faqs = [
    {
      question: "How quickly can you start my project?",
      answer: "We typically begin within 1-2 weeks, depending on project scope and our current schedule. Contact us to discuss your timeline."
    },
    {
      question: "What is your process for collaboration?",
      answer: "We start with a discovery phase to understand your needs, followed by iterative development and regular updates to ensure alignment."
    },
    {
      question: "Do you offer ongoing support?",
      answer: "Yes, we provide maintenance and support packages to keep your project running smoothly after launch."
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
            <h1 className="text-6xl md:text-8xl font-black mb-6 text-white animate-holographic">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-bold mb-8 leading-relaxed max-w-3xl mx-auto">
              Connect with us to turn your ideas into reality. We're ready to create something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="mailto:contact@yourcompany.com" className="px-8 py-4 bg-[#00ddeb]/20 text-white font-black rounded-full hover:bg-[#00ddeb]/40 transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(0,221,235,0.4)] animate-neon-flicker flex items-center gap-2">
                <Mail className="w-5 h-5" /> Email Us
              </a>
              <a href="tel:+1234567890" className="px-8 py-4 border-2 border-[#00ddeb] text-white font-black rounded-full hover:bg-[#00ddeb]/20 transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(0,221,235,0.4)] animate-neon-flicker flex items-center gap-2">
                <Phone className="w-5 h-5" /> Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section id="contact" className="py-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-white animate-holographic">
              Reach Out
            </h2>
            <p className="text-xl text-gray-300 font-bold mb-8 leading-relaxed">
              Have questions or ready to start? Contact us via email, phone, or visit our office.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="p-6 bg-gray-900 rounded-xl border border-[#00ddeb]/30 hover:shadow-[0_0_15px_rgba(0,221,235,0.3)] transition-all duration-300">
                <Mail className="w-8 h-8 text-[#00ddeb] mx-auto mb-4" />
                <h3 className="text-lg font-black text-white mb-2">Email</h3>
                <a href="mailto:contact@yourcompany.com" className="text-gray-300 text-sm hover:text-[#00ddeb] transition-colors duration-200">
                  contact@yourcompany.com
                </a>
              </div>
              <div className="p-6 bg-gray-900 rounded-xl border border-[#00ddeb]/30 hover:shadow-[0_0_15px_rgba(0,221,235,0.3)] transition-all duration-300">
                <Phone className="w-8 h-8 text-[#00ddeb] mx-auto mb-4" />
                <h3 className="text-lg font-black text-white mb-2">Phone</h3>
                <a href="tel:+1234567890" className="text-gray-300 text-sm hover:text-[#00ddeb] transition-colors duration-200">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="p-6 bg-gray-900 rounded-xl border border-[#00ddeb]/30 hover:shadow-[0_0_15px_rgba(0,221,235,0.3)] transition-all duration-300">
                <MapPin className="w-8 h-8 text-[#00ddeb] mx-auto mb-4" />
                <h3 className="text-lg font-black text-white mb-2">Location</h3>
                <p className="text-gray-300 text-sm">123 Innovation St, Tech City, TX 12345</p>
              </div>
            </div>
            <a href="#faq" className="px-8 py-4 bg-[#00ddeb]/20 text-white font-black rounded-full hover:bg-[#00ddeb]/40 transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(0,221,235,0.4)] animate-neon-flicker">
              View FAQs
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black mb-12 text-white text-center animate-holographic">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <FAQCard
                key={index}
                {...faq}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-white animate-holographic">
              Ready to Start?
            </h2>
            <p className="text-xl text-gray-300 font-bold mb-8 leading-relaxed">
              Let's collaborate to create something extraordinary. Contact us now to get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:contact@yourcompany.com" className="px-8 py-4 bg-[#00ddeb]/20 text-white font-black rounded-full hover:bg-[#00ddeb]/40 transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(0,221,235,0.4)] animate-neon-flicker flex items-center gap-2">
                <Mail className="w-5 h-5" /> Email Us
              </a>
              <a href="tel:+1234567890" className="px-8 py-4 border-2 border-[#00ddeb] text-white font-black rounded-full hover:bg-[#00ddeb]/20 transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(0,221,235,0.4)] animate-neon-flicker flex items-center gap-2">
                <Phone className="w-5 h-5" /> Call Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}