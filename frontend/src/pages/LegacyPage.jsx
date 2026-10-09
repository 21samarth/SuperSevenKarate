import { Footer } from "./Footer";
import { NavBar } from "./NavBar";

export function LegacyPage() {
  return (
    <>
      <NavBar/>
      
      <section className="page-hero">
        <div className="page-hero-bg"></div>
        <div className="container page-hero-content">
          <div className="breadcrumb">Home &rsaquo; <span>Legacy</span></div>
          <h1 className="page-hero-title">Our <span>Legacy</span></h1>
          <p className="page-hero-sub">Masters &nbsp;·&nbsp; Champions &nbsp;·&nbsp; Guardians of the Art</p>
        </div>
      </section>
      
      <section className="journey-section">
        <div className="container">
          <div className="reveal" style={{"textAlign": "center", "marginBottom": "8px"}}>
            <div className="section-tag" style={{"borderLeft": "none", "borderBottom": "1px solid rgba(242,201,76,0.4)", "padding": "0 0 8px"}}>The Black Belt Journey</div>
          </div>
          <h2 className="section-title light reveal" style={{"textAlign": "center"}}>From White Belt <span>to Warrior</span></h2>
          <div className="journey-steps">
            <div className="journey-step reveal">
              <div className="journey-step-num">01</div>
              <div className="journey-step-icon">🤍</div>
              <div className="journey-step-title">White Belt — Beginner</div>
              <p className="journey-step-desc">The beginning of every journey. Learn foundational stances, blocks, strikes, and the core values of karate: respect, discipline, and perseverance.</p>
            </div>
            <div className="journey-step reveal reveal-delay-1">
              <div className="journey-step-num">02</div>
              <div className="journey-step-icon">🟡</div>
              <div className="journey-step-title">Color Belts — Growth</div>
              <p className="journey-step-desc"> Belts of different colors such as yellow, orange, green, blue, and purple, each marking growth in knowledge and technique.</p>
            </div>
            <div className="journey-step reveal reveal-delay-2">
              <div className="journey-step-num">03</div>
              <div className="journey-step-icon">🟤</div>
              <div className="journey-step-title">Brown Belt — Pre-Black</div>
              <p className="journey-step-desc">The brown belt in karate represents maturity, discipline, and readiness for higher responsibility. It shows that the student has developed strong technique, deep understanding, and consistent dedication to training.</p>
            </div>
            <div className="journey-step reveal reveal-delay-3">
              <div className="journey-step-num">04</div>
              <div className="journey-step-icon">⬛</div>
              <div className="journey-step-title">Black Belt — Mastery</div>
              <p className="journey-step-desc">The black belt in karate is a symbol of mastery, discipline, and lifelong commitment to the art. It represents not just advanced skill, but also wisdom, humility, and responsibility.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* LEGACY SECTION */}
      <section className="legacy-section" id="legacy">
        <div className="container">
      
          <div className="reveal" style={{"marginBottom": "56px"}}>
            <div className="section-tag">Hall of Excellence</div>
            <h2 className="section-title" style={{"fontSize": "clamp(3rem,7vw,5rem)"}}>The <span>Legacy</span></h2>
            <p style={{"color": "#666", "fontSize": ".95rem", "marginTop": "16px", "maxWidth": "580px", "lineHeight": "1.85"}}>From the masters who built the foundation to the students who carry the torch — this is the living legacy of Super Seven Sports Academy.</p>
          </div>
      
          {/* Masters sub-heading */}
          <div className="legacy-sub-heading reveal">
            <div className="legacy-sub-heading-line left"></div>
            <div className="legacy-sub-label">⬛ &nbsp; Master Instructors</div>
            <div className="legacy-sub-heading-line"></div>
          </div>
      
          {/* Masters grid */}
          <div className="masters-grid founders-grid">

      <div className="master-card reveal animate-ready visible">
        <div class="master-photo-wrap">
          <img src="/founder.jpg" alt="Sensai Divyanshi Pal" loading="lazy" style={{position:"absolute",objectFit:"contain"}}/>
          <div class="belt-ribbon"></div>
          <div class="dan-badge"><strong>Shodan</strong> Black Belt</div>
        </div>
        <div class="master-body">
          <div class="master-name">Sensai Divyanshi Pal</div>
          <div class="master-title">Owner & Founder · MP Coach</div>
          <div class="master-meta">
            <div class="master-meta-item"><div class="meta-icon">🎖️</div><div class="meta-text">4th Dan Black Belt — Shotokan</div></div>
            <div class="master-meta-item"><div class="meta-icon">⏳</div><div class="meta-text">17+ Years of Experience</div></div>
            <div class="master-meta-item"><div class="meta-icon">🏆</div><div class="meta-text">FSKAIF Certified Head Coach</div></div>
            <div class="master-meta-item"><div class="meta-icon">🏅</div><div class="meta-text">Maa Ahilya National Awardee</div></div>
            <div class="master-meta-item"><div class="meta-icon">🏅</div><div class="meta-text">Pride of MP Awardee</div></div>
            <div class="master-meta-item"><div class="meta-icon">🏅</div><div class="meta-text">Young Entrepreneurs Awardee</div></div>
          </div>
        </div>
      </div>

      <div className="master-card reveal reveal-delay-1 animate-ready visible">
        <div class="master-photo-wrap">
          <img src="/co-founder.jpg" alt="Sensai Harsh Chouhan" loading="lazy" style={{position:"absolute",objectFit:"contain"}}/>
          <div class="belt-ribbon"></div>
          <div class="dan-badge"><strong>Shodan</strong> Black Belt</div>
        </div>
        <div class="master-body">
          <div class="master-name">Sensai Harsh Chouhan</div>
          <div class="master-title">Co-Founder · MP Coach</div>
          <div class="master-meta">
            <div class="master-meta-item"><div class="meta-icon">🎖️</div><div class="meta-text">5th Dan Black Belt — Shotokan</div></div>
            <div class="master-meta-item"><div class="meta-icon">⏳</div><div class="meta-text">35+ Years of Experience</div></div>
            <div class="master-meta-item"><div class="meta-icon">🏆</div><div class="meta-text">FSKAIF Certified Head Coach</div></div>
          </div>
        </div>
      </div>

      <div class="master-card reveal reveal-delay-2 animate-ready visible">
        <div class="master-photo-wrap">
          <img src="founder.jpg" alt="Sempai Kiran Lama" loading="lazy"/>
          <div class="belt-ribbon"></div>
          <div class="dan-badge"><strong>1st Dan</strong>Black Belt</div>
        </div>
        
      </div>

    </div>
      
          {/* Divider */}
          <div className="legacy-divider reveal">
            <div className="legacy-divider-icon">🥋</div>
          </div>
      
          {/* Students sub-heading */}
          <div className="legacy-sub-heading reveal">
            <div className="legacy-sub-heading-line left"></div>
            <div className="legacy-sub-label">⭐ &nbsp; Black Belt Students</div>
            <div className="legacy-sub-heading-line"></div>
          </div>
      
          {/* Students grid */}
          <div className="students-grid"> 

            {/* Black Belt Students */}
            <div className="student-card reveal">
              <div className="student-photo-wrap">
                <img src="/privanshi-pal.jpg" alt="Priyanshi Pal" loading="lazy" />
                <div className="belt-level-badge">1st Dan</div>
                <div className="student-belt-stripes"><span></span><span></span><span></span><span className="gold-stripe"></span><span></span><span></span><span></span></div>
              </div>
              <div className="student-body">
                <div className="student-name">Priyanshi Pal</div>
                <div className="student-rank">Black Belt &mdash; 1st Dan</div>
                <div className="student-achievement"><div className="student-achievement-icon">🏅</div><div className="student-achievement-text">National Gold Medalist</div></div>
              </div>
            </div>

            <div className="student-card reveal reveal-delay-1">
              <div className="student-photo-wrap">
                <img src="/jyotshna-pal.jpg" alt="Jyotshna Pal" loading="lazy" />
                <div className="belt-level-badge">1st Dan</div>
                <div className="student-belt-stripes"><span></span><span></span><span></span><span className="gold-stripe"></span><span></span><span></span><span></span></div>
              </div>
              <div className="student-body">
                <div className="student-name">Jyotshna Pal</div>
                <div className="student-rank">Black Belt &mdash; 1st Dan</div>
                <div className="student-achievement"><div className="student-achievement-icon">🏅</div><div className="student-achievement-text">National Medalist</div></div>
              </div>
            </div>

            <div className="student-card reveal reveal-delay-2">
              <div className="student-photo-wrap">
                <img src="/kanha-bais.jpg" alt="Kanha Bais" loading="lazy" />
                <div className="belt-level-badge">1st Dan</div>
                <div className="student-belt-stripes"><span></span><span></span><span></span><span className="gold-stripe"></span><span></span><span></span><span></span></div>
              </div>
              <div className="student-body">
                <div className="student-name">Kanha Bais</div>
                <div className="student-rank">Black Belt &mdash; 1st Dan</div>
                <div className="student-achievement"><div className="student-achievement-icon">🏅</div><div className="student-achievement-text">National Medalist</div></div>
              </div>
            </div>

            <div className="student-card reveal">
              <div className="student-photo-wrap">
                <img src="/varanya-bais.jpg" alt="Varanya Bais" loading="lazy" />
                <div className="belt-level-badge">1st Dan</div>
                <div className="student-belt-stripes"><span></span><span></span><span></span><span className="gold-stripe"></span><span></span><span></span><span></span></div>
              </div>
              <div className="student-body">
                <div className="student-name">Varanya Bais</div>
                <div className="student-rank">Black Belt &mdash; 1st Dan</div>
                <div className="student-achievement"><div className="student-achievement-icon">🏅</div><div className="student-achievement-text">National Medalist</div></div>
              </div>
            </div>

            <div className="student-card reveal reveal-delay-1">
              <div className="student-photo-wrap">
                <img src="/aarav-manjrekar.jpg" alt="Aarav Manjrekar" loading="lazy" />
                <div className="belt-level-badge">1st Dan</div>
                <div className="student-belt-stripes"><span></span><span></span><span></span><span className="gold-stripe"></span><span></span><span></span><span></span></div>
              </div>
              <div className="student-body">
                <div className="student-name">Aarav Manjrekar</div>
                <div className="student-rank">Black Belt &mdash; 1st Dan</div>
                <div className="student-achievement"><div className="student-achievement-icon">🏅</div><div className="student-achievement-text">National Medalist</div></div>
              </div>
            </div>
      
          </div>
      
          {/* Black Belt Student List Download */}
          <div className="reveal" style={{"textAlign": "center", "marginTop": "56px"}}>
            <a href="/black_belt_list.pdf" download="Wellness_Karate_BlackBelt_List.pdf" className="btn btn-primary" style={{"fontSize": "1rem", "padding": "16px 40px", "display": "inline-flex", "alignItems": "center", "gap": "12px"}}>
              <span>⬇️</span> Black Belt Student List
            </a>
            <p style={{"marginTop": "14px", "fontSize": "0.82rem", "color": "#888", "fontFamily": "'Poppins',sans-serif"}}>
              Click to download the complete list of all black belt holders
            </p>
          </div>
      
        </div>
      </section>
      
      <section style={{"padding": "80px 0", "background": "var(--blue-dark)", "textAlign": "center"}}>
        <div className="container reveal">
          <div className="section-tag" style={{"borderLeft": "none", "borderBottom": "1px solid rgba(242,201,76,0.4)", "padding": "0 0 8px", "marginBottom": "20px"}}>Your Turn</div>
          <h2 className="section-title light" style={{"marginBottom": "20px"}}>Write Your Own <span>Legacy</span></h2>
          <p style={{"color": "rgba(255,255,255,.55)", "fontSize": ".95rem", "maxWidth": "520px", "margin": "0 auto 40px", "lineHeight": "1.8"}}>Every master was once a beginner. Every champion started with a single step. Let us guide yours.</p>
          <a className='btn btn-primary' href="/contact" style={{"fontSize": "1rem", "padding": "16px 40px"}}>Join the Academy ›</a>
        </div>
      </section>
      
      <Footer/>
    </>
  );
}
