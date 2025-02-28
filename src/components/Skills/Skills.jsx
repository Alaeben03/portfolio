import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Skills.module.css';

const Skills = () => {
  const { t } = useTranslation();

  // Définir les catégories de compétences traduites
  const skillsContent = t('skills', { returnObjects: true });

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.content}>
        <h2>{skillsContent.title}</h2>
        <div className={styles.grid}>
          {Object.entries(skillsContent.categories).map(([category, skillsList]) => (
            <div key={category} className={styles.category}>
              <h3>{category}</h3>
              <ul>
                {skillsList.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
