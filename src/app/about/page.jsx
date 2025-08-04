
"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Three.js Earth Model
const EarthModel = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(500, 500);
    mountRef.current.appendChild(renderer.domElement);

    // Earth
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const texture = new THREE.TextureLoader().load(
      'https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg'
    );
    const material = new THREE.MeshPhongMaterial({ map: texture });
    const earth = new THREE.Mesh(geometry, material);
    scene.add(earth);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    camera.position.z = 3;

    let mouseX = 0, mouseY = 0;
    const onMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);
      earth.rotation.y += 0.005;
      earth.rotation.x = mouseY * 0.5;
      earth.rotation.y += mouseX * 0.1;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" style={{ maxWidth: '100%', height: 'auto' }} />;
};

// About Page Component
export default function About() {
  return (
    <div className="text-white">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

        .bold-text {
          font-family: 'Bebas Neue', sans-serif;
          color: white;
        }
      `}</style>

      {/* First Section: Text (Left) and Earth Model (Right) */}
      <section className="min-h-screen flex items-center bg-black">
        <div className="container mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center">
          {/* Left Side: Text and Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 bg-black text-white p-8 md:p-12"
          >
            <h1 className="bold-text text-3xl md:text-5xl font-bold leading-tight mb-4">
              Power Meets <br />
              Precision in Every <br />
              Line of Code
            </h1>
            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-base md:text-lg mb-6"
            >
              Arafa Webs crafts tailored digital solutions that deliver real-world business results
            </motion.p>
            <div className="flex space-x-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                <Link
                  href="/get-started"
                  className="inline-block bg-white text-black px-6 py-3 rounded-md font-semibold"
                >
                  Get Started
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              >
                <Link
                  href="/explore"
                  className="inline-block bg-white text-black px-6 py-3 rounded-md font-semibold"
                >
                  Explore More
                </Link>
              </motion.div>
            </div>
          </motion.div>
          {/* Right Side: Three.js Earth Model */}
          <div className="lg:w-1/2 bg-black flex items-center justify-center p-8">
            <EarthModel />
          </div>
        </div>
      </section>

      {/* Second Section: About Us (Left) */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center">
          {/* Left Side: About Us Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 p-8 md:p-12"
          >
            <h2 className="bold-text text-2xl md:text-4xl font-bold mb-8">
              About us
            </h2>
            <p className="text-base md:text-lg max-w-3xl">
              Arafa Webs is a specialized web development company founded in 2020, focused on delivering high-quality, custom-built websites tailored to meet modern business needs. We started with a clear purpose: to simplify the web development process by offering focused, professional solutions — without the confusion of unrelated services. Our mission is simple — build websites that are fast, functional, and built to scale. From advanced web systems to e-commerce platforms and portfolio sites, we work with businesses across the globe to help them establish a strong digital presence. <span className="inline-block mx-2">|</span> At Arafa Webs, we don’t just create websites — we craft digital solutions that drive real results.
            </p>
          </motion.div>
          {/* Right Side: Placeholder */}
          <div className="lg:w-1/2 bg-black flex items-center justify-center p-8"></div>
        </div>
      </section>
    </div>
  );
}
