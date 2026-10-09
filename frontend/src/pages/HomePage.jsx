import { Footer } from "./Footer";
import { NavBar } from "./NavBar";
export function HomePage() {
  return (
    <>
     <NavBar/>
      
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="container hero-content">
          <div className="hero-text">
            <div className="hero-badge">Est. 2019 · Indore's Premier Dojo</div>
            <h1 className="hero-title">
              <span>SUPER SEVEN</span>
              <span className="accent">KARATE</span>
              <span className="academy">ACADEMY</span>
            </h1>
            <p className="hero-subtitle">Discipline &nbsp;•&nbsp; Strength &nbsp;•&nbsp; Confidence</p>
            <div className="hero-divider"></div>
            <p className="hero-desc">
              Master the ancient art of karate under world-class instruction. Build physical strength, mental focus, and unbreakable confidence — for all ages, all levels.
            </p>
            <div className="hero-actions">
              <a className='btn btn-primary' href="/contact">Join Now ›</a>
              <a className='btn btn-outline' href="/events">View Events</a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <div className="ach-num" data-count="12">8+</div>
                <div className="stat-label">Years of Excellence</div>
              </div>
              <div className="stat">
                <div className="ach-num" data-count="400">400+</div>
                <div className="stat-label">Students Trained</div>
              </div>
              <div className="stat">
                <div className="ach-num" data-count="50">30+</div>
                <div className="stat-label">Black Belts</div>
              </div>
              <div className="stat">
                <div className="ach-num" data-count="300">300+</div>
                <div className="stat-label">Tournament Medals</div>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-frame">
              <div className="hero-img-placeholder" style={{"position": "relative"}}>
                <span className="kanji-bg">空手</span>
                <img src="/founder.jpg" alt="Karate Training" style={{"width": "100%", "height": "100%", "objectFit": "cover", "position": "absolute", "top": "0", "left": "0"}} loading="lazy" />
              </div>
              <div className="floating-badge top-right">
                <div className="fb-label">Rank</div>
                <div className="fb-value">4th Dan</div>
              </div>
              <div className="floating-badge bottom-left">
                <div className="fb-label">Style</div>
                <div className="fb-value">Shotokan</div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-line"></div>
          <span>Scroll</span>
        </div>
      </section>
      
      {/* ── ABOUT ── */}
      <section className="about" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-image-block reveal">
              <div className="about-img-main" style={{"position": "relative"}}>
                <img src="/co-founder.jpg" alt="Dojo Interior" style={{"width": "100%", "height": "100%", "objectFit": "contain", "position": "absolute", "top": "0", "left": "0"}} loading="lazy" />
                <span className="placeholder-icon" style={{"fontSize": "6rem", "color": "rgba(255,255,255,0.1)"}}>🥋</span>
              </div>
              <div className="about-img-accent"></div>
              <div className="about-exp-badge">
                <div className="about-exp-num">8+</div>
                <div className="about-exp-text">Years of<br />Excellence</div>
              </div>
            </div>
            <div className="about-content reveal reveal-delay-2">
              <div className="section-tag">About the Academy</div>
              <h2 className="section-title">Where Warriors <span>Are Born</span></h2>
              <p>Super Seven Sports Academy is more than a training center—it is a family. We nurture discipline, respect, and empowerment, helping every student discover their true potential through the art of Shotokan Karate.</p>
              <p>We practice authentic <strong>Shotokan Karate</strong>, one of the most disciplined and powerful styles in the world, guided by certified instructors with decades of competitive experience.</p>
              <ul className="philosophy-list">
                <li className="philosophy-item">Traditional Shotokan Karate Training</li>
                <li className="philosophy-item">Certified FSKAIF Instructors</li>
                <li className="philosophy-item">Character Development &amp; Leadership</li>
                <li className="philosophy-item">Competition Training &amp; Grading Support</li>
                <li className="philosophy-item">Self Defense &amp; Discipline</li>
                <li className="philosophy-item">Improve Fitness &amp; Flexibility</li>
                <li className="philosophy-item">Increase Strength &amp; Stamina</li>
                <li className="philosophy-item">Goal Setting &amp; Patience</li>
              </ul>
              <a className='btn btn-red' href="/contact" style={{"marginTop": "16px"}}>Start Your Journey ›</a>
            </div>
          </div>
        </div>
      </section>
      
      {/* ── COACHES & SCHEDULE ── */}
      <section className="home-coaches">
        <div className="container">
          <div className="home-coaches-heading reveal">
            <div className="section-tag">Train With Us</div>
            <h2 className="section-title">Meet Your <span>Coaches</span></h2>
          </div>
          <div className="home-coaches-grid">
            <article className="home-coach-card reveal">
              <img src="/founder.jpg" alt="Sensai Divyamshi Pal" loading="lazy" />
              <div className="home-coach-body">
                <h3>Sensai Divyamshi Pal</h3>
                <p className="home-coach-role">Owner &amp; Founder · MP Coach</p>
                <ul className="home-coach-awards">
                  <li>Maa Ahilya National Awardee</li>
                  <li>Pride of MP Awardee</li>
                  <li>Young Entrepreneurs Awardee</li>
                </ul>
              </div>
            </article>
            <article className="home-coach-card reveal reveal-delay-1">
              <img src="/co-founder.jpg" alt="Sensai Harsh Chouhan" loading="lazy" />
              <div className="home-coach-body">
                <h3>Sensai Harsh Chouhan</h3>
                <p className="home-coach-role">Co-Founder · MP Coach</p>
              </div>
            </article>
          </div>
          <div className="training-schedule reveal reveal-delay-2">
            <div><span>Session Days</span><strong>Monday to Friday</strong></div>
            <div><span>Morning Slot</span><strong>6:30 to 7:30 AM</strong></div>
            <div><span>Evening Slot</span><strong>5:00 to 6:30 PM</strong></div>
          </div>
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section className="programs" id="programs">
        <div className="container">
          <div className="programs-header reveal">
            <div className="section-tag">Training Programs</div>
            <h2 className="section-title light">Choose Your <span>Path</span></h2>
          </div>
          <div className="programs-grid">
            <div className="program-card reveal">
              <span className="program-icon">👦</span>
              <div className="program-age">Ages 5–12</div>
              <div className="program-name">Kids Karate</div>
              <p className="program-desc">Karate for kids is more than just learning kicks and punches—it’s about building confidence, discipline, and respect. Through fun and engaging training, children discover how to stay active, focus better in school, and develop a strong sense of teamwork.</p>
            </div>
            <div className="program-card reveal reveal-delay-1">
              <span className="program-icon">🧑</span>
              <div className="program-age">Ages 13–17</div>
              <div className="program-name">Teen Karate</div>
              <p className="program-desc">Teen karate training is the perfect way for young people to channel their energy into something positive and powerful. It helps them build strength, focus, and discipline while also teaching respect and responsibility.</p>
            </div>
            <div className="program-card reveal reveal-delay-2">
              <span className="program-icon">🥋</span>
              <div className="program-age">Ages 18+</div>
              <div className="program-name">Adult Karate</div>
              <p className="program-desc">Karate training for adults is a powerful way to stay fit, focused, and confident. It combines practical self-defence skills with full-body workouts that improve strength, flexibility, and endurance.</p>
            </div>
            <div className="program-card reveal reveal-delay-3">
              <span className="program-icon">🛡️</span>
              <div className="program-age">All Ages</div>
              <div className="program-name">Self Defense</div>
              <p className="program-desc">Self-defence training is about more than just techniques—it’s about empowerment. It teaches practical skills to protect yourself.Self-defence is not about aggression; it’s about safety, strength, and the peace of mind that comes from knowing you can take care of yourself and others when needed.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* ── ACHIEVEMENTS ── */}
      <section className="achievements">
        <div className="container">
          <div className="achievements-inner">
            <div className="achievements-stats reveal">
              <div className="achievement-item">
                <div className="ach-num" data-count="30">30+</div>
                <div className="ach-label">Black Belt Students</div>
              </div>
              <div className="achievement-item">
                <div className="ach-num" data-count="300">300+</div>
                <div className="ach-label">Tournament Medals</div>
              </div>
              <div className="achievement-item">
                <div className="ach-num" data-count="8">8+</div>
                <div className="ach-label">Years Experience</div>
              </div>
              <div className="achievement-item">
                <div className="ach-num" data-count="400">400+</div>
                <div className="ach-label">Students Trained</div>
              </div>
            </div>
            <div className="achievements-text reveal reveal-delay-2">
              <div className="section-tag">Our Record</div>
              <h2 className="section-title light">A Legacy of <span>Champions</span></h2>
              <p>From state-level tournaments to national championships, our students have consistently brought home gold. We are proud of every athlete who has stepped onto the competition floor under the Super Seven Sports Academy banner.</p>
              <p>Our black belts are more than martial artists — they are leaders, mentors, and role models in the community.</p>
              <a className='btn btn-primary' href="/legacy">Our Black Belts ›</a>
            </div>
          </div>
        </div>
      </section>
      
      
      {/* ── EVENTS PREVIEW ── */}
      <section className="events-preview">
        <div className="container">
          <div className="events-header reveal">
            <div>
              <div className="section-tag">Upcoming Events</div>
              <h2 className="section-title light">Don't Miss <span>What's Next</span></h2>
            </div>
            <a className='btn btn-outline' href="/events">All Events ›</a>
          </div>
          <div className="events-grid">
            <div className="event-card reveal">
              <div className="event-img">
                <img src="/event2.jpg" alt="District Championship" style={{"width": "100%", "height": "100%", "objectFit": "cover"}} loading="lazy" />
                <div className="event-date-badge">
                  <div className="event-date-day">20</div>
                  <div className="event-date-month">Sep</div>
                </div>
              </div>
              <div className="event-body">
                <div className="event-type">Grading</div>
                <div className="event-name">Belt Promotion Test</div>
                <div className="event-meta">📍 Super Seven Sports Academy, Indore &nbsp;|&nbsp; 08:00 AM</div>
                <p style={{"fontSize": ".82rem", "color": "rgba(255,255,255,.45)", "lineHeight": "1.6", "marginBottom": "16px"}}>Quarterly belt grading for students of all levels. Demonstrate your skills before the panel.</p>
                <a className='btn btn-primary' href="/events">Register Now</a>
              </div>
            </div>
            <div className="event-card reveal reveal-delay-1">
              <div className="event-img">
                <img src="/event1.jpg" alt="District Championship" style={{"width": "100%", "height": "100%", "objectFit": "cover"}} />
                <div className="event-date-badge">
                  <div className="event-date-day">12</div>
                  <div className="event-date-month">July</div>
                </div>
              </div>
              <div className="event-body">
                <div className="event-type">Tournament</div>
                <div className="event-name">1st Girls open Karate championship</div>
                <div className="event-meta">📍 Ips School, Rajendra nagar, Indore(M.P.)&nbsp;|&nbsp; 8:00 AM</div>
                <p style={{"fontSize": ".82rem", "color": "rgba(255,255,255,.45)", "lineHeight": "1.6", "marginBottom": "16px"}}>1st Girls open Karate championship for all age groups.</p>
                <a className='btn btn-primary' href="/events">Register Now</a>
              </div>
            </div>
            <div className="event-card reveal reveal-delay-2">
              <div className="event-img">
                <img src="/event3.jpg" alt="District Championship" style={{"width": "100%", "height": "100%", "objectFit": "cover"}} loading="lazy" />
                <div className="event-date-badge">
                  <div className="event-date-day">16</div>
                  <div className="event-date-month">Aug</div>
                </div>
              </div>
              <div className="event-body">
                <div className="event-type">Tournament</div>
                <div className="event-name">State Open Karate Championship, MP</div>
                <div className="event-meta">📍 Basket ball Complex, Indore &nbsp;|&nbsp; 08:00 AM</div>
                <p style={{"fontSize": ".82rem", "color": "rgba(255,255,255,.45)", "lineHeight": "1.6", "marginBottom": "16px"}}>State wide competition featuring kata and kumite events for all age groups.</p>
                <a className='btn btn-primary' href="/events">Register Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* ── GALLERY PREVIEW ── */}
      <section className="gallery-preview">
        <div className="container">
          <div className="gallery-header reveal">
            <div>
              <div className="section-tag">Gallery</div>
              <h2 className="section-title light">Life at the <span>Dojo</span></h2>
            </div>
            <a className='btn btn-outline' href="/gallery">View Gallery ›</a>
          </div>
          <div className="gallery-grid reveal">
            <div className="g-item">
              <img src="/g2.jpg" alt="Gallery Image 1" loading="lazy" />
              <div className="g-placeholder">🥋</div>
              <div className="g-overlay">🔍</div>
            </div>
            <div className="g-item">
              <img src="/g1.jpg" alt="Gallery Image 2" loading="lazy" />
              <div className="g-placeholder">🏆</div>
              <div className="g-overlay">🔍</div>
            </div>
            <div className="g-item">
              <img src="/g3.jpg" alt="Gallery Image 3" loading="lazy" />
              <div className="g-placeholder">👊</div>
              <div className="g-overlay">🔍</div>
            </div>
            <div className="g-item">
              <img src="/g4.jpg" alt="Gallery Image 4" loading="lazy" />
              <div className="g-placeholder">🎌</div>
              <div className="g-overlay">🔍</div>
            </div>
            <div className="g-item">
              <img src="/g5.jpg" alt="Gallery Image 5" loading="lazy" />
              <div className="g-placeholder">⭐</div>
              <div className="g-overlay">🔍</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* ── FOOTER ── */}
      <Footer/>
    </>
  );
}
