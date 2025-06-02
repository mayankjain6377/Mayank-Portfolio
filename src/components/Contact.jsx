import '../App.css';
import { FiMail as Mail, FiPhone as Phone, FiMapPin as MapPin, FiLinkedin as Linkedin } from "react-icons/fi";
import '../App.css';
// ...existing code...
// Contact Component
const Contact = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 ml-6 sm:ml-64">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-center space-x-4 p-4 bg-gray-900/50 backdrop-blur-md rounded-lg transform hover:scale-105 transition-all duration-300 border border-yellow-500/30">
              <Mail className="text-yellow-400" size={24} />
              <div>
                <h3 className="font-semibold text-yellow-300">Email</h3>
                <p className="text-gray-300">mayankjain6377@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-4 bg-gray-900/50 backdrop-blur-md rounded-lg transform hover:scale-105 transition-all duration-300 border border-yellow-500/30">
              <Linkedin className="text-yellow-400" size={24} />
              <div>
                <h3 className="font-semibold text-yellow-300">Linkedin</h3>
                <p className="text-gray-300">mayankjain6377</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-4 bg-gray-900/50 backdrop-blur-md rounded-lg transform hover:scale-105 transition-all duration-300 border border-yellow-500/30">
              <Phone className="text-yellow-400" size={24} />
              <div>
                <h3 className="font-semibold text-yellow-300">Phone</h3>
                <p className="text-gray-300">+91 8107789760</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-4 bg-gray-900/50 backdrop-blur-md rounded-lg transform hover:scale-105 transition-all duration-300 border border-yellow-500/30">
              <MapPin className="text-yellow-400" size={24} />
              <div>
                <h3 className="font-semibold text-yellow-300">Location</h3>
                <p className="text-gray-300">Jaipur, Rajasthan, India</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-yellow-500/30">
            <div className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 bg-gray-800/50 border border-yellow-500/30 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors duration-300 text-white placeholder-gray-400"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-4 bg-gray-800/50 border border-yellow-500/30 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors duration-300 text-white placeholder-gray-400"
                />
              </div>
              <div>
                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="w-full p-4 bg-gray-800/50 border border-yellow-500/30 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors duration-300 text-white placeholder-gray-400"
                />
              </div>
              <button
                onClick={() => alert('Message sent! Thank you for reaching out.')}
                className="w-full bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700 p-4 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300 text-black"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;