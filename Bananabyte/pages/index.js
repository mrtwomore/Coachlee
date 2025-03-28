
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navigation from '../components/Navigation';

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsVisible(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={styles.container}>
      <Head>
        <title>Coach Lee | Elite Strength & Conditioning for Athletes</title>
        <meta name="description" content="Elite strength and conditioning coaching from Coach Lee. Specialized programs for elite and aspiring athletes." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main} ${isVisible ? styles.visible : ''}`}>
        <Navigation />
        <section className={styles.hero}>
          <div className={styles.heroBackground}>
            <Image
              src="/static/images/lee-bg.jpg"
              alt="Elite strength and conditioning training"
              className={styles.heroImage}
              width={1920}
              height={1080}
              priority
              quality={90}
              unoptimized={true}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                opacity: 0.85
              }}
            />
          </div>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>Elite Performance Engineering</h1>
              <p className={styles.heroSubtitle}>
                Transforming athletes and teams with science-backed strength & conditioning programs that deliver measurable results.
              </p>
              <div className={styles.heroStats}>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>15+</div>
                  <div className={styles.statLabel}>Years Elite Experience</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>500+</div>
                  <div className={styles.statLabel}>Athletes Transformed</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>98%</div>
                  <div className={styles.statLabel}>Performance Improvement</div>
                </div>
              </div>
            </div>
            <div className={styles.heroImage}>
              {/* Add a professional image here */}
            </div>
          </div>
        </section>

        <section id="approach" className={styles.approachSection}>
          <div className={styles.approachHeader}>
            <h2 className={styles.approachTitle}>Elite Performance Methodology</h2>
            <p className={styles.approachSubtitle}>
              A systematic, science-based approach to athletic development that has produced 
              consistent results at the highest levels of sport.
            </p>
          </div>
          <div className={styles.approachGrid}>
            <div className={styles.approachCard}>
              <div className={styles.approachIcon}>📊</div>
              <h3>Data-Driven Methods</h3>
              <p>
                Utilizing cutting-edge sports science and biomechanical analysis to create 
                personalized training programs. Every movement is meticulously designed 
                and monitored for optimal results.
              </p>
            </div>
            
            <div className={styles.approachCard}>
              <div className={styles.approachIcon}>🎯</div>
              <h3>Elite Focus</h3>
              <p>
                Working exclusively with dedicated athletes and high-performance teams. 
                Our proven methodology has helped Olympians and professional athletes 
                achieve breakthrough results.
              </p>
            </div>
            
            <div className={styles.approachCard}>
              <div className={styles.approachIcon}>📈</div>
              <h3>Proven Results</h3>
              <p>
                Athletes consistently achieve 20-30% performance improvements within their 
                first training cycle through precise programming and constant optimization.
              </p>
            </div>
          </div>
        </section>

        <section id="specialties" className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Training Specialties</h2>
              <p className={styles.sectionSubtitle}>
                Comprehensive training solutions designed to elevate every aspect of athletic performance.
              </p>
            </div>
            <div className={styles.imageGrid}>
              <div className={styles.imageCard}>
                <Image
                  src="/static/images/lee-2.jpg"
                  alt="Strength training for athletes"
                  width={600}
                  height={800}
                  className={styles.cardImage}
                  unoptimized={true}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <div className={styles.cardOverlay}>
                  <h3>Strength Development</h3>
                  <p>Building foundational and sport-specific strength to enhance athletic performance.</p>
                </div>
              </div>
              <div className={styles.imageCard}>
                <Image
                  src="/static/images/lee-3.jpg"
                  alt="Speed and power training"
                  width={600}
                  height={800}
                  className={styles.cardImage}
                  unoptimized={true}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <div className={styles.cardOverlay}>
                  <h3>Speed & Power</h3>
                  <p>Explosive training protocols to improve acceleration, top-end speed, and power output.</p>
                </div>
              </div>
              <div className={styles.imageCard}>
                <Image
                  src="/static/images/lee-bg.jpg"
                  alt="Injury prevention and rehabilitation"
                  width={600}
                  height={800}
                  className={styles.cardImage}
                  unoptimized={true}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <div className={styles.cardOverlay}>
                  <h3>Injury Prevention</h3>
                  <p>Proactive protocols to reduce injury risk and extend your competitive career.</p>
                </div>
              </div>
              <div className={styles.imageCard}>
                <Image
                  src="/static/images/lee-5.jpg"
                  alt="Performance nutrition counseling"
                  width={600}
                  height={800}
                  className={styles.cardImage}
                  unoptimized={true}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <div className={styles.cardOverlay}>
                  <h3>Performance Nutrition</h3>
                  <p>Strategic nutritional guidance to fuel performance and enhance recovery.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Athlete Success Stories</h2>
              <p className={styles.sectionSubtitle}>
                Real results and transformations from athletes who have experienced our elite training programs.
              </p>
            </div>
            <div className={styles.testimonials}>
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialContent}>
                  <p>"Coach Lee's training program took my performance to the next level. My strength, speed, and recovery all improved dramatically within months."</p>
                  <div className={styles.testimonialAuthor}>
                    <span>Michael T.</span>
                    <span className={styles.sport}>Rugby Union Player</span>
                  </div>
                </div>
              </div>
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialContent}>
                  <p>"After struggling with recurring injuries, Coach Lee's approach not only helped me recover but built resilience I never had before. I'm performing better than ever."</p>
                  <div className={styles.testimonialAuthor}>
                    <span>Sarah K.</span>
                    <span className={styles.sport}>Track & Field Athlete</span>
                  </div>
                </div>
              </div>
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialContent}>
                  <p>"The personalized program and attention to detail made all the difference. Coach Lee truly understands how to develop athletes for long-term success."</p>
                  <div className={styles.testimonialAuthor}>
                    <span>David L.</span>
                    <span className={styles.sport}>Football Player</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.ctaContainer}>
              <Link href="/work" className={styles.ctaButton}>
                Explore Elite Athlete Stories
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerColumn}>
            <h4>Contact</h4>
            <p>Start your performance journey</p>
            <Link href="/contact" className={styles.footerLink}>coach@lee.co.nz</Link>
          </div>
          <div className={styles.footerColumn}>
            <h4>Location</h4>
            <p>Christchurch Central</p>
            <p>Canterbury, New Zealand</p>
          </div>
          <div className={styles.footerColumn}>
            <h4>Connect</h4>
            <a href="https://instagram.com/coachlee" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>Instagram</a>
            <a href="https://linkedin.com/in/coachlee" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>LinkedIn</a>
            <a href="https://twitter.com/coachlee" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>Twitter</a>
          </div>
          <div className={styles.footerColumn}>
            <h4>Programs</h4>
            <Link href="/services" className={styles.footerLink}>Elite Athlete Development</Link>
            <Link href="/services" className={styles.footerLink}>Team Performance</Link>
            <Link href="/services" className={styles.footerLink}>Youth Athletic Development</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}