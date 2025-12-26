import React from 'react';
import FuturisticInterface from './components/FuturisticInterface';
import Cursor from './components/Cursor';
import ThreeBackground from './components/ThreeBackground';
import './styles/globals.css';

function App() {
  return (
    <div className="min-h-screen bg-black selection:bg-white selection:text-black overflow-hidden">
      <Cursor />
      <div className="bg-noise-overlay"></div>

      {/* Global 3D Background */}
      {/* <div className="fixed inset-0 z-0">
        <ThreeBackground />
      </div> */}

      {/* Main Interface */}
      <div className="relative z-10">
        <FuturisticInterface />
      </div>
    </div>
  );
}

export default App;
