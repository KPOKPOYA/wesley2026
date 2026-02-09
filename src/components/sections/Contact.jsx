import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import axios from 'axios';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/contact`, formData);
      setStatus({ type: 'success', message: 'Merci ! Votre message a été envoyé avec succès.' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus({ type: 'error', message: 'Une erreur est survenue. Veuillez réessayer.' });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'votre.email@example.com', link: 'mailto:votre.email@example.com' },
    { icon: Phone, label: 'Téléphone', value: '+229 XX XX XX XX', link: 'tel:+229XXXXXXXX' },
    { icon: MapPin, label: 'Localisation', value: 'Porto-Novo, Bénin', link: null }
  ];

  const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } };
  const pulse = { hidden: { scale: 1 }, visible: { scale: [1, 1.2, 1], transition: { duration: 1.5, repeat: Infinity } } };

  return (
    <motion.section
      id="contact"
      className="section min-h-screen"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
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
          Contactez-moi
        </motion.h2>

        <motion.div className="w-20 h-1 bg-blue-600 mx-auto mb-8" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.6 }} />

        <motion.p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto" variants={fadeInUp}>
          Un projet en tête ? Une question ? N'hésitez pas à me contacter. Je serais ravi d'échanger avec vous !
        </motion.p>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Infos Contact */}
          <motion.div className="md:col-span-2 space-y-6" variants={fadeInUp}>
            <div className="card p-8 space-y-6">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Informations de contact</h3>
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const content = (
                  <div className="flex items-start gap-4">
                    <motion.div variants={pulse} className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="text-blue-600" size={24} />
                    </motion.div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">{info.label}</p>
                      <p className="text-gray-600">{info.value}</p>
                    </div>
                  </div>
                );
                return info.link ? (
                  <a key={index} href={info.link} className="block hover:bg-gray-50 p-2 -m-2 rounded-lg transition-colors">
                    {content}
                  </a>
                ) : <div key={index}>{content}</div>;
              })}
            </div>

            <div className="card p-6 bg-gradient-to-r from-blue-50 to-purple-50">
              <h4 className="font-bold text-lg text-gray-900 mb-3">💼 Disponibilité</h4>
              <p className="text-gray-700 mb-2">Je suis actuellement <strong className="text-green-600">disponible</strong> pour :</p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Projets freelance</li>
                <li>• Opportunités d'emploi</li>
                <li>• Collaborations</li>
                <li>• Consulting</li>
              </ul>
            </div>
          </motion.div>

          {/* Formulaire */}
          <motion.div className="md:col-span-3" variants={fadeInUp}>
            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Envoyez-moi un message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nom complet *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Sujet *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                    placeholder="Le sujet de votre message"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition resize-none"
                    placeholder="Votre message..."
                  />
                </div>

                {status.message && (
                  <motion.div
                    className={`p-4 rounded-lg ${
                      status.type === 'success'
                        ? 'bg-green-50 text-green-800 border border-green-200'
                        : 'bg-red-50 text-red-800 border border-red-200'
                    }`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {status.message}
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Envoyer le message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
