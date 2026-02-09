import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { translations, getInitialLang } from '../../data/i18n';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState(getInitialLang());
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    localStorage.setItem('lang', lang);
    // notify other components about language change
    window.dispatchEvent(new CustomEvent('app:lang', { detail: lang }));
  }, [lang]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const menuItems = translations[lang].menu;

  const headerVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const menuVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
  };

  return (
    <motion.header
      className="bg-white shadow-md sticky top-0 z-50"
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-blue-600">
            <Code2 size={32} />
            <span>Wesley</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                {item.label}
              </motion.button>
            ))}
            <div className="flex items-center gap-4 ml-4">
              <button
                onClick={() => setLang(prev => prev === 'fr' ? 'en' : 'fr')}
                className="px-3 py-1 rounded-full bg-gray-200 hover:bg-gray-300 text-sm"
              >
                {translations[lang].header.langToggle}
              </button>

              <button
                onClick={() => setTheme(prev => prev === 'dark' ? 'light' : 'dark')}
                className="px-3 py-1 rounded-full bg-gray-200 hover:bg-gray-300 text-sm"
              >
                {theme === 'dark' ? translations[lang].header.themeToggleLight : translations[lang].header.themeToggleDark}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden mt-4 pb-4 origin-top"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
            >
              {menuItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-lg mb-1"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {item.label}
                </motion.button>
              ))}
              <div className="flex gap-3 mt-3">
                <button
                  onClick={() => setLang(prev => prev === 'fr' ? 'en' : 'fr')}
                  className="px-3 py-2 rounded-full bg-gray-200 hover:bg-gray-300 text-sm"
                >
                  {translations[lang].header.langToggle}
                </button>
                <button
                  onClick={() => setTheme(prev => prev === 'dark' ? 'light' : 'dark')}
                  className="px-3 py-2 rounded-full bg-gray-200 hover:bg-gray-300 text-sm"
                >
                  {theme === 'dark' ? translations[lang].header.themeToggleLight : translations[lang].header.themeToggleDark}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
