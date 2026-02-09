import { GraduationCap, Briefcase, CheckCircle2 } from 'lucide-react';
import { education } from '../../data/education';
import { translations, getInitialLang } from '../../data/i18n';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Education() {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const pulse = {
    hidden: { scale: 1 },
    visible: { scale: [1, 1.2, 1], transition: { duration: 1.5, repeat: Infinity } }
  };

  return (
    <motion.section
      id="education"
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
        <motion.h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900" variants={fadeInUp}>
          Formation & Expérience
        </motion.h2>

        <motion.div className="w-20 h-1 bg-blue-600 mx-auto mb-16" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.6 }} />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Formation */}
          <motion.div variants={fadeInUp}>
            <div className="flex items-center gap-3 mb-8">
              <motion.div variants={pulse} className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="text-white" size={24} />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900">Formation</h3>
            </div>

            <div className="space-y-6">
              {education.map((item) => (
                <motion.div key={item.id} className="card p-6 hover:shadow-xl transition-shadow" variants={fadeInUp}>
                  <div className="flex items-start gap-4">
                    <motion.div variants={pulse} className="w-2 h-full bg-blue-600 rounded-full mt-1" />
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-blue-600 font-medium mb-1">{item.institution}</p>
                      <p className="text-sm text-gray-500 mb-3">{item.period}</p>
                      <p className="text-gray-600 mb-4">{item.description}</p>

                      {item.achievements && (
                        <ul className="space-y-2">
                          {item.achievements.map((achievement, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                              <CheckCircle2 className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Expérience */}
          <motion.div variants={fadeInUp}>
            <div className="flex items-center gap-3 mb-8">
              <motion.div variants={pulse} className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                <Briefcase className="text-white" size={24} />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900">Expérience</h3>
            </div>

            <div className="space-y-6">
                {/* use translated experience entries when available */}
                {(() => {
                  const lang = (typeof window !== 'undefined' && (localStorage.getItem('lang') || 'fr')) || 'fr';
                  const entries = translations[lang] && translations[lang].education && translations[lang].education.experience
                    ? translations[lang].education.experience
                    : [];

                  return entries.map((item, idx) => (
                    <motion.div key={idx} className="card p-6 hover:shadow-xl transition-shadow" variants={fadeInUp}>
                      <div className="flex items-start gap-4">
                        <motion.div variants={pulse} className="w-2 h-full bg-green-600 rounded-full mt-1" />
                        <div className="flex-1">
                          <h4 className="font-bold text-lg text-gray-900 mb-1">{item.title}</h4>
                          <p className="text-green-600 font-medium mb-1">{item.company}</p>
                          <p className="text-sm text-gray-500 mb-3">{item.period}</p>
                          <p className="text-gray-600 mb-4">{item.description}</p>

                          {item.responsibilities && (
                            <ul className="space-y-2">
                              {item.responsibilities.map((resp, index) => (
                                <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                                  <CheckCircle2 className="text-blue-500 flex-shrink-0 mt-0.5" size={16} />
                                  <span>{resp}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ));
                })()}
              </div>

            {/* Certifications */}
            <motion.div className="card p-6 mt-6 bg-gradient-to-r from-purple-50 to-pink-50" variants={fadeInUp}>
              <h4 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                🏆 Certifications & Récompenses
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  Formation Full-Stack React & NestJS - UATM-GASA
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  JavaScript avancé
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  TypeScript fondamentaux
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
