export function LegacyPage() {
  return (
    <>
      <nav className="navbar scrolled" id="navbar">
        <div className="navbar-inner">
          <a className='logo' href="/">
        <img src="/logo.jpg" alt="Super Seven Sports Academy" className="logo-img"
        style={{"height": "52px", "width": "52px", "borderRadius": "50%", "objectFit": "cover", "flexShrink": "0"}} loading="lazy" />
        <div className="logo-text">
          <span className="logo-name">Super Seven Sports</span>
          <span className="logo-sub">Academy · Indore</span>
        </div>
      </a>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/events">Events</a></li>
            <li><a className='active' href="/legacy">Legacy</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a className='btn btn-primary nav-cta' href="/contact">Join Now</a></li>
          </ul>
          <div className="hamburger" id="hamburger"><span></span><span></span><span></span></div>
        </div>
      </nav>
      
      <div className="mobile-menu" id="mobileMenu">
        <a href="/">Home</a>
        <a href="/events">Events</a>
        <a href="/legacy">Legacy</a>
        <a href="/gallery">Gallery</a>
        <a href="/contact">Contact Us</a>
      </div>
      
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
          <div className="masters-grid">
      
            <div className="master-card reveal">
              <div className="master-photo-wrap">
                <img src="/master1.jpg" alt="Sensei Vishal Bokre" loading="lazy" />
                <div className="belt-ribbon"></div>
                <div className="dan-badge"><strong>4th Dan </strong>Black Belt</div>
              </div>
              <div className="master-body">
                <div className="master-name">Sensei Vishal Bokre</div>
                <div className="master-title">Chief Instructor &amp; Founder</div>
                <div className="master-meta">
                  <div className="master-meta-item"><div className="meta-icon">🎖️</div><div className="meta-text">4th Dan Black Belt — Shotokan</div></div>
                  <div className="master-meta-item"><div className="meta-icon">⏳</div><div className="meta-text">17+ Years of Experience</div></div>
                  <div className="master-meta-item"><div className="meta-icon">🏆</div><div className="meta-text">FSKAIF Certified Head Coach</div></div>
                </div>
              </div>
            </div>
      
            <div className="master-card reveal reveal-delay-1">
              <div className="master-photo-wrap">
                <img src="/master2.png" alt="Sensei Deepak Khare" loading="lazy" />
                <div className="belt-ribbon"></div>
                <div className="dan-badge"><strong>5th Dan</strong>Black Belt</div>
              </div>
              <div className="master-body">
                <div className="master-name">Sensei Deepak Khare</div>
                <div className="master-title">Senior Instructor &amp; official examiner</div>
                <div className="master-meta">
                  <div className="master-meta-item"><div className="meta-icon">🎖️</div><div className="meta-text">5th Dan Black Belt — Shotokan</div></div>
                  <div className="master-meta-item"><div className="meta-icon">⏳</div><div className="meta-text">35+ Years of Experience</div></div>
                  <div className="master-meta-item"><div className="meta-icon">🏆</div><div className="meta-text">FSKAIF Certified Head Coach</div></div>
                </div>
              </div>
            </div>
      
            <div className="master-card reveal reveal-delay-2">
              <div className="master-photo-wrap">
                <img src="/master3.jpg" alt="Sempai Kiran Lama" loading="lazy" />
                <div className="belt-ribbon"></div>
                <div className="dan-badge"><strong>1st Dan</strong>Black Belt</div>
              </div>
              <div className="master-body">
                <div className="master-name">Sempai Kiran Lama</div>
                <div className="master-title">Girls &amp; Female Head Coach</div>
                <div className="master-meta">
                  <div className="master-meta-item"><div className="meta-icon">🎖️</div><div className="meta-text">1st Dan Black Belt — Shotokan</div></div>
                  <div className="master-meta-item"><div className="meta-icon">⏳</div><div className="meta-text">6+ Years of Experience</div></div>
                  <div className="master-meta-item"><div className="meta-icon">🏆</div><div className="meta-text">FSKAIF Certified Assistant Coach</div></div>
                </div>
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
      
            {/* Student 1 */}
            <div className="student-card reveal">
              <div className="student-photo-wrap">
                <img src="/champ1.jpg" alt="Arul Jain" loading="lazy" />
                <div className="belt-level-badge">1st Dan</div>
                <div className="student-belt-stripes"><span></span><span></span><span></span><span className="gold-stripe"></span><span></span><span></span><span></span></div>
              </div>
              <div className="student-body">
                <div className="student-name">Arul Jain</div>
                <div className="student-rank">Black Belt — 1st Dan</div>
                <div className="student-achievement">
                  <div className="student-achievement-icon">🥇</div>
                  <div className="student-achievement-text">Khel Karate season 3 Gold medalist</div>
                </div>
              </div>
            </div>
      
            {/* Student 2 */}
            <div className="student-card reveal reveal-delay-1">
              <div className="student-photo-wrap">
                <img src="/champ2.jpg" alt="Nandita Lama" loading="lazy" />
                <div className="belt-level-badge">2nd Dan</div>
                <div className="student-belt-stripes"><span></span><span></span><span></span><span className="gold-stripe"></span><span></span><span></span><span></span></div>
              </div>
              <div className="student-body">
                <div className="student-name">Nandita Lama</div>
                <div className="student-rank">Black Belt — 2nd Dan</div>
                <div className="student-achievement">
                  <div className="student-achievement-icon">🏅</div>
                  <div className="student-achievement-text">Khel karate season 3 Silver medalist</div>
                </div>
              </div>
            </div>
      
            {/* Student 3 */}
            <div className="student-card reveal reveal-delay-2">
              <div className="student-photo-wrap">
                <img src="/champ3.jpg" alt="Smruthi T.K." loading="lazy" />
                <div className="belt-level-badge">3rd Dan</div>
                <div className="student-belt-stripes"><span></span><span className="gold-stripe"></span><span></span><span></span><span className="gold-stripe"></span><span></span></div>
              </div>
              <div className="student-body">
                <div className="student-name">Smruthi T.K.</div>
                <div className="student-rank">Black Belt — 3rd Dan</div>
                <div className="student-achievement">
                  <div className="student-achievement-icon">🌐</div>
                  <div className="student-achievement-text">FSKA International gold medalist</div>
                </div>
              </div>
            </div>
      
            {/* Student 4 — Add photo: images/champ4.jpg */}
            <div className="student-card reveal">
              <div className="student-photo-wrap">
                <img src="/champ4.jpeg" alt="Tavish Samdani" loading="lazy" />
                <div className="belt-level-badge">2nd Dan</div>
                <div className="student-belt-stripes"><span></span><span></span><span></span><span className="gold-stripe"></span><span></span><span></span><span></span></div>
              </div>
              <div className="student-body">
                <div className="student-name">Tavish Samdani</div>
                <div className="student-rank">Black Belt — 2nd Dan</div>
                <div className="student-achievement">
                  <div className="student-achievement-icon">🥋</div>
                  <div className="student-achievement-text">FSKAIF National gold medalist</div>
                </div>
              </div>
            </div>
      
            {/* Student 5 — Add photo: images/champ5.jpg */}
            <div className="student-card reveal reveal-delay-1">
              <div className="student-photo-wrap">
                <img src="/champ5.jpeg" alt="Muskan Maheshwari" loading="lazy" />
                <div className="belt-level-badge">2nd Dan</div>
                <div className="student-belt-stripes"><span></span><span></span><span></span><span className="gold-stripe"></span><span></span><span></span><span></span></div>
              </div>
              <div className="student-body">
                <div className="student-name">Muskan Maheshwari</div>
                <div className="student-rank">Black Belt — 2nd Dan</div>
                <div className="student-achievement">
                  <div className="student-achievement-icon">🥋</div>
                  <div className="student-achievement-text">FSKAIF National gold medalist</div>
                </div>
              </div>
            </div>
      
            {/* Student 6 — Add photo: images/champ6.jpg */}
            <div className="student-card reveal reveal-delay-2">
              <div className="student-photo-wrap">
                <img src="/champ6.jpeg" alt="Yashashvi Lama" loading="lazy" />
                <div className="belt-level-badge">1st Dan</div>
                <div className="student-belt-stripes"><span></span><span></span><span></span><span className="gold-stripe"></span><span></span><span></span><span></span></div>
              </div>
              <div className="student-body">
                <div className="student-name">Yashashvi Lama</div>
                <div className="student-rank">Black Belt — 1st Dan</div>
                <div className="student-achievement">
                  <div className="student-achievement-icon">🥋</div>
                  <div className="student-achievement-text">FSKAIF National gold medalist</div>
                </div>
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
      
      <footer>
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <a className='logo' href="/">
        <img src="/logo.jpg" alt="Super Seven Sports Academy" className="logo-img"
        style={{"height": "52px", "width": "52px", "borderRadius": "50%", "objectFit": "cover", "flexShrink": "0"}} loading="lazy" />
        <div className="logo-text">
          <span className="logo-name">Super Seven Sports</span>
          <span className="logo-sub">Academy · Indore</span>
        </div>
      </a>
              <p>Building champions of character since 2019.</p>
              <div className="social-links">
                <a href="https://www.instagram.com/wellness_karate_academy" className="social-link" title="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="ig" cx="30%" cy="107%" r="150%"><stop offset="0%" stop-color="#fdf497"/><stop offset="5%" stop-color="#fdf497"/><stop offset="45%" stop-color="#fd5949"/><stop offset="60%" stop-color="#d6249f"/><stop offset="90%" stop-color="#285AEB"/></radialGradient></defs><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="url(#ig)"/><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="none"/><circle cx="12" cy="12" r="4" fill="none" stroke="white" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1" fill="white"/></svg></a>
                <a href="https://www.facebook.com/vishalbokrekarateboy/" className="social-link" title="Facebook"><svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="4" fill="#1877F2"/><path d="M16 8h-2a1 1 0 0 0-1 1v2h3l-.5 3H13v7h-3v-7H8v-3h2V9a4 4 0 0 1 4-4h2v3z" fill="white"/></svg></a>
                <a href="https://youtube.com/@senseivishalbokrekarate1507" className="social-link" title="YouTube"><svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="4" fill="#FF0000"/><path d="M19.6 7.8a2 2 0 0 0-1.4-1.4C16.8 6 12 6 12 6s-4.8 0-6.2.4A2 2 0 0 0 4.4 7.8 20 20 0 0 0 4 12a20 20 0 0 0 .4 4.2 2 2 0 0 0 1.4 1.4C7.2 18 12 18 12 18s4.8 0 6.2-.4a2 2 0 0 0 1.4-1.4A20 20 0 0 0 20 12a20 20 0 0 0-.4-4.2z" fill="white"/><polygon points="10,9 10,15 15,12" fill="#FF0000"/></svg></a>
              </div>
            </div>
            <div>
              <div className="footer-col-title">Quick Links</div>
              <ul className="footer-links">
                <li><a href="/">Home</a></li>
                <li><a href="/events">Events</a></li>
                <li><a href="/legacy">Legacy</a></li>
                <li><a href="/gallery">Gallery</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
            <div>
              <div className="footer-col-title">Programs</div>
              <ul className="footer-links">
                <li><a href="blackbelt.html#">Kids Karate</a></li>
                <li><a href="blackbelt.html#">Teen Karate</a></li>
                <li><a href="blackbelt.html#">Adult Karate</a></li>
                <li><a href="blackbelt.html#">Self Defense</a></li>
              </ul>
            </div>
            <div>
              <div className="footer-col-title">Contact</div>
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-item-icon">📍</div>
                  <div className="contact-item-text"> 394,Premium Paradise, Sanwer Road Industrial Area,<br />Indore, MP 452010</div>
                </div>
                <div className="contact-item">
                  <div className="contact-item-icon">📞</div>
                  <div className="contact-item-text"><a href="tel:+919200991960" style={{"color": "inherit", "textDecoration": "none"}}>+91 9200991960</a></div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-copy">© 2026 Super Seven Sports Academy Indore. All Rights Reserved.</div>
          </div>
        </div>
            <p style={{"fontSize": "0.72rem", "color": "rgba(255,255,255,0.25)", "fontFamily": "'Oswald',sans-serif", "letterSpacing": "0.05em", "marginTop": "8px"}}>
              Super Seven Sports Academy · Indore, Madhya Pradesh, India<br />
              Karate Training &nbsp;|&nbsp; Martial Arts &nbsp;|&nbsp; Self Defense Classes
            </p>
      </footer>
    </>
  );
}
