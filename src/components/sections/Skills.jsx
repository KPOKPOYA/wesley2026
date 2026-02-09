import { useState, useEffect } from 'react';
import { skills } from '../../data/skills';
import { translations, getInitialLang } from '../../data/i18n';
import { motion } from 'framer-motion';

export default function Skills() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const SkillBar = ({ skill, animated }) => (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-gray-700 flex items-center gap-2">
          <span className="text-2xl">{skill.icon}</span>
          {skill.name}
        </span>
        <span className="text-blue-600 font-bold">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <motion.div
          className="skill-bar bg-blue-600 h-3 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: animated ? `${skill.level}%` : 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
      </div>
    </div>
  );

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const [lang, setLang] = useState(getInitialLang());

  useEffect(() => {
    const handler = (e) => setLang(e.detail || localStorage.getItem('lang') || 'fr');
    window.addEventListener('app:lang', handler);
    return () => window.removeEventListener('app:lang', handler);
  }, []);

  return (
    <motion.section
      id="skills"
      className="section min-h-screen bg-gray-50"
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
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900"
          variants={fadeInUp}
        >
          {translations[lang].skills.title}
        </motion.h2>

        <motion.div
          className="w-20 h-1 bg-blue-600 mx-auto mb-16"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* Compétences techniques */}
        <motion.div className="grid md:grid-cols-2 gap-12 mb-16" variants={containerVariants}>
          {['frontend','backend','database','tools'].map((category, i) => (
            <motion.div
              key={i}
              className="card p-8"
              variants={fadeInUp}
            >
              <h3 className={`text-2xl font-bold mb-6 flex items-center gap-2 ${
                category === 'frontend' ? 'text-blue-600' :
                category === 'backend' ? 'text-green-600' :
                category === 'database' ? 'text-purple-600' :
                'text-orange-600'
              }`}>
                <span>
                  {category === 'frontend' ? '🎨' :
                   category === 'backend' ? '⚙️' :
                   category === 'database' ? '💾' : '🛠️'}
                </span>
                {category === 'frontend' ? 'Frontend' :
                 category === 'backend' ? 'Backend' :
                 category === 'database' ? 'Base de données' : 'Outils & Technologies'}
              </h3>
              {skills[category].map(skill => (
                <SkillBar key={skill.name} skill={skill} animated={animated} />
              ))}
            </motion.div>
          ))}
        </motion.div>

        {/* Soft skills */}
        <motion.div className="card p-8" variants={fadeInUp}>
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">{translations[lang].skills.softTitle}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {translations[lang].skills.softSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg text-center font-medium text-gray-700 hover:shadow-md transition-shadow"
                variants={fadeInUp}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
