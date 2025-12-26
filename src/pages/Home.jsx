import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { personalInfo } from '../config/portfolio';

const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-16">
            <div className="section-container text-center">
                {/* Greeting */}
                <div className="mb-6 animate-fade-in">
                    <span className="text-primary text-lg font-semibold">Hello, I'm</span>
                </div>

                {/* Name */}
                <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
                    <span className="text-gradient">{personalInfo.name}</span>
                </h1>

                {/* Role */}
                <h2 className="text-2xl md:text-4xl text-gray-300 font-semibold mb-6">
                    {personalInfo.role}
                </h2>

                {/* Tagline */}
                <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                    {personalInfo.tagline}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a href="#projects" className="btn-primary flex items-center space-x-2">
                        <span>View Projects</span>
                        <ArrowRight size={20} />
                    </a>
                    <a href="#contact" className="btn-secondary flex items-center space-x-2">
                        <span>Contact Me</span>
                    </a>
                    <button className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition-all duration-300 flex items-center space-x-2">
                        <Download size={20} />
                        <span>Download CV</span>
                    </button>
                </div>

                {/* Scroll Indicator */}
                <div className="mt-20 animate-bounce">
                    <div className="w-6 h-10 border-2 border-gray-600 rounded-full mx-auto flex justify-center">
                        <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
