import Head from 'next/head';
import styles from '../styles/Services.module.css';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const programs = [
    {
      title: "Elite Athlete Development",
      description: "Comprehensive strength and conditioning programs designed for competitive athletes seeking to maximize performance in their specific sport.",
      features: [
        "Sport-Specific Performance Assessment",
        "Customized Training Programming",
        "Movement Pattern Optimization",
        "Power & Speed Development",
        "Competition Peaking Protocols"
      ]
    },
    {
      title: "Team Performance Systems",
      description: "Complete performance solutions for sports teams at all levels, designed to enhance collective strength, speed, resilience, and competitive advantage.",
      features: [
        "Team-Wide Testing & Assessment",
        "Position-Specific Training Protocols",
        "Injury Prevention Programs",
        "In-Season Maintenance Programs",
        "Performance Monitoring Systems"
      ]
    },
    {
      title: "Youth Athletic Development",
      description: "Age-appropriate training programs designed to build foundational movement skills, strength, and athletic capacity in developing athletes.",
      features: [
        "Long-Term Athletic Development Framework",
        "Fundamental Movement Skill Training",
        "Growth-Sensitive Programming",
        "Sport Sampling & Physical Literacy",
        "Injury Prevention Fundamentals"
      ]
    },
    {
      title: "Injury Rehabilitation & Prevention",
      description: "Specialized programs for athletes recovering from injury or seeking to build resilience against common sports-related injuries.",
      features: [
        "Return-to-Play Protocols",
        "Movement Pattern Correction",
        "Joint Stability Training",
        "Sport-Specific Injury Prevention",
        "Progressive Loading Strategies"
      ]
    },
    {
      title: "Performance Nutrition",
      description: "Strategic nutritional guidance to optimize training adaptations, enhance recovery, and fuel performance for both training and competition.",
      features: [
        "Body Composition Optimization",
        "Competition Nutrition Planning",
        "Recovery Nutrition Protocols",
        "Supplement Evaluation",
        "Hydration Strategies"
      ]
    },
    {
      title: "Remote Coaching",
      description: "Distance-based strength and conditioning programs for athletes who cannot access in-person coaching but need professional programming.",
      features: [
        "Customized Program Design",
        "Video Analysis & Technique Feedback",
        "Regular Program Adjustments",
        "Performance Tracking Tools",
        "Online Consultation Sessions"
      ]
    }
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Programs & Services | Coach Lee</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="description" content="Professional strength and conditioning programs for athletes of all levels. Specialized training protocols designed to enhance performance, prevent injuries, and extend athletic careers." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main} ${isVisible ? styles.visible : ''}`}>
        <Navigation />

        <section className={styles.hero}>
          <div className={styles.videoBackground}>
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className={styles.backgroundVideo}
            >
              <source src="/videos/web%20vid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className={styles.overlay}></div>
          </div>
          <div className={styles.heroContent}>
            <h1>Programs & Services</h1>
            <p className={styles.subtitle}>Science-Based Strength & Conditioning for Athletic Excellence</p>
          </div>
        </section>

        <section className={styles.servicesGrid}>
          {programs.map((program, index) => (
            <div key={index} className={styles.serviceCard}>
              <h2>{program.title}</h2>
              <p className={styles.description}>{program.description}</p>
              <ul className={styles.features}>
                {program.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
              <Link href="/contact#booking" className={styles.programButton}>
                Book Consultation
              </Link>
            </div>
          ))}
        </section>

        <section className={styles.processSection}>
          <h2>The Athlete Development Process</h2>
          <div className={styles.processSteps}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>1</div>
              <h3>Assessment</h3>
              <p>Comprehensive evaluation of movement patterns, strength baselines, mobility limitations, and sport-specific performance metrics to identify both strengths and areas for improvement.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>2</div>
              <h3>Program Design</h3>
              <p>Creation of a customized training program based on assessment findings, performance goals, training history, and the specific demands of your sport.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>3</div>
              <h3>Implementation</h3>
              <p>Guided execution of the program with coaching on proper technique, loading parameters, and training intensity to ensure optimal adaptation and progress.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>4</div>
              <h3>Monitoring</h3>
              <p>Ongoing tracking of performance metrics, recovery markers, and training response to make data-informed adjustments that optimize development.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>5</div>
              <h3>Progression</h3>
              <p>Strategic advancement of training parameters and exercise selection to continually challenge the body and drive ongoing adaptation and performance gains.</p>
            </div>
          </div>
          <div className={styles.processDescription}>
            <p>Our systematic approach ensures each athlete receives a personalized development path that evolves based on individual response and progression needs. This methodical process has successfully developed athletes across multiple sports at various competitive levels.</p>
          </div>
        </section>

        <section className={styles.faq}>
          <h2>Frequently Asked Questions</h2>
          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h3>How are your programs different from generic training plans?</h3>
              <p>All programs are custom-designed based on individual assessment data, training history, and sport-specific requirements. Unlike generic templates, my programs address your specific strengths, limitations, and performance goals with precise exercise selection, loading parameters, and progression timelines tailored to your unique needs.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>How long before I see results from your programs?</h3>
              <p>Initial adaptations in movement quality and neural efficiency typically appear within 2-3 weeks. Measurable strength improvements usually begin around 4-6 weeks, while significant sport performance enhancements generally require 8-12 weeks of consistent training. Your individual response will depend on training history, genetics, recovery quality, and program adherence.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>Do you work with athletes from any sport?</h3>
              <p>Yes! The fundamental principles of athletic development apply across sports, though the specific implementation varies based on sport demands. I have extensive experience working with athletes from team sports (rugby, football, basketball), individual sports (track and field, swimming), and combat sports. Each program is designed with sport-specific movement patterns and energy system requirements in mind.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>Can I combine your training with my existing team practices?</h3>
              <p>Absolutely. In fact, integration with sport practice is essential for optimal development. Your training program will be periodized around your practice and competition schedule to ensure you're fresh for technical work while still developing the physical qualities needed for your sport. Communication with sport coaches is encouraged to create a cohesive development plan.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>What equipment do I need to follow your programs?</h3>
              <p>Programs are designed based on available equipment. While a fully-equipped facility offers more programming options, effective programs can be created with minimal equipment. During the initial consultation, we'll discuss your access to equipment and design an appropriate program. For athletes training remotely, I provide alternatives for exercises based on equipment limitations.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>How do you monitor progress and update programs?</h3>
              <p>Progress is tracked through a combination of performance metrics (strength, power, speed, etc.), movement quality assessments, subjective feedback, and sport performance indicators. Programs are typically updated every 4-6 weeks based on this data, with minor adjustments made week-to-week as needed to account for individual response to training.</p>
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <h2>Ready to Elevate Your Athletic Performance?</h2>
          <p>Schedule a consultation to discuss your goals and how a customized training program can help you reach your full potential.</p>
          <Link href="/contact#booking">
            <button className={styles.ctaButton}>Book Your Assessment</button>
          </Link>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© 2024 Coach Lee. All rights reserved.</p>
      </footer>
    </div>
  );
} 