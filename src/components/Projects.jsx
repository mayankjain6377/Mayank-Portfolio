import '../App.css';
// import project1 from '../assets/email-reply.webp';
import project1 from '../assets/email.avif';
import project2 from '../assets/research.jpg';
import project3 from '../assets/hotel1.jpg';
import project4 from '../assets/commerce.png';

// Projects Component
const Projects = () => {
  const projects = [
    {
      title: 'AI Email Reply Generator',
      description: 'Intelligent email response system using Google Gemini API to generate contextual replies. Built with Spring Boot backend and React frontend for Chrome Extension and webapp.',
      tech: ['Java', 'Spring Boot', 'Spring AI', 'Google Gemini', 'React','Docker'],
      image: project1,
      icon: '🤖'
    },
    {
      title: 'AI Research Assistant',
      description: 'Advanced research chrome extension that helps users find, analyze, and summarize academic papers and research materials using artificial intelligence. Integrates with Google Gemini for intelligent insights.',
      tech: ['Java', 'Spring Boot', 'Spring AI', 'Google Gemini', 'Chrome Extension'],
      image: project2,
      icon: '🔬'
    },
    {
      title: 'Hotel Management System',
      description: 'Comprehensive hotel management platform with booking system, room management, customer service, and analytics dashboard. Full-stack application with modern UI/UX.',
      tech: ['Java', 'Spring Boot', 'React', 'MySQL', 'Hibernate'],
      image: project3,
      icon: '🏨'
    },
    {
      title: 'E-Commerce Website',
      description: 'Full-featured online shopping platform with inventory management, user authentication, and admin dashboard. Built with Spring Boot and React for a seamless shopping experience.',
      tech: ['Java', 'Spring Boot', 'React', 'MySQL', 'Docker'],
      image: project4,
      icon: '🛒'
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-md rounded-2xl overflow-hidden transform  transition-all duration-500  border border-yellow-500/30 hover:border-yellow-400/60"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 text-3xl bg-gray-900/80 rounded-full p-2">
                  {project.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-yellow-400">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-yellow-600/30 text-yellow-300 rounded-full text-xs font-medium border border-yellow-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;