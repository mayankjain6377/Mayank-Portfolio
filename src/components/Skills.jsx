import '../App.css';
import { 
  FaJava, FaReact, FaHtml5, FaCss3Alt, 
  FaJs, FaGitAlt, FaGithub, FaDocker, FaAws
} from 'react-icons/fa';
import { 
  SiSpringboot, SiHibernate, SiMysql, SiPostgresql, SiKotlin, SiPython 
} from 'react-icons/si';

// Skills Component
const Skills = () => {
  const skills = [
    { 
      name: 'Java', 
      icon: FaJava, 
      color: 'from-orange-500 to-red-500',
      iconColor: 'text-orange-500 hover:text-orange-400'
    },
    { 
      name: 'Spring Boot', 
      icon: SiSpringboot, 
      color: 'from-green-500 to-emerald-500',
      iconColor: 'text-green-500 hover:text-green-400'
    },
    { 
      name: 'Kotlin', 
      icon: SiKotlin, 
      color: 'from-purple-500 to-indigo-500',
      iconColor: 'text-purple-500 hover:text-indigo-400'
    },
    { 
      name: 'Python', 
      icon: SiPython, 
      color: 'from-yellow-400 to-green-400',
      iconColor: 'text-yellow-400 hover:text-green-400'
    },
    { 
      name: 'React', 
      icon: FaReact, 
      color: 'from-blue-400 to-cyan-400',
      iconColor: 'text-blue-400 hover:text-cyan-400'
    },
    { 
      name: 'HTML', 
      icon: FaHtml5, 
      color: 'from-orange-500 to-red-500',
      iconColor: 'text-orange-600 hover:text-red-500'
    },
    { 
      name: 'CSS', 
      icon: FaCss3Alt, 
      color: 'from-blue-500 to-purple-500',
      iconColor: 'text-blue-500 hover:text-purple-500'
    },
    { 
      name: 'JavaScript', 
      icon: FaJs, 
      color: 'from-yellow-400 to-yellow-600',
      iconColor: 'text-yellow-500 hover:text-yellow-400'
    },
    { 
      name: 'Git', 
      icon: FaGitAlt, 
      color: 'from-red-500 to-pink-500',
      iconColor: 'text-red-500 hover:text-pink-500'
    },
    { 
      name: 'GitHub', 
      icon: FaGithub, 
      color: 'from-gray-600 to-gray-800',
      iconColor: 'text-gray-300 hover:text-white'
    },
    { 
      name: 'Docker', 
      icon: FaDocker, 
      color: 'from-blue-500 to-blue-700',
      iconColor: 'text-blue-400 hover:text-cyan-400'
    },
    { 
      name: 'AWS', 
      icon: FaAws, 
      color: 'from-orange-400 to-yellow-500',
      iconColor: 'text-orange-400 hover:text-yellow-400'
    },
    { 
      name: 'Hibernate', 
      icon: SiHibernate, 
      color: 'from-amber-600 to-yellow-600',
      iconColor: 'text-yellow-600 hover:text-amber-500'
    },
    { 
      name: 'MySQL', 
      icon: SiMysql, 
      color: 'from-blue-600 to-blue-800',
      iconColor: 'text-blue-600 hover:text-blue-400'
    },
    { 
      name: 'PostgreSQL', 
      icon: SiPostgresql, 
      color: 'from-blue-500 to-indigo-600',
      iconColor: 'text-blue-700 hover:text-indigo-500'
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 sm:ml-48">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.name}
                className="bg-gray-900/50 backdrop-blur-md rounded-2xl p-6 transform hover:scale-110 transition-all duration-500 hover:bg-gray-800/70 border border-yellow-500/30 hover:border-yellow-400/60 flex flex-col items-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-3 transform group-hover:rotate-12 transition-transform duration-300">
                  <IconComponent className={`text-4xl ${skill.iconColor} transition-colors duration-300`} />
                </div>
                <h3 className="text-center text-sm font-semibold text-yellow-300 group-hover:text-yellow-200 transition-colors duration-300">
                  {skill.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;