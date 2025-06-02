import '../App.css';
// About Component
import myImage from '../assets/photo.jpg'; // Update with your image path
const About = () => {
  return (
   <>
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 sm:ml-32">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-16 bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="bg-gray-900/50 backdrop-blur-md rounded-2xl p-8 transform hover:scale-105 transition-all duration-500 border border-yellow-500/30">
          <div className="mb-8">
            <img
              src={myImage}
              alt="My Profile"
              className="w-48 h-48 rounded-full mx-auto mb-6 object-cover border-4 border-yellow-400 shadow-lg"
            />
          </div>
              
          
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I'm a dedicated Full Stack Web Developer with hands-on experience in Java, Spring Boot, React.js, and the MERN stack. With a strong foundation built through multiple internships and real-world projects, I specialize in building responsive, user-centric web applications.

I’ve worked on a variety of projects, including AI Email Reply Generator, e-commerce platforms, hotel management systems. I’m skilled in integrating Java backends with MySQL databases, deploying full-stack apps to AWS, and designing clean, scalable code architectures.
   </p> <p className="text-lg text-gray-300 leading-relaxed mb-8">
I’m passionate about learning and continuously improving, whether it’s exploring new frameworks, optimizing UI with MUI or Tailwind, or guiding others in their tech journey. </p>
          
          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">10+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400">2+</div>
              <div className="text-gray-400">Years of Practical Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300">∞</div>
              <div className="text-gray-400">Love for Coding & Growth</div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  
   
   </>

    
  );
};
export default About;