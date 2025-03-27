import Head from 'next/head';
import styles from '../styles/Work.module.css';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import ProjectModal from '../components/ProjectModal';
import Navigation from '../components/Navigation';

export default function Work() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const athletes = [
    {
      title: "Rugby Performance Enhancement",
      description: "Comprehensive 12-week strength and conditioning program for a professional rugby player recovering from knee surgery, resulting in significant improvements in power output, sprint speed, and on-field performance.",
      category: "team-sports",
      results: ["23% increase in squat strength", "0.3 second improvement in 40m sprint", "Successful return to professional play", "Injury-free for full season following return"],
      image: "/images/Website images/Drone image.webp",
      demoLink: "#",
      fullDescription: "This case study follows the rehabilitation and performance enhancement of a professional rugby player following ACL reconstruction surgery. The athlete required a carefully structured return-to-play protocol that would not only rehabilitate the injured knee but build overall athletic capacity to prevent future injuries.\n\nThe 16-week program was divided into distinct phases:\n\n• Phase 1 (Weeks 1-4): Rehabilitation focus with controlled loading, movement pattern correction, and foundation building\n• Phase 2 (Weeks 5-8): Strength development with progressive loading and introduction of unilateral exercises\n• Phase 3 (Weeks 9-12): Power development with plyometrics, velocity-based training, and sport-specific movement patterns\n• Phase 4 (Weeks 13-16): Return-to-play with on-field conditioning, reactive agility, and game simulation drills\n\nThroughout the program, we used multiple assessment tools to track progress and make evidence-based adjustments to training parameters. Key metrics included force plate jump assessments, GPS tracking for speed and acceleration data, strength benchmarks, and subjective recovery scores.\n\nThe program resulted in significant improvements across all performance metrics:\n• 23% increase in squat strength relative to bodyweight\n• 18% improvement in force production during countermovement jumps\n• 0.3 second reduction in 40m sprint time\n• Successful return to professional competition with no re-injury during the following season\n\nMost importantly, the athlete reported feeling stronger and more resilient than before the injury, with enhanced movement quality and confidence during high-intensity play."
    },
    {
      title: "Elite Track Athlete Development",
      description: "Year-long periodized training program for a national-level 400m sprinter, incorporating advanced strength training, plyometrics, and energy system development resulting in a 1.2-second personal best improvement.",
      category: "individual-sports",
      results: ["Personal best improvement from 49.3s to 48.1s", "Qualification for national championships", "15% increase in power-to-weight ratio", "Enhanced lactate tolerance"],
      image: "/images/Website images/Baby_bottle_mobile_warmer.jpg",
      images: [
        "/images/Website images/Baby_bottle_mobile_warmer.jpg",
        "/images/Website images/20201029-DSC06312-scaled.jpg",
        "/images/Website images/Brand_asset_image.jpg",
        "/images/Website images/Lifestyle_photography_business_christchurch.jpg",
        "/images/Website images/Lifestyle_photography_business_christchurch_2.jpg",
        "/images/Website images/Lifestyle_photography_business_christchurch_4.jpg"
      ],
      fullDescription: "This case study documents the year-long development of a national-level 400m track athlete who had plateaued in performance for two consecutive seasons. The athlete approached me with the goal of qualifying for the national championships, which required a minimum 1.2-second improvement in performance.\n\nAfter comprehensive assessment, we identified several areas for improvement:\n• Relative strength deficits, particularly in posterior chain development\n• Suboptimal race pacing strategy resulting in excessive fatigue in the final 100m\n• Limited special endurance capacity\n• Nutritional practices that didn't adequately support training demands\n\nWe implemented a periodized annual training plan structured around key competition dates. The program included:\n\n• A strength development phase focusing on posterior chain development and force production capabilities\n• Technical refinement of sprint mechanics to improve efficiency and reduce energy expenditure\n• Targeted energy system development with precise work-to-rest ratios specific to 400m requirements\n• Specialized tempo sessions to build special endurance and lactate tolerance\n• Comprehensive nutritional strategies for training support, recovery optimization, and competition preparation\n\nTraining was meticulously tracked using a combination of GPS data, heart rate monitoring, and velocity-based training metrics for weight room work. This allowed for precise management of training loads and recovery periods.\n\nBy the end of the training year, the athlete achieved:\n• Personal best improvement from 49.3s to 48.1s (1.2s reduction)\n• Qualification for national championships\n• 15% increase in power-to-weight ratio\n• Significantly improved lactate tolerance and race distribution\n• Enhanced recovery capacity between training sessions\n\nThe athlete attributed the breakthrough not only to the physical training but also to the systematic approach to preparation, recovery protocols, and race strategy development."
    },
    {
      title: "Team Performance Transformation",
      description: "Complete overhaul of strength and conditioning protocols for a club rugby team, implementing position-specific training programs, team-wide monitoring systems, and integrated injury prevention strategies over a full competitive season.",
      category: "team-sports",
      results: ["63% reduction in non-contact injuries", "Team-wide 8% improvement in sprint speed", "Extended late-game performance", "Championship semi-final appearance"],
      image: "/images/Website images/Desktop_AI_Make_automation.png",
      demoLink: "#",
      fullDescription: "This case study details the transformation of a club rugby team's physical preparation program over a full competitive season. The team had struggled with inconsistent performance and a high injury rate in previous seasons, significantly impacting their competitive results.\n\nAfter initial assessment of the squad and analysis of previous injury data, we implemented a comprehensive overhaul of the team's strength and conditioning approach with these key components:\n\n• Implementation of position-specific training programs acknowledging the different physical demands across playing positions\n• Development of a team-wide monitoring system using subjective wellness metrics and basic performance tests to manage fatigue\n• Introduction of a standardized warm-up protocol based on FIFA 11+ principles but modified for rugby-specific demands\n• Periodized strength training program aligned with the competitive schedule to ensure peak physical condition during critical matches\n• Education sessions for players on recovery strategies, nutrition principles, and sleep optimization\n\nThe program required significant buy-in from coaching staff and players, with education being a critical component to ensure consistent implementation across the squad. We established clear communication channels between strength and conditioning staff, medical personnel, and technical coaches to coordinate training loads and manage player availability.\n\nResults over the season included:\n• 63% reduction in non-contact injuries compared to the previous season\n• Team-wide 8% improvement in sprint speed across standardized testing\n• Enhanced late-game performance with significantly improved scoreline in final quarters\n• Championship semi-final appearance (compared to group stage exit the previous season)\n• Player retention rate of 92% for the following season\n\nThe success of this program demonstrated the impact of a systematic, evidence-based approach to team physical preparation, with particular emphasis on injury reduction as a performance enhancement strategy."
    },
    {
      title: "Youth Athlete Long-Term Development",
      description: "Three-year development program for a talented 14-year-old multi-sport athlete, featuring age-appropriate training methodologies, fundamental movement skill development, and gradual progression toward sport specialization.",
      category: "youth",
      results: ["Mastery of fundamental movement patterns", "Injury-free development during growth phases", "Provincial selection in two sports", "Improved academic performance"],
      image: "/images/Website images/Corporate_showcase_startup_videography.JPG",
      demoLink: "#",
      fullDescription: "This case study follows the three-year development journey of a talented 14-year-old multi-sport athlete showing promise in both rugby and cricket. The parents approached me with concerns about growing pressure to specialize early while wanting to ensure their child's long-term athletic development and injury prevention.\n\nAfter comprehensive assessment of movement competency, growth status, training history, and sport-specific requirements, we designed a long-term development program built around these principles:\n\n• Emphasis on fundamental movement skill mastery before sport-specific training\n• Careful monitoring of training volume during growth spurts to reduce injury risk\n• Periodization strategies that allowed participation in both sports without overtraining\n• Progressive introduction of resistance training using appropriate scaling for maturation level\n• Regular communication with sport coaches to manage overall training load\n• Focus on creating a positive relationship with physical training and sport\n\nThe program evolved through these phases:\n• Year 1: Movement skill development, bodyweight mastery, coordination training\n• Year 2: Introduction of external loading, speed development, sport-specific conditioning\n• Year 3: More advanced strength training, power development, specialized skill transfer\n\nThroughout the program, we maintained regular assessments of maturation status, movement quality, and basic physical benchmarks appropriate for developmental age rather than chronological age.\n\nResults over the three years included:\n• Complete mastery of fundamental movement patterns with excellent technique\n• Injury-free development through multiple growth spurts\n• Provincial selection in both rugby and cricket\n• Improved confidence and body awareness\n• Enhanced academic performance attributed to better focus and energy management\n• Development of independent training habits and exercise literacy\n\nThis case demonstrates the importance of age-appropriate training methodologies that prioritize long-term development over early specialization, creating a foundation for athletic success while minimizing injury risk during critical growth periods."
    },
    {
      title: "Body Composition Transformation",
      description: "Six-month program for a recreational athlete looking to improve body composition while enhancing overall fitness, combining progressive resistance training, nutrition coaching, and lifestyle modifications.",
      category: "general-fitness",
      results: ["12% reduction in body fat", "8kg increase in lean muscle mass", "Doubled strength in major lifts", "Improved energy levels and sleep quality"],
      image: "/images/Website images/Corporate_website_stock_image_Startup_7.jpg",
      images: [
        "/images/Website images/Corporate_website_stock_image_Startup_7.jpg",
        "/images/Website images/Corporate_website_stock_image_Startup.jpg",
        "/images/Website images/Corporate_website_stock_image_Startup_8.jpg",
        "/images/Website images/Corporate_website_stock_image_Startup_2.jpg",
        "/images/Website images/Corporate_website_stock_image_Startup_6.jpg",
        "/images/Website images/Corporate_website_stock_image_Startup_4.jpg"
      ],
      fullDescription: "This case study documents a six-month transformation for a 35-year-old recreational athlete who wanted to improve body composition while enhancing overall athletic capability for recreational sports participation.\n\nInitial assessment revealed:\n• Body fat percentage of 28%\n• Limited strength in basic movement patterns\n• Poor nutritional habits centered around convenience foods\n• Inconsistent sleep patterns affecting recovery\n• High stress levels from professional responsibilities\n\nWe implemented a holistic program addressing all factors influencing body composition and performance:\n\n• Progressive resistance training program with 3 sessions per week focusing on compound movements\n• Nutritional coaching centered on sustainable habit changes rather than restrictive dieting\n• Implementation of recovery protocols including sleep hygiene practices\n• Stress management strategies integrated into daily routines\n• Regular reassessment and program adjustments based on progress and feedback\n\nThe program was designed with adherence as a primary consideration, recognizing that consistency would be the most significant factor in achieving sustainable results. We gradually increased training complexity and intensity while providing extensive education on nutrition principles rather than prescribing rigid meal plans.\n\nAfter six months, the client achieved:\n• Reduction in body fat from 28% to 16%\n• Increase in lean muscle mass of 8kg\n• More than doubled strength in major lifts (squat, deadlift, bench press)\n• Significant improvements in movement quality and daily energy levels\n• Enhanced sleep quality with consistent 7-hour sleep patterns\n• Development of sustainable nutritional habits\n• Improved performance in recreational sports activities\n\nThe client reported that the most valuable aspect of the program was the education component, which provided tools for maintaining results independently after the formal coaching period ended."
    },
    {
      title: "Injury Rehabilitation & Return to Sport",
      description: "Specialized rehabilitation program for a CrossFit athlete recovering from shoulder surgery, featuring progressive loading protocols, movement pattern correction, and sport-specific reconditioning strategies.",
      category: "rehabilitation",
      results: ["Full restoration of shoulder mobility and stability", "Return to competition within 9 months", "Prevention of compensatory movement patterns", "New personal records in multiple lifts post-recovery"],
      image: "/images/Website images/Yoga_lifestyle_2.JPG",
      demoLink: "#",
      fullDescription: "This case study follows the rehabilitation journey of a competitive CrossFit athlete recovering from labrum repair surgery. The athlete was concerned about returning to high-level competition and regaining capacity in overhead movements while preventing re-injury.\n\nAfter collaborating with the athlete's physical therapist and surgeon, we developed a comprehensive rehabilitation program that extended beyond standard protocols to address the specific demands of CrossFit competition.\n\nThe program progression included these phases:\n\n• Phase 1: Medical rehabilitation focused on basic joint mechanics and tissue healing\n• Phase 2: Movement pattern re-education with emphasis on scapular control and rotator cuff function\n• Phase 3: Progressive strength development with careful loading parameters\n• Phase 4: Power restoration and sport-specific movement reintegration\n• Phase 5: Competition preparation and confidence building\n\nKey innovations in this program included:\n• Implementation of blood flow restriction training during early phases to maintain muscle mass with minimal joint loading\n• Development of modified movement variations that allowed sport-specific training without compromising rehabilitation\n• Extensive use of unilateral training to prevent compensatory patterns and bilateral strength imbalances\n• Integration of velocity-based training metrics to quantify readiness for progression\n• Psychological techniques to address return-to-sport anxiety\n\nThe program required extensive education about pain monitoring, training load management, and the distinction between productive discomfort and potential re-injury signals.\n\nResults achieved over the 9-month rehabilitation period included:\n• Full restoration of shoulder range of motion and stability\n• Successful return to competition within 9 months post-surgery\n• Development of improved movement mechanics compared to pre-injury patterns\n• New personal records in multiple lifts within 12 months of surgery\n• Enhanced body awareness and movement quality across all training domains\n\nThis case illustrates the importance of rehabilitation that extends beyond basic medical recovery to include sport-specific reconditioning and psychological components for successful return to competitive activity."
    }
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const filteredProjects = selectedCategory === 'all' 
    ? athletes 
    : athletes.filter(project => project.category === selectedCategory);

  return (
    <div className={styles.container}>
      <Head>
        <title>Athlete Portfolio | Coach Lee</title>
        <meta name="description" content="See how athletes have achieved their performance goals through Coach Lee's strength and conditioning programs." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main} ${isVisible ? styles.visible : ''}`}>
        <Navigation />
        
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Athlete Success Stories</h1>
            <p className={styles.subtitle}>Real results from evidence-based training programs</p>
          </div>
        </section>

        <section className={styles.filters}>
          <div className={styles.filterOptions}>
            <button 
              className={`${styles.filterButton} ${selectedCategory === 'all' ? styles.active : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              All
            </button>
            <button 
              className={`${styles.filterButton} ${selectedCategory === 'team-sports' ? styles.active : ''}`}
              onClick={() => setSelectedCategory('team-sports')}
            >
              Team Sports
            </button>
            <button 
              className={`${styles.filterButton} ${selectedCategory === 'individual-sports' ? styles.active : ''}`}
              onClick={() => setSelectedCategory('individual-sports')}
            >
              Individual Sports
            </button>
            <button 
              className={`${styles.filterButton} ${selectedCategory === 'youth' ? styles.active : ''}`}
              onClick={() => setSelectedCategory('youth')}
            >
              Youth Athletes
            </button>
            <button 
              className={`${styles.filterButton} ${selectedCategory === 'rehabilitation' ? styles.active : ''}`}
              onClick={() => setSelectedCategory('rehabilitation')}
            >
              Rehabilitation
            </button>
            <button 
              className={`${styles.filterButton} ${selectedCategory === 'general-fitness' ? styles.active : ''}`}
              onClick={() => setSelectedCategory('general-fitness')}
            >
              General Fitness
            </button>
          </div>
        </section>

        <section className={styles.portfolioGrid}>
          {filteredProjects.map((project, index) => (
            <div key={index} className={styles.portfolioItem} onClick={() => handleProjectClick(project)}>
              <div className={styles.itemImage}>
                <img src={project.image} alt={project.title} />
              </div>
              <div className={styles.itemContent}>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className={styles.results}>
                  <h3>Key Results:</h3>
                  <ul>
                    {project.results.map((result, i) => (
                      <li key={i}>{result}</li>
                    ))}
                  </ul>
                </div>
                <button className={styles.viewCaseStudy}>View Case Study</button>
              </div>
            </div>
          ))}
        </section>

        <section className={styles.cta}>
          <h2>Ready to Write Your Success Story?</h2>
          <p>Every athlete's journey is unique. Let's create a customized program to help you reach your full potential.</p>
          <Link href="/contact#booking">
            <button className={styles.ctaButton}>Schedule a Consultation</button>
          </Link>
        </section>

        {selectedProject && (
          <ProjectModal 
            project={selectedProject}
            onClose={handleCloseModal}
          />
        )}
      </main>

      <footer className={styles.footer}>
        <p>© 2024 Coach Lee. All rights reserved.</p>
      </footer>
    </div>
  );
} 