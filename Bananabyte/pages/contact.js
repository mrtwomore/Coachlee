import Head from 'next/head';
import styles from '../styles/Contact.module.css';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import { contactFormSchema, validateInput, sanitizeObject } from '../utils/validation';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    userType: '',
    subject: 'Coaching Inquiry'
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: '',
    userType: '',
    subject: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const validateForm = () => {
    // Use our Zod validation utility
    const validationResult = validateInput(contactFormSchema, {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      subject: formData.subject || 'Coaching Inquiry'
    });

    if (!validationResult.success) {
      // Format errors for the form
      const errors = {
        name: validationResult.error?.name || '',
        email: validationResult.error?.email || '',
        message: validationResult.error?.message || '',
        subject: validationResult.error?.subject || '',
        userType: !formData.userType ? 'Please select your role' : ''
      };
      
      setFormErrors(errors);
      return false;
    }
    
    // Reset errors
    setFormErrors({ name: '', email: '', message: '', userType: '', subject: '' });
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    try {
      // Submit the form directly
      e.target.submit();
      
      // Clear the form and show success message
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '', userType: '', subject: 'Coaching Inquiry' });
      setFormErrors({ name: '', email: '', message: '', userType: '', subject: '' });
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
      setErrorMessage('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  }, [formErrors]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Contact | Coach Lee</title>
        <meta name="description" content="Get in touch to discuss athletic coaching, team training, and performance development services." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main} ${isVisible ? styles.visible : ''}`}>
        <Navigation />

        <section className={styles.hero}>
          <h1>Book Your Consultation</h1>
          <p className={styles.subtitle}>Take the First Step Toward Athletic Excellence</p>
        </section>

        <div className={styles.contactContainer}>
          <section className={styles.contactInfo}>
            <h2>Contact Information</h2>
            <div className={styles.infoItems}>
              <div className={styles.infoItem}>
                <h3>Email</h3>
                <p>leemou@pureathletic.co.nz</p>
              </div>
              <div className={styles.infoItem}>
                <h3>Location</h3>
                <p>Christchurch, New Zealand</p>
              </div>
              <div className={styles.infoItem}>
                <h3>Hours</h3>
                <p>Mon-Fri: 7am-7pm<br />Sat: 8am-2pm</p>
              </div>
              <div className={styles.infoItem}>
                <h3>Social</h3>
                <div className={styles.socialLinks}>
                  <a href="https://instagram.com/coach_lee" target="_blank" rel="noopener noreferrer">Instagram</a>
                  <a href="https://linkedin.com/in/coach-lee" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.contactForm} id="booking">
            <h2>Book a Consultation</h2>
            <p className={styles.formDescription}>Fill out the form below to inquire about coaching services or to book an initial consultation. I'll respond as soon as possible to discuss how we can help you achieve your athletic goals.</p>
            
            {submitStatus === 'success' && (
              <div className={styles.statusMessage + ' ' + styles.success} role="alert" aria-live="polite">
                Thank you for your interest in our coaching services! Your booking request has been received, and I'll contact you shortly to arrange your consultation.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className={styles.statusMessage + ' ' + styles.error} role="alert" aria-live="assertive">
                {errorMessage || 'Sorry, there was an error sending your message. Please try again.'}
              </div>
            )}

            <form 
              action="https://formsubmit.co/22051ed04192fb44c4f83cd8dded5de3" 
              method="POST"
              onSubmit={handleSubmit} 
              noValidate 
              aria-label="Contact form"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="http://localhost:3000/contact" />
              <input type="hidden" name="_subject" value="New Consultation Request" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_autoresponse" value="Thank you for your message. I will get back to you soon!" />
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder=" "
                    required
                    disabled={isSubmitting}
                    aria-required="true"
                    aria-invalid={formErrors.name ? "true" : "false"}
                    aria-describedby="name-error"
                    className={formErrors.name ? styles.error : ''}
                    autoComplete="name"
                  />
                  <label htmlFor="name">Your Name <span className={styles.requiredField}>*</span></label>
                  <span className={styles.focusIndicator}></span>
                  {formErrors.name && <span id="name-error" className={styles.fieldError} aria-live="polite">{formErrors.name}</span>}
                </div>

                <div className={styles.formGroup}>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder=" "
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    title="Please enter a valid email address"
                    disabled={isSubmitting}
                    aria-required="true"
                    aria-invalid={formErrors.email ? "true" : "false"}
                    aria-describedby="email-error"
                    className={formErrors.email ? styles.error : ''}
                    autoComplete="email"
                  />
                  <label htmlFor="email">Your Email <span className={styles.requiredField}>*</span></label>
                  <span className={styles.focusIndicator}></span>
                  {formErrors.email && <span id="email-error" className={styles.fieldError} aria-live="polite">{formErrors.email}</span>}
                </div>
              </div>

              <div className={styles.formGroup}>
                <select
                  id="userType"
                  name="userType"
                  value={formData.userType}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className={`${formData.userType ? styles.selected : ''} ${formErrors.userType ? styles.error : ''}`}
                  aria-required="true"
                  aria-invalid={formErrors.userType ? "true" : "false"}
                  aria-describedby="userType-error"
                  autoComplete="off"
                >
                  <option value="" disabled>Select your role</option>
                  <option value="athlete">Athlete</option>
                  <option value="coach">Coach</option>
                  <option value="team">Team</option>
                  <option value="parent">Parent</option>
                  <option value="other">Other</option>
                </select>
                <label htmlFor="userType" className={styles.selectLabel}>Your Role <span className={styles.requiredField}>*</span></label>
                <span className={styles.focusIndicator}></span>
                {formErrors.userType && <span id="userType-error" className={styles.fieldError} aria-live="polite">{formErrors.userType}</span>}
              </div>

              <div className={styles.formGroup}>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder=" "
                  required
                  rows="6"
                  disabled={isSubmitting}
                  aria-required="true"
                  aria-invalid={formErrors.message ? "true" : "false"}
                  aria-describedby="message-error"
                  className={formErrors.message ? styles.error : ''}
                  autoComplete="off"
                ></textarea>
                <label htmlFor="message">Your Message <span className={styles.requiredField}>*</span></label>
                <span className={styles.focusIndicator}></span>
                {formErrors.message && <span id="message-error" className={styles.fieldError} aria-live="polite">{formErrors.message}</span>}
              </div>

              <button 
                type="submit" 
                className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ''}`}
                disabled={isSubmitting}
                aria-live="polite"
              >
                <span>{isSubmitting ? 'Sending...' : 'Submit'}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </form>
          </section>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>© 2024 Coach Lee. All rights reserved.</p>
      </footer>
    </div>
  );
} 