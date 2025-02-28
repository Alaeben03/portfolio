import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Footer.module.css';

const Footer = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <button onClick={scrollToTop} className={styles.backToTop}>
          {t('footer.backToTop')}
        </button>
      </div>
    </footer>
  );
};

export default Footer;
