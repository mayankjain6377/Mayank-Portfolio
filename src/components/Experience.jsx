

import '../App.css';
// Experience Component
const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Celebal Technologies, Jaipur',
      period: '2025',
      description: 'Developed enterprise web applications using Java Spring Boot and React.js. Built RESTful APIs and integrated with PostgreSQL databases. Collaborated with cross-functional teams using Git and GitHub.'
    },
    {
      title: 'Java Developer',
      company: 'Groot Softwares, Jaipur',
      period: '2024',
      description: 'Worked on developing scalable backend services using Java Spring Boot. Implemented RESTful APIs and integrated with MySQL databases. Collaborated with frontend teams to deliver seamless user experiences.'
    },
    {
      title: 'Frontend Developer',
      company: 'Mission Minded Foundation, Jaipur',
      period: '2023',
      description: 'Created responsive web interfaces using HTML, CSS, JavaScript, and React. Optimized website performance and implemented modern design patterns. Worked with MySQL databases and version control systems.'
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 sm:ml-32">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
          Professional Experience
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-md rounded-2xl p-8 transform hover:scale-105 transition-all duration-500 hover:bg-gray-800/70 border border-yellow-500/30 hover:border-yellow-400/60"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-yellow-400 mb-2">{exp.title}</h3>
                  <h4 className="text-xl text-gray-300 mb-2">{exp.company}</h4>
                </div>
                <span className="text-amber-400 font-medium bg-amber-400/20 px-4 py-2 rounded-full">
                  {exp.period}
                </span>
              </div>
              <p className="text-gray-300 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Experience;