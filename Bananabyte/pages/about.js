import Head from 'next/head';
import styles from '../styles/About.module.css';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '../components/Navigation';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>CV & Experience | Coach Lee</title>
        <meta name="description" content="Professional background, qualifications, and experience of Coach Lee, Strength and Conditioning Specialist." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main} ${isVisible ? styles.visible : ''}`}>
        <Navigation />

        <section className={styles.hero}>
          <div className={styles.profile}>
            <div className={styles.profileImage}>
              <Image
                src="/images/img-0297.jpg"
                alt="Coach Lee"
                width={240}
                height={240}
                className={styles.avatar}
                priority
                unoptimized
                quality={95}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              />
            </div>
            <h1>Coach Lee</h1>
            <p className={styles.subtitle}>Strength & Conditioning Coach</p>
            <div className={styles.credentials}>
              <span>CSCS</span>
              <span>MSc Kinesiology</span>
              <span>Former Professional Rugby Player</span>
            </div>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.bio}>
            <h2>Professional Summary</h2>
            <p>
              As a certified Strength and Conditioning Specialist with over 10 years of experience, 
              I specialize in developing elite athletes across multiple sports. My methodology 
              combines evidence-based training principles, sports-specific performance metrics, 
              and individualized programming to optimize athletic potential while minimizing 
              injury risk.
            </p>
            <p>
              With a background as a former professional rugby player, I bring practical experience 
              to theoretical knowledge. My approach emphasizes the integration of strength development, 
              movement mechanics, metabolic conditioning, and nutritional strategies to create 
              comprehensive performance enhancement programs. I'm dedicated to helping athletes 
              at all levels achieve their performance goals and extend their competitive careers.
            </p>
          </div>

          <div className={styles.education}>
            <h2>Education & Certifications</h2>
            <div className={styles.educationList}>
              <div className={styles.educationItem}>
                <h3>Master of Science, Kinesiology</h3>
                <p className={styles.institution}>Auckland University of Technology</p>
                <p className={styles.date}>2015-2017</p>
                <p>Specialization in Strength & Conditioning and Performance Enhancement</p>
              </div>
              <div className={styles.educationItem}>
                <h3>Bachelor of Science, Exercise Science</h3>
                <p className={styles.institution}>University of Otago</p>
                <p className={styles.date}>2010-2014</p>
                <p>Focus on Biomechanics and Sports Physiology</p>
              </div>
            </div>
            
            <div className={styles.certifications}>
              <h3>Professional Certifications</h3>
              <div className={styles.certificationGrid}>
                <div className={styles.certificationItem}>
                  <span className={styles.certName}>CSCS</span>
                  <p>Certified Strength & Conditioning Specialist</p>
                  <p className={styles.certOrg}>NSCA</p>
                </div>
                <div className={styles.certificationItem}>
                  <span className={styles.certName}>USAW</span>
                  <p>USA Weightlifting Sports Performance Coach</p>
                  <p className={styles.certOrg}>USA Weightlifting</p>
                </div>
                <div className={styles.certificationItem}>
                  <span className={styles.certName}>FMS</span>
                  <p>Functional Movement Specialist - Level 2</p>
                  <p className={styles.certOrg}>Functional Movement Systems</p>
                </div>
                <div className={styles.certificationItem}>
                  <span className={styles.certName}>CISSN</span>
                  <p>Certified International Sports Sciences Nutritionist</p>
                  <p className={styles.certOrg}>International Society of Sports Nutrition</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.experience}>
            <h2>Professional Experience</h2>
            <div className={styles.timelineStrip}>
              <div className={styles.timelineItem}>
                <span className={styles.year}>2020-Present</span>
                <h3>Head Strength & Conditioning Coach</h3>
                <p className={styles.organization}>Canterbury Rugby Union</p>
                <ul>
                  <li>Lead the design and implementation of training programs for elite rugby team</li>
                  <li>Coordinate with sports medicine staff on injury prevention protocols</li>
                  <li>Monitor and analyze performance metrics for program optimization</li>
                </ul>
              </div>
              <div className={styles.timelineItem}>
                <span className={styles.year}>2017-2020</span>
                <h3>Performance Coach</h3>
                <p className={styles.organization}>High Performance Sport New Zealand</p>
                <ul>
                  <li>Provided strength and conditioning support for Olympic athletes</li>
                  <li>Collaborated with multidisciplinary teams on athlete development</li>
                  <li>Conducted research on recovery optimization techniques</li>
                </ul>
              </div>
              <div className={styles.timelineItem}>
                <span className={styles.year}>2014-2017</span>
                <h3>Assistant Strength Coach</h3>
                <p className={styles.organization}>University of Auckland Athletics</p>
                <ul>
                  <li>Assisted in the development and implementation of training programs</li>
                  <li>Specialized in speed and power development for track athletes</li>
                  <li>Conducted performance testing and movement assessments</li>
                </ul>
              </div>
              <div className={styles.timelineItem}>
                <span className={styles.year}>2010-2014</span>
                <h3>Professional Rugby Player</h3>
                <p className={styles.organization}>Highlanders Rugby</p>
                <ul>
                  <li>Competed at the professional level in Super Rugby</li>
                  <li>Developed firsthand understanding of elite athletic development</li>
                  <li>Specialized in explosive power and speed training techniques</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.specializations}>
            <h2>Areas of Specialization</h2>
            <div className={styles.skillGrid}>
              <div className={styles.skillCard}>
                <h3>Performance Enhancement</h3>
                <div className={styles.skillList}>
                  <div className={styles.skillItem}>
                    <span>Strength Development</span>
                    <p>Progressive overload programming for maximal and relative strength gains</p>
                  </div>
                  <div className={styles.skillItem}>
                    <span>Power & Speed</span>
                    <p>Explosive athleticism training for maximum velocity and force production</p>
                  </div>
                  <div className={styles.skillItem}>
                    <span>Metabolic Conditioning</span>
                    <p>Sport-specific energy system development and work capacity enhancement</p>
                  </div>
                </div>
              </div>
              <div className={styles.skillCard}>
                <h3>Athlete Development</h3>
                <div className={styles.skillList}>
                  <div className={styles.skillItem}>
                    <span>Biomechanical Analysis</span>
                    <p>Movement pattern assessment and optimization for performance and injury prevention</p>
                  </div>
                  <div className={styles.skillItem}>
                    <span>Recovery Protocols</span>
                    <p>Advanced recovery strategies for optimal adaptation and performance longevity</p>
                  </div>
                  <div className={styles.skillItem}>
                    <span>Periodization</span>
                    <p>Strategic planning of training cycles for peak performance at critical times</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.cta}>
            <h2>Ready to Elevate Your Athletic Performance?</h2>
            <p>Book a consultation to discuss how a customized strength and conditioning program can help you reach your athletic potential.</p>
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