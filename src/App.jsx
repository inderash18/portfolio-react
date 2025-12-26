import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Cursor from './components/Cursor';
import ThreeBackground from './components/ThreeBackground';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './styles/globals.css';

function App() {
  return (
    <div className="min-h-screen bg-black selection:bg-white selection:text-black">
      <Cursor />
      <div className="bg-noise-overlay"></div>

      <Suspense fallback={<div className="fixed inset-0 bg-black" />}>
        <ThreeBackground />
      </Suspense>

      <Navbar />

      <main className="relative z-10 w-full">
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
