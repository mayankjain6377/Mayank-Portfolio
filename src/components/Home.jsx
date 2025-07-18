    import '../App.css';
    import React, { useState, useEffect } from 'react';
    import { Download } from 'lucide-react'; // <-- ADD THIS
import image from '../assets/Heroimage.jpg'; // <-- ADD THIS
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import About from './About';
import Contact from './Contact';
    // Home Component
    const Home = ({ onNavigate }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleDownloadResume = () => {
        window.open('https://drive.google.com/file/d/1eqie-FXSIJpAcfcjHxjdm_R7XEzHPLwU/view?usp=drive_link', '_blank');
    };

    return (
      <>
        <section className={`  flex items-center justify-center px-8 transform transition-all ml-2  duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} >
            <div className='flex '>
        <div className="text-center sm:w-5xl"><img src={image} alt="Mayank Jain" className="sm:float-right mt-16 animate-pulse rounded-3xl w-80 h-80 z-50 object-cover mb-8" />
            <div className="mb-8 sm:mt-16 transform  transition-all duration-500">
            <p className=" text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 bg-clip-text text-transparent animate-pulse">
            Mayank Jain
            </p>
            <p className="text-2xl md:text-3xl text-gray-300 mb-8 transform hover:text-yellow-300 transition-colors duration-300">
            Java Full Stack Developer
            </p>
          
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
            onClick={handleDownloadResume}
            className="flex items-center gap-2 bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700 px-8 py-4 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-yellow-500/25 text-black"
            >
            <Download size={20} />
            Download Resume
            </button>
            
            <button
            onClick={() => onNavigate('projects')}
            className="px-8 py-4 border-2 border-yellow-400/50 hover:border-yellow-400 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 hover:bg-yellow-400/10 text-yellow-300"
            >
            View My Work
            </button>
            </div>
            <p className='hidden lg:block py-8 text-amber-100 ml-8 font-mono italic'>~From <span className="bg-gray-800 font-extralight">Hello World</span> to real-world impact. <br /> my journey in Java continues....🚀🤖</p>
        </div>
        </div>
          </div>
        </section>

       

          <Skills />
          <Projects />
          <Experience />
          <About />
          <Contact />
         
        
      
      </>
        );
    };
    export default Home; // <-- EXPORT THIS COMPONENT



