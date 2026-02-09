import { useState, useEffect } from 'react';
import { projects, projectCategories } from '../../data/projects';
import ProjectCard from '../ProjectCard';
import { motion } from 'framer-motion';
import { translations, getInitialLang } from '../../data/i18n';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [lang, setLang] = useState(getInitialLang());

  useEffect(() => {
    const handler = (e) => setLang(e.detail || localStorage.getItem('lang') || 'fr');
    window.addEventListener('app:lang', handler);
    return () => window.removeEventListener('app:lang', handler);
  }, []);

  const filteredProjects = selectedCategory === 'Tous'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const displayedProjects = filteredProjects.slice(0, visibleProjects);

  // Variants Framer Motion
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <motion.section
      id="projects"
      className="section bg-white min-h-screen"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      animate={{
        background: [
          "linear-gradient(135deg, #e0f2fe, #fef3c7, #e9d5ff)",
          "linear-gradient(135deg, #bfdbfe, #fde68a, #c4b5fd)",
          "linear-gradient(135deg, #93c5fd, #fef9c3, #a78bfa)"
        ]
      }}
      transition={{ duration: 25, repeat: Infinity, repeatType: "loop" }}
    >
      <div className="container mx-auto px-4 py-20">
        {/* Titre */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900"
          variants={fadeInUp}
        >
          {translations[lang].projects.title}
        </motion.h2>

        <motion.div
          className="w-20 h-1 bg-blue-600 mx-auto mb-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
        />

        <motion.p
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
          variants={fadeInUp}
        >
          {translations[lang].projects.intro}
        </motion.p>

        {/* Filtres */}
        <motion.div className="flex flex-wrap justify-center gap-4 mb-12" variants={fadeInUp}>
          {projectCategories.map((category) => (
            <motion.button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setVisibleProjects(6);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Grille de projets */}
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12" variants={containerVariants}>
          {displayedProjects.map((project) => (
            <motion.div key={project.id} variants={fadeInUp}>
              <ProjectCard project={{...project, description: lang === 'en' && project.description_en ? project.description_en : project.description}} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bouton Voir plus */}
        {filteredProjects.length > visibleProjects && (
          <motion.div className="text-center" variants={fadeInUp}>
            <motion.button
              onClick={() => setVisibleProjects(prev => prev + 3)}
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Voir plus de projets
            </motion.button>
          </motion.div>
        )}

        {/* Message si aucun projet */}
        {filteredProjects.length === 0 && (
          <motion.div className="text-center py-12" variants={fadeInUp}>
            <p className="text-gray-500 text-lg">
              Aucun projet dans cette catégorie pour le moment.
            </p>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}
