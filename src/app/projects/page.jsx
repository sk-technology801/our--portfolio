
"use client"
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image'; // Import Next.js Image component
import { ExternalLink, Github, Eye, Code, Zap, Users, Globe, Database, Star, Mail, Phone } from 'lucide-react';

// Animated Background Component (unchanged)
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

    const particles = Array.from({ length: 25 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 1,
      speedX: Math.random() * 0.3 - 0.15,
      speedY: Math.random() * 0.3 - 0.15,
      opacity: Math.random() * 0.3 + 0.1,
    }));

    const animate = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(0, 0, 0, 0.95)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity * (Math.sin(time * 0.001) + 1) / 2})`;
        ctx.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
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
      <div className="absolute inset-0 bg-gradient-radial from-black/90 to-black/100" />
      <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(255,255,255,0.05)]" />
    </div>
  );
};

// Updated Project Card with Image Support
const ProjectCard = ({ title, description, technologies, liveUrl, githubUrl, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getTechIcon = (tech) => {
    const icons = {
      'React': <Code className="w-4 h-4" />,
      'Node.js': <Database className="w-4 h-4" />,
      'E-commerce': <Globe className="w-4 h-4" />,
      'SaaS': <Zap className="w-4 h-4" />,
      'Community': <Users className="w-4 h-4" />,
      'Portfolio': <Eye className="w-4 h-4" />,
      'Payment': <Zap className="w-4 h-4" />,
      'Animation': <Code className="w-4 h-4" />,
      'Analytics': <Database className="w-4 h-4" />,
      'Dashboard': <Globe className="w-4 h-4" />,
      'Real-time': <Zap className="w-4 h-4" />,
      'Mobile': <Users className="w-4 h-4" />,
      'AI': <Code className="w-4 h-4" />,
      'SEO': <Globe className="w-4 h-4" />,
      'Automation': <Zap className="w-4 h-4" />,
      'React Native': <Code className="w-4 h-4" />,
      'Fintech': <Database className="w-4 h-4" />,
      'Security': <Zap className="w-4 h-4" />
    };
    return icons[tech] || <Code className="w-4 h-4" />;
  };

  return (
    <div 
      className="group relative bg-black p-6 rounded-2xl border border-gray-800 hover:border-gray-600 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-white/10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative w-full h-48 rounded-xl mb-6 overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={`${title} preview`}
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
            priority
          />
        ) : (
          <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
            <div className="text-white/60 text-6xl font-bold opacity-30">
              {title.split(' ').map(word => word[0]).join('')}
            </div>
          </div>
        )}
        <div className={`absolute inset-0 bg-black/50 flex items-center justify-center space-x-4 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full transition-colors duration-200">
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full transition-colors duration-200">
              <Github className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
      <div className="relative z-10">
        <h3 className="text-xl font-black text-white mb-3 group-hover:text-gray-300 transition-colors duration-300 drop-shadow-lg">
          {title}
        </h3>
        <p className="text-gray-400 font-bold text-sm leading-relaxed mb-4 drop-shadow-md">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="inline-flex items-center gap-1 px-3 py-1 bg-gray-800 text-gray-300 font-bold text-xs rounded-full border border-gray-700 hover:border-gray-500 transition-colors duration-200"
            >
              {getTechIcon(tech)}
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// Testimonial Card (unchanged)
const TestimonialCard = ({ quote, author, role }) => {
  return (
    <div className="bg-black p-6 rounded-2xl border border-gray-800 hover:border-gray-600 transition-all duration-300 shadow-lg shadow-white/5">
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-gray-300 fill-current" />
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

// Main Projects Component with Updated Projects Data
export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A fully responsive online store with secure payment integration, real-time inventory management, and advanced analytics dashboard for business insights.",
      technologies: ["React", "Node.js", "E-commerce", "Payment"],
      liveUrl: "#",
      githubUrl: "#",
      image: "/images/ecomerace.jpg.jpeg" // Example image path
    },
    {
      title: "Bitcoin",
      description: "It offers an alternative to traditional financial systems, especially in countries with unstable currencies.",
      technologies: ["React", "Three.js", "Portfolio", "Animation"],
      liveUrl: "#",
      githubUrl: "#",
      image: "/images/bitcoin.jpg.jpeg" // Example image path
    },
    {
      title: "Auto-Dealer",
      description: "An auto car dealer is a business that sells new or used vehicles to customers, often providing financing, trade-ins, and repair services.",
      technologies: ["React",, "Analytics", "Dashboard"],
      liveUrl: "#",
      githubUrl: "#",
      image: "/images/auto-dealer.jpg.jpeg" // Example image path
    },
    {
      title: "Bussiness-Insight",
      description: "Business insight refers to a deep understanding of a company's operations, market trends, customerbehavior, or performance data that helps in making informed strategic decisions.",
      technologies: ["React", "Community", "Real-time", "Mobile"],
      liveUrl: "#",
      githubUrl: "#",
      image: "/images/bussiness-insight.jpg.jpeg" // Example image path
    },
    {
      title: "Car-Hub",
      description: "Car Hub refers to a centralized platform or location where various automotive servicesS ",
      technologies: ["React", "AI", "SEO", "Automation"],
      liveUrl: "#",
      githubUrl: "#",
      image: "/images/car-hub.jpeg" // Example image path
    },
    {
      title: "Govt Agency",
      description: "A government agency is an official organization established by a government to carry out specific functions,such as enforcing laws, regulating industries, or providing public services.",
      technologies: ["React Native", "Fintech", "Security", "Mobile"],
      liveUrl: "#",
      githubUrl: "#",
      image: "/images/govt-agency.jpg.jpeg" // Example image path
    }
  ];

  const testimonials = [
    {
      quote: "Their innovative approach transformed our business with a seamless platform.",
      author: "Jane Doe",
      role: "CEO, TechCorp"
    },
    {
      quote: "The team delivered a stunning portfolio that exceeded our expectations.",
      author: "John Smith",
      role: "Creative Director, ArtStudio"
    },
    {
      quote: "Exceptional service and cutting-edge technology. Highly recommended!",
      author: "Emily Johnson",
      role: "Founder, StartUpX"
    }
  ];

  const filters = ['All', 'E-commerce', 'Portfolio', 'SaaS', 'Community', 'Mobile'];

  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(project => 
        project.technologies.some(tech => tech.toLowerCase().includes(selectedFilter.toLowerCase()))
      );

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <AnimatedBackground />
        <div className="absolute inset-0 bg-black/30 z-5" />
        <div className="container mx-auto px-6 z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-black mb-6 text-white drop-shadow-2xl">
              Our Projects
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-bold mb-8 leading-relaxed max-w-3xl mx-auto drop-shadow-lg">
              Discover innovative digital solutions that push boundaries and deliver exceptional user experiences. Each project represents our commitment to excellence and cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-gray-800 text-white font-black rounded-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-white/20">
                View All Projects
              </button>
              <button className="px-8 py-4 border-2 border-gray-600 text-white font-black rounded-full hover:bg-gray-600 hover:text-white transition-all duration-300 transform hover:scale-105">
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-6 py-3 rounded-full font-black transition-all duration-300 ${
                  selectedFilter === filter
                    ? 'bg-gray-800 text-white shadow-lg shadow-white/10'
                    : 'bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                {...project}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black mb-12 text-white drop-shadow-2xl text-center">
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
      <section className="py-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-white drop-shadow-2xl">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-300 font-bold mb-8 leading-relaxed">
              Have a project in mind? Reach out to us, and let's create something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="sardarsaadisaadi@gmail.com" className="px-8 py-4 bg-gray-800 text-white font-black rounded-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2">
                <Mail className="w-5 h-5" /> Email Us
              </a>
              <a href="03084931083" className="px-8 py-4 border-2 border-gray-600 text-white font-black rounded-full hover:bg-gray-600 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                <Phone className="w-5 h-5" /> Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-white drop-shadow-2xl">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-gray-300 font-bold mb-8 leading-relaxed drop-shadow-lg">
              Let's collaborate to bring your vision to life with cutting-edge technology and innovative design. Your next breakthrough project starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gray-800 text-white font-black rounded-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Start Your Project
              </button>
              <button className="px-8 py-4 border-2 border-gray-600 text-white font-black rounded-full hover:bg-gray-600 hover:text-white transition-all duration-300 transform hover:scale-105">
                View Our Process
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
