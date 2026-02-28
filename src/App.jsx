import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lenis from '@studio-freight/lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Milestones from './components/Milestones';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });

    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Elements */}
      <div className="grid-overlay" />
      <div className="noise-overlay" />
      <div className="vignette" />


      {/* Glow Blobs */}
      <div className="glow-blob top-0 left-[-10%] bg-indigo-600" />
      <div className="glow-blob bottom-0 right-[-10%] bg-purple-600" />

      <Navbar />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="portfolio">
          <Portfolio />
        </section>

        <section id="milestones">
          <Milestones />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <footer className="py-6 text-center text-gray-500 text-sm border-t border-white/5">
        &copy; {new Date().getFullYear()} Kavi. All rights reserved.
      </footer>
    </div>
  );
}

export default App;

