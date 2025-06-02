
import React, { useState } from "react";
import Contact from "./Contact";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import '../App.css';
import { FaGithub as Github, FaLinkedin as Linkedin, FaTwitter as Twitter } from "react-icons/fa";
// ...existing code...
// Main Portfolio Component
const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section) => {
    setActiveSection(section);
  };

  const renderSection = () => {
    switch(activeSection) {
      case 'home':
        return <Home onNavigate={scrollToSection} />;
      case 'skills':
        return <Skills />;
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact/>;
      default:
        return <Home onNavigate={scrollToSection} />;
    }
  };

return (
    <div className=" w-full text-white min-h-screen">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-yellow-500/20">
            <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
                {/* Stylish M Logo */}
                <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent transform hover:scale-110 transition-all duration-300">
                    {/* <span className="sm:font-serif italic text-4xl text-amber-50">Mk</span> */}
                   <span className="text-3xl sm:text-4xl font-bold italic bg-gradient-to-r from-amber-100 via-amber-200 to-rose-400 bg-clip-text text-transparent animate-bounce-once font-[Pacifico]">
  Mk
</span>


                </div>

                {/* Hamburger for mobile */}
                <div className="md:hidden">
                    <button
                        onClick={() => setActiveSection(activeSection === 'menu' ? 'home' : 'menu')}
                        className="focus:outline-none"
                        aria-label="Open navigation menu"
                    >
                        <svg
                            className="w-7 h-7 text-yellow-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex space-x-8">
                    {['home', 'skills', 'experience', 'projects', 'about', 'contact'].map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollToSection(item)}
                            className={`capitalize transition-all duration-300 hover:text-yellow-400 ${
                                activeSection === item ? 'text-yellow-400 font-semibold' : 'text-white/80'
                            }`}
                        >
                            {item === 'experience' ? 'Experience' : item}
                        </button>
                    ))}
                </nav>
            </div>
            {/* Mobile Menu */}
            {activeSection === 'menu' && (
                <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-yellow-500/20 px-4 pb-4">
                    <nav className="flex flex-col space-y-2">
                        {['home', 'skills', 'experience', 'projects', 'about', 'contact'].map((item) => (
                            <button
                                key={item}
                                onClick={() => {
                                    scrollToSection(item);
                                    setActiveSection(item);
                                }}
                                className={`capitalize text-left py-2 px-2 rounded transition-all duration-300 hover:text-yellow-400 ${
                                    activeSection === item ? 'text-yellow-400 font-semibold' : 'text-white/80'
                                }`}
                            >
                                {item === 'experience' ? 'Experience' : item}
                            </button>
                        ))}
                    </nav>
                </div>
            )}
        </header>

        {/* Main Content */}
        <main className="pt-8 px-2 sm:px-6">{renderSection()}</main>
        {/* Footer */}
        <footer className="bg-black backdrop-blur-md py-8  mt-8">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex flex-col md:flex-row justify-center gap-4 items-center">
                    <div className="mb-4 md:mb-0 text-center md:text-left">
                        <p className="text-gray-400 text-sm">© 2025 Mayank Jain. All rights reserved.</p>
                    </div>

                    <div className="flex space-x-6 justify-center">
                        <a
                            href="https://github.com/mayankjain6377"
                            className="text-gray-400 hover:text-yellow-400 transform hover:scale-125 transition-all duration-300"
                            aria-label="GitHub"
                        >
                            <Github size={24} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/mayankjain6377/"
                            className="text-gray-400 hover:text-yellow-400 transform hover:scale-125 transition-all duration-300"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={24} />
                        </a>
                        <a
                            href="https://twitter.com/mayankjain6377"
                            className="text-gray-400 hover:text-yellow-400 transform hover:scale-125 transition-all duration-300"
                            aria-label="Twitter"
                        >
                            <Twitter size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
);
};

export default Portfolio;