import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './About.module.css';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className={styles.about}>
      <div className={styles.content}>
        <h2>{t('about.title')}</h2>
        <div className={styles.grid}>
          <div className={styles.left}>
            <img src="/alae.png" alt="Alaeddine" className={styles.profileImage} />
          </div>
          <div className={styles.right}>
          <p className={styles.description}>{t('about.description')}</p>
            
            <h3>{t('about.sections.education.title')}</h3>
            <ul>
              {t('about.sections.education.items', { returnObjects: true }).map((edu, index) => (
                <li key={index}>
                  <strong>{edu.degree}</strong>
                  <br />
                  {edu.university}, {edu.year}
                </li>
              ))}
            </ul>

            <h3>{t('about.sections.interests.title')}</h3>
            <ul>
              {t('about.sections.interests.items', { returnObjects: true }).map((interest, index) => (
                <li key={index}>{interest}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
