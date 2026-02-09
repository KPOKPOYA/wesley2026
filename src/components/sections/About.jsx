// frontend/src/components/sections/About.jsx
import { Code2, Database, Palette, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import { translations, getInitialLang } from '../../data/i18n';
import { useState, useEffect } from 'react';

export default function About() {
  const [lang, setLang] = useState(getInitialLang());

  useEffect(() => {
    const handler = (e) => setLang(e.detail || localStorage.getItem('lang') || 'fr');
    window.addEventListener('app:lang', handler);
    return () => window.removeEventListener('app:lang', handler);
  }, []);

  const highlightData = translations[lang].about.highlights;

  // Variants pour Framer Motion
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const iconPulse = {
    hidden: { scale: 1 },
    visible: { scale: [1, 1.2, 1], transition: { duration: 1.5, repeat: Infinity } }
  };

  return (
    <motion.section
      id="about"
      className="section min-h-screen flex items-center"
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
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          À propos de moi
        </motion.h2>

        <motion.div
          className="w-20 h-1 bg-blue-600 mx-auto mb-16"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />

        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Photo et description */}
          <motion.div variants={fadeInUp}>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 mb-6">
              <motion.div
                className="bg-white rounded-xl p-6 shadow-lg"
                variants={fadeInUp}
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{translations[lang].about.who}</h3>
                <p className="text-gray-600 mb-4">{translations[lang].about.p1}</p>
                <p className="text-gray-600 mb-4">{translations[lang].about.p2}</p>
                <p className="text-gray-600">{translations[lang].about.p3}</p>
              </motion.div>
            </div>

            {/* Informations personnelles */}
            <motion.div className="space-y-3" variants={fadeInUp}>
              <div className="flex items-center gap-3 text-gray-700">
                <span className="font-semibold">📍 Localisation:</span>
                <span>Porto-Novo, Bénin</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <span className="font-semibold">🎓 Formation:</span>
                <span>UATM-GASA</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <span className="font-semibold">💼 Disponibilité:</span>
                <span className="text-green-600">Ouvert aux opportunités</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Points forts avec pulsation des icônes */}
          <motion.div className="grid gap-6" variants={containerVariants}>
            {highlightData.map((item, index) => {
              const Icon = [Code2, Database, Palette, Rocket][index] || Code2;
              return (
                <motion.div
                  key={index}
                  className="flex gap-4 p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow"
                  variants={fadeInUp}
                >
                  <motion.div
                    className="flex-shrink-0"
                    variants={iconPulse}
                    initial="hidden"
                    animate="visible"
                  >
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Icon className="text-white" size={24} />
                    </div>
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
