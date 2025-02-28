import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Contact.module.css';

const Contact = () => {
  const { t } = useTranslation();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert(t('contact.alertMessage'));
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.content}>
        <h2>{t('contact.title')}</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          {t('contact.formFields', { returnObjects: true }).map((field) => (
            <div key={field.id} className={styles.formGroup}>
              <label htmlFor={field.id}>{field.label}</label>
              {field.type === "textarea" ? (
                <textarea
                  id={field.id}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required={field.required}
                ></textarea>
              ) : (
                <input
                  type={field.type}
                  id={field.id}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required={field.required}
                />
              )}
            </div>
          ))}
          <button type="submit" className={styles.button}>
            {t('contact.submitButton')}
          </button>
        </form>
        
        <div className={styles.social}>
          <h3>{t('contact.socialTitle')}</h3>
          <p>{t('contact.socialText')}</p>
          <div className={styles.socialLinks}>
            {t('contact.socialLinks', { returnObjects: true }).map((link) => (
              <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
