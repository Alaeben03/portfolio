import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.css';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState(i18n.language);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
    setLanguage(newLang);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.name}>{t('navbar.name')}</div>
      <button className={styles.menuButton} onClick={toggleMenu}>
        ☰
      </button>

      {/* Language Button (Left) */}
      <button className={styles.languageSelect} onClick={toggleLanguage}>
        {language === 'en' ? 'FR' : 'EN'}
      </button>

      {/* Dark Mode Toggle Button (Right) */}
      <button className={styles.themeToggle} onClick={toggleTheme}>
        {theme === 'light' ? '🌙' : '☀️'}
      </button>

      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
        {t('navbar.navLinks', { returnObjects: true }).map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
              className={styles.navLink}
              activeClass={styles.active}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
