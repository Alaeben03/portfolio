import { useTranslation } from 'react-i18next';
import styles from './Hero.module.css';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.content}>
        <h1>{t('hero.title')}</h1>
        <p>{t('hero.description')}</p>
        <div className={styles.buttons}>
          {t('hero.buttons', { returnObjects: true }).map((button, index) => (
            <a key={index} href={button.link} className={styles.button}>
              {button.text}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
