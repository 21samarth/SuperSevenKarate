export function GalleryPage() {
  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar scrolled" id="navbar">
        <div className="navbar-inner">
          <a className='logo' href="/">
            <img src="/logo.jpg" alt="Super Seven Sports Academy" className="logo-img" style={{"height": "52px", "width": "52px", "borderRadius": "50%", "objectFit": "cover", "flexShrink": "0"}} loading="lazy" />
            <div className="logo-text">
              <span className="logo-name">Super Seven Sports</span>
              <span className="logo-sub">Academy · Indore</span>
            </div>
          </a>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/legacy">Legacy</a></li>
            <li><a className='active' href="/gallery">Gallery</a></li>
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
      
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero-bg"></div>
        <div className="container page-hero-content">
          <div className="breadcrumb">Home &rsaquo; <span>Gallery</span></div>
          <h1 className="page-hero-title">Photo <span>Gallery</span></h1>
          <p className="page-hero-sub">Training · Tournaments · Events · Students</p>
        </div>
      </section>
      
      {/* GALLERY SECTION */}
      <section className="gallery-section">
        <div className="container">
          <div className="gallery-filter reveal">
            <button className="filter-btn active" data-gallery-filter="all">All Photos</button>
            <button className="filter-btn" data-gallery-filter="training">Training</button>
            <button className="filter-btn" data-gallery-filter="tournaments">Tournaments</button>
            <button className="filter-btn" data-gallery-filter="events">Events</button>
            <button className="filter-btn" data-gallery-filter="Medalist">Medalist</button>
          </div>
      
          <div className="gallery-full-grid reveal">
      
            <div className="gallery-item" data-category="training" data-caption="Training Session">
              <img src="/g1.jpg" alt="Training Session" style={{"width": "100%", "height": "100%", "objectFit": "cover"}} loading="lazy" />
              <div className="gallery-overlay"><div className="gallery-icon">🔍</div></div>
              <div className="gallery-cat">Training</div>
            </div>
      
            <div className="gallery-item" data-category="tournaments" data-caption="Tournament Medal Ceremony">
              <img src="/g2.jpg" alt="Tournament Gold" style={{"width": "100%", "height": "100%", "objectFit": "cover"}} loading="lazy" />
              <div className="gallery-overlay"><div className="gallery-icon">🔍</div></div>
              <div className="gallery-cat">Tournament</div>
            </div>
      
            <div className="gallery-item" data-category="events" data-caption="Belt Ceremony 2024">
              <img src="/g3.jpg" alt="Belt Ceremony" style={{"width": "100%", "height": "100%", "objectFit": "cover"}} loading="lazy" />
              <div className="gallery-overlay"><div className="gallery-icon">🔍</div></div>
              <div className="gallery-cat">Event</div>
            </div>
      
            <div className="gallery-item" data-category="training" data-caption="Kata Practice">
              <img src="/g4.jpg" alt="Kata Practice" style={{"width": "100%", "height": "100%", "objectFit": "cover"}} loading="lazy" />
              <div className="gallery-overlay"><div className="gallery-icon">🔍</div></div>
              <div className="gallery-cat">Training</div>
            </div>
      
            <div className="gallery-item" data-category="tournaments" data-caption="Kumite Competition">
              <img src="/g5.jpg" alt="Kumite Match" style={{"width": "100%", "height": "100%", "objectFit": "cover"}} loading="lazy" />
              <div className="gallery-overlay"><div className="gallery-icon">🔍</div></div>
              <div className="gallery-cat">Tournament</div>
            </div>
      
            <div className="gallery-item" data-category="Medalist" data-caption="Group Photo — 2024 Batch">
              <img src="/g6.jpg" alt="Group Photo" style={{"width": "100%", "height": "100%", "objectFit": "cover"}} loading="lazy" />
              <div className="gallery-overlay"><div className="gallery-icon">🔍</div></div>
              <div className="gallery-cat">Medalist</div>
            </div>
      
            <div className="gallery-item" data-category="training" data-caption="Sensei Demonstrating Kata">
              <img src="/g7.jpg" alt="Sensei Demo" style={{"width": "100%", "height": "100%", "objectFit": "cover"}} loading="lazy" />
              <div className="gallery-overlay"><div className="gallery-icon">🔍</div></div>
              <div className="gallery-cat">Training</div>
            </div>
      
            <div className="gallery-item" data-category="events" data-caption="Self Defense Workshop">
              <img src="/g8.jpg" alt="Self Defense" style={{"width": "100%", "height": "100%", "objectFit": "cover"}} loading="lazy" />
              <div className="gallery-overlay"><div className="gallery-icon">🔍</div></div>
              <div className="gallery-cat">Event</div>
            </div>
      
            <div className="gallery-item" data-category="tournaments" data-caption="State Championship Podium">
              <img src="/g9.jpg" alt="State Podium" style={{"width": "100%", "height": "100%", "objectFit": "cover"}} loading="lazy" />
              <div className="gallery-overlay"><div className="gallery-icon">🔍</div></div>
              <div className="gallery-cat">Tournament</div>
            </div>
      
          </div>
        </div>
      </section>
      
      {/* LIGHTBOX */}
      <div className="lightbox" id="lightbox">
        <button className="lightbox-close" id="lbClose">✕</button>
        <button className="lightbox-nav lightbox-prev">&#8592;</button>
        <img className="lightbox-img" id="lbImg" src="" alt="" loading="lazy" />
        <button className="lightbox-nav lightbox-next">&#8594;</button>
        <div className="lightbox-caption"></div>
      </div>
      
      {/* FOOTER */}
      <footer>
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <a className='logo' href="/">
                <img src="/logo.jpg" alt="Super Seven Sports Academy" className="logo-img" style={{"height": "52px", "width": "52px", "borderRadius": "50%", "objectFit": "cover", "flexShrink": "0"}} loading="lazy" />
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
              <div className="footer-col-title">Categories</div>
              <ul className="footer-links">
                <li><a href="gallery.html#">Training Photos</a></li>
                <li><a href="gallery.html#">Tournament Photos</a></li>
                <li><a href="gallery.html#">Event Photos</a></li>
                <li><a href="gallery.html#">Medalist Photos</a></li>
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
