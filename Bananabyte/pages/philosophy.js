import Head from 'next/head';
import styles from '../styles/About.module.css';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '../components/Navigation';

export default function Philosophy() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Training Philosophy | Coach Lee</title>
        <meta name="description" content="Learn about the training philosophy and methodologies used by Coach Lee to develop elite athletic performance." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main} ${isVisible ? styles.visible : ''}`}>
        <Navigation />

        <section className={styles.hero}>
          <div className={styles.profile}>
            <h1>Training Philosophy</h1>
            <p className={styles.subtitle}>Foundation of Athletic Excellence</p>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.bio}>
            <h2>My Approach to Athletic Development</h2>
            <p>
              My training philosophy is built upon evidence-based practice, scientific principles, 
              and years of practical experience. I believe that exceptional athletic performance 
              stems from a holistic approach that considers not just physical capacity, but also 
              movement quality, recovery dynamics, and mental resilience.
            </p>
            <p>
              Every program I design is rooted in fundamental principles while being completely 
              individualized to the athlete's needs, sport demands, and performance goals. There 
              are no cookie-cutter programs – only systematic, progressive training tailored to 
              produce specific adaptations for each individual.
            </p>
          </div>

          <div className={styles.interestGrid}>
            <div className={styles.interestCard}>
              <h3>Assessment-Driven Programming</h3>
              <p>
                All effective training begins with thorough assessment. I utilize a comprehensive 
                battery of performance tests, movement screens, and sport-specific evaluations to 
                identify an athlete's strengths, limitations, and potential injury risks. This data 
                informs the design of programs that address specific needs rather than following 
                generic templates.
              </p>
            </div>
            <div className={styles.interestCard}>
              <h3>Performance Periodization</h3>
              <p>
                Athletic development requires strategic planning across training cycles. I implement 
                sophisticated periodization models to ensure athletes develop foundational qualities, 
                build sport-specific capacities, and peak at the right times. This systematic approach 
                prevents plateaus and optimizes adaptation while minimizing injury risk.
              </p>
            </div>
            <div className={styles.interestCard}>
              <h3>Integrated Recovery Systems</h3>
              <p>
                Recovery is not passive but an active component of performance enhancement. My programs 
                incorporate structured recovery protocols including sleep optimization, nutritional 
                timing, soft-tissue management, and stress reduction techniques. This integrated approach 
                ensures athletes can sustain intense training while adapting optimally.
              </p>
            </div>
          </div>

          <div className={styles.skillCard} style={{marginTop: '4rem', marginBottom: '4rem'}}>
            <h3>Core Training Principles</h3>
            <div className={styles.skillList}>
              <div className={styles.skillItem}>
                <span>Progressive Overload</span>
                <p>
                  Systematic increase in training demands to continually stimulate adaptation. 
                  This includes manipulation of volume, intensity, density, and complexity to 
                  ensure continued progress.
                </p>
              </div>
              <div className={styles.skillItem}>
                <span>Movement Quality First</span>
                <p>
                  Prioritizing technical proficiency and movement quality before increasing load 
                  or intensity. This approach builds resilient athletes with efficient movement 
                  patterns that transfer to sport performance.
                </p>
              </div>
              <div className={styles.skillItem}>
                <span>Specificity with Variety</span>
                <p>
                  Training must reflect the specific demands of the sport while incorporating 
                  enough variety to prevent overuse injuries and psychological staleness. 
                  This balance ensures transfer of training to performance.
                </p>
              </div>
              <div className={styles.skillItem}>
                <span>Individual Response Monitoring</span>
                <p>
                  Continuous tracking of performance metrics, wellness markers, and subjective 
                  feedback to adjust programs based on individual response rather than 
                  predetermined progressions.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.cta}>
            <h2>Experience Evidence-Based Training</h2>
            <p>Ready to experience a truly individualized approach to strength and conditioning? Book a consultation to learn how these principles can be applied to your specific athletic goals.</p>
            <Link href="/contact#booking" className={`${styles.ctaButton} button secondary`}>
              Schedule Consultation
            </Link>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© 2024 Coach Lee. All rights reserved.</p>
      </footer>
    </div>
  );
} 