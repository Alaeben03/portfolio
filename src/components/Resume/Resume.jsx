import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Resume.module.css';

const Resume = () => {
  const { t } = useTranslation();

  // Utilisation des données traduites pour la section Resume
  const resumeContent = t('resume', { returnObjects: true });

  return (
    <section id="resume" className={styles.resume}>
      <div className={styles.content}>
        <h2>{resumeContent.title}</h2>
        <div className={styles.download}>
          <a href={resumeContent.resumeLink} download className={styles.button}>
            {resumeContent.downloadButtonText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
