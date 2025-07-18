import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FaGithub as Github, FaLinkedin as Linkedin, FaTwitter as Twitter } from "react-icons/fa";
import '../App.css';
import Home from "./Home";

const Portfolio = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigation = (path) => {
    navigate(`/${path}`);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="w-full text-white min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-yellow-500/20">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent transform hover:scale-110 transition-all duration-300">
            <span className="text-3xl sm:text-4xl italic font-[Pacifico]">Mk</span>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg
                className="w-7 h-7 text-yellow-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['home', 'skills', 'experience', 'projects', 'about', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => handleNavigation(item)}
                className="capitalize transition-all duration-300 hover:text-yellow-400 text-white/80"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/90 px-4 pb-4 z-50">
            <nav className="flex flex-col space-y-2">
              {['home', 'skills', 'experience', 'projects', 'about', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavigation(item)}
                  className="capitalize text-left py-2 px-2 rounded hover:text-yellow-400 text-white/80"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="pt-16 mr-16 sm:px-6">
        <Home />
      </main>

      {/* Footer */}
      <footer className="bg-black py-8 mt-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-center gap-4 items-center">
            <p className="text-gray-400 text-sm">© 2025 Mayank Jain. All rights reserved.</p>
            <div className="flex space-x-6 justify-center">
              <a href="https://github.com/mayankjain6377" className="hover:text-yellow-400"><Github size={24} /></a>
              <a href="https://www.linkedin.com/in/mayankjain6377/" className="hover:text-yellow-400"><Linkedin size={24} /></a>
              <a href="https://twitter.com/mayankjain6377" className="hover:text-yellow-400"><Twitter size={24} /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
