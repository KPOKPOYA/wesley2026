import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/votre-username', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/votre-profile', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:votre.email@example.com', label: 'Email' }
  ];

  const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } };

  return (
    <motion.footer
      className="bg-gray-900 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* À propos */}
          <motion.div variants={fadeUp}>
            <h3 className="text-xl font-bold mb-4">Votre Nom</h3>
            <p className="text-gray-400">
              Développeur Full-Stack passionné par la création d'applications web modernes avec React et NestJS.
            </p>
          </motion.div>

          {/* Navigation rapide */}
          <motion.div variants={fadeUp}>
            <h3 className="text-xl font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">À propos</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors">Compétences</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projets</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </motion.div>

          {/* Réseaux sociaux */}
          <motion.div variants={fadeUp}>
            <h3 className="text-xl font-bold mb-4">Suivez-moi</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-full transition-colors"
                  aria-label={social.label}
                  whileHover={{ scale: 1.2, backgroundColor: '#2563eb' }} // bleu Tailwind
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"
          variants={fadeUp}
        >
          <p className="flex items-center justify-center gap-2">
            Fait avec <Heart size={16} className="text-red-500" /> par Votre Nom © {currentYear}
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
