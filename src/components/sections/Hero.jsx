// frontend/src/components/sections/Hero.jsx
import { ArrowDown, Download, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.section
      id="hero"
      className="min-h-screen flex items-center justify-center"
      animate={{
         background: [
          "linear-gradient(135deg, #e0f2fe, #fef3c7, #e9d5ff)",
          "linear-gradient(135deg, #bfdbfe, #fde68a, #c4b5fd)",
          "linear-gradient(135deg, #93c5fd, #fef9c3, #a78bfa)"
        ]
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        repeatType: "loop"
      }}
    >
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center">
          {/* Photo de profil */}
          <div className="mb-8 relative">
            <div className="w-40 h-40 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1">
              <div className="relative w-28 h-28 flex items-center justify-center group">
                {/* Anneau lumineux */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400 to-indigo-600 
                                opacity-60 blur-lg animate-pulse"></div>

                {/* Avatar */}
                <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 
                                flex items-center justify-center shadow-xl 
                                transition-all duration-500 
                                group-hover:scale-110 group-hover:rotate-3">
                  <span className="text-3xl font-semibold text-white tracking-wide">
                    KW
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white"></div>
          </div>

          {/* Titre et description */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Bonjour, je suis <span className="text-blue-600">kpokpoya wesley</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-600 mb-6">
            Développeur Full-Stack
          </p>

          <p className="text-lg text-gray-500 max-w-2xl mb-8">
            Passionné par la création d'applications web modernes, performantes et évolutives. 
            Spécialisé dans le développement Full-Stack avec React, NestJS et TypeScript.
          </p>

          {/* Boutons d'action */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <button
              onClick={scrollToProjects}
              className="btn-primary flex items-center gap-2"
            >
              Voir mes projets
              <ArrowDown size={20} />
            </button>
            
            <a
              href="/cv.pdf"
              download
              className="btn-secondary flex items-center gap-2"
            >
              <Download size={20} />
              Télécharger CV
            </a>
          </div>

          {/* Liens sociaux */}
          <div className="flex gap-4">
            <a
              href="hhttps://github.com/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/votre-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl w-full">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">6+</div>
              <div className="text-gray-600 mt-2">Projets réalisés</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">15+</div>
              <div className="text-gray-600 mt-2">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">100%</div>
              <div className="text-gray-600 mt-2">Dédié</div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
