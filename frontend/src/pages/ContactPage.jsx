export function ContactPage() {
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
            <li><a href="/gallery">Gallery</a></li>
            <li><a className='active' href="/contact">Contact Us</a></li>
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
          <div className="breadcrumb">Home &rsaquo; <span>Contact</span></div>
          <h1 className="page-hero-title">Get in <span>Touch</span></h1>
          <p className="page-hero-sub">Start your journey · Ask a question · Visit us</p>
        </div>
      </section>
      
      {/* CONTACT SECTION */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
      
            {/* Info Block */}
            <div className="contact-info-block reveal">
              <div className="contact-info-title">Academy Information</div>
      
              <div className="contact-detail">
                <div className="contact-detail-icon">🏫</div>
                <div>
                  <div className="contact-detail-label">Academy Name</div>
                  <div className="contact-detail-value">Super Seven Sports Academy, Indore</div>
                </div>
              </div>
      
              <div className="contact-detail">
                <div className="contact-detail-icon">📍</div>
                <div>
                  <div className="contact-detail-label">Address</div>
                  <div className="contact-detail-value"> 394,Premium Paradise, Sanwer Road Industrial Area<br />Indore, Madhya Pradesh 452010</div>
                </div>
              </div>
      
              <div className="contact-detail">
                <div className="contact-detail-icon">📞</div>
                <div>
                  <div className="contact-detail-label">Phone / WhatsApp</div>
                  <div className="contact-detail-value"><a href="tel:+919200991960" style={{"color": "inherit", "textDecoration": "none"}}>+91 9200991960</a></div>
                </div>
              </div>
      
              <div className="contact-detail">
                <div className="contact-detail-icon">✉️</div>
                <div>
                  <div className="contact-detail-label">Email</div>
                  <a href="mailto:divyanshipal1930@gmail.com">divyanshipal1930@gmail.com</a>
                </div>
              </div>
      
              <div className="contact-detail">
                <div className="contact-detail-icon">⏰</div>
                <div>
                  <div className="contact-detail-label">Training Hours</div>
                  <div className="contact-detail-value">
                    Mon–Sat: 6 AM – 9 PM<br />
                    Sun: 7 AM – 12 PM
                  </div>
                </div>
              </div>
      
              <div className="social-block">
                <div className="social-block-title">Follow Us</div>
                <div className="social-links">
                  <a href="https://www.instagram.com/wellness_karate_academy" className="social-link" title="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="ig" cx="30%" cy="107%" r="150%"><stop offset="0%" stop-color="#fdf497"/><stop offset="5%" stop-color="#fdf497"/><stop offset="45%" stop-color="#fd5949"/><stop offset="60%" stop-color="#d6249f"/><stop offset="90%" stop-color="#285AEB"/></radialGradient></defs><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="url(#ig)"/><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="none"/><circle cx="12" cy="12" r="4" fill="none" stroke="white" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1" fill="white"/></svg></a>
                  <a href="https://www.facebook.com/vishalbokrekarateboy/" className="social-link" title="Facebook"><svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="4" fill="#1877F2"/><path d="M16 8h-2a1 1 0 0 0-1 1v2h3l-.5 3H13v7h-3v-7H8v-3h2V9a4 4 0 0 1 4-4h2v3z" fill="white"/></svg></a>
                  <a href="https://youtube.com/@senseivishalbokrekarate1507" className="social-link" title="YouTube"><svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="4" fill="#FF0000"/><path d="M19.6 7.8a2 2 0 0 0-1.4-1.4C16.8 6 12 6 12 6s-4.8 0-6.2.4A2 2 0 0 0 4.4 7.8 20 20 0 0 0 4 12a20 20 0 0 0 .4 4.2 2 2 0 0 0 1.4 1.4C7.2 18 12 18 12 18s4.8 0 6.2-.4a2 2 0 0 0 1.4-1.4A20 20 0 0 0 20 12a20 20 0 0 0-.4-4.2z" fill="white"/><polygon points="10,9 10,15 15,12" fill="#FF0000"/></svg></a>
                </div>
              </div>
            </div>
      
            {/* Contact Form */}
            <div className="contact-form-block reveal reveal-delay-2">
              <div className="form-title">Send Us a Message</div>
              <p className="form-sub">We'll get back to you within 24 hours. No spam, ever.</p>
      
              <form id="contactForm" novalidate>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Full Name *</label>
                    <input type="text" id="name" className="form-input" placeholder="Your full name" autocomplete="name" />
                    <span className="error-msg" id="nameError"></span>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address *</label>
                    <input type="email" id="email" className="form-input" placeholder="your@email.com" autocomplete="email" />
                    <span className="error-msg" id="emailError"></span>
                  </div>
                </div>
      
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">Phone Number *</label>
                    <input type="tel" id="phone" className="form-input" placeholder="+91 XXXXX XXXXX" autocomplete="tel" />
                    <span className="error-msg" id="phoneError"></span>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="interest">Interested In</label>
                    <select id="interest" className="form-select form-input">
                      <option value="">Select a program...</option>
                      <option>Kids Karate (Ages 5–12)</option>
                      <option>Teen Karate (Ages 13–17)</option>
                      <option>Adult Karate (18+)</option>
                      <option>Self Defense Training</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                </div>
      
                <div className="form-group full">
                  <label className="form-label" htmlFor="message">Message *</label>
                  <textarea id="message" className="form-textarea" placeholder="Tell us about yourself or ask any question..."></textarea>
                  <span className="error-msg" id="messageError"></span>
                </div>
      
                <button type="submit" className="btn btn-primary" style={{"width": "100%", "justifyContent": "center", "padding": "16px", "fontSize": "1rem"}}>
                  Send Message ›
                </button>
              </form>
            </div>
      
          </div>
        </div>
      </section>
      
      {/* MAP SECTION */}
      <section className="map-section">
        <div className="container">
          <div className="reveal" style={{"marginBottom": "24px"}}>
            <div className="section-tag">Find Us</div>
            <h2 className="section-title" style={{"fontSize": "2rem"}}>Visit the <span>Dojo</span></h2>
          </div>
          <div className="map-wrapper reveal">
            {/* Replace src with actual Google Maps embed URL */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.105194244188!2d75.86084989999999!3d22.7985657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396303662d1a39f5%3A0xb36ae798a0f1ee2c!2sSUPER%20SEVEN%20KARATE%20INSTITUTE!5e0!3m2!1sen!2sin!4v1791479909382!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{"border": "0"}}
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Super Seven Sports Academy Location">
            </iframe>
          </div>
        </div>
      </section>
      
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
              <div className="footer-col-title">Programs</div>
              <ul className="footer-links">
                <li><a href="contact.html#">Kids Karate</a></li>
                <li><a href="contact.html#">Teen Karate</a></li>
                <li><a href="contact.html#">Adult Karate</a></li>
                <li><a href="contact.html#">Self Defense</a></li>
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
                <div className="contact-item">
                  <div className="contact-item-icon">✉️</div>
                  <div className="contact-item-text">
                  <a href="mailto:divyanshipal1930@gmail.com">divyanshipal1930@gmail.com</a>
                  </div>
                </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-copy">© 2026 Super Seven Sports Academy Indore. All Rights Reserved.</div>
      </div>      <p style={{"fontSize": "0.72rem", "color": "rgba(255,255,255,0.25)", "fontFamily": "'Oswald',sans-serif", "letterSpacing": "0.05em", "marginTop": "8px"}}>
              Super Seven Sports Academy · Indore, Madhya Pradesh, India<br />
              Karate Training &nbsp;|&nbsp; Martial Arts &nbsp;|&nbsp; Self Defense Classes
            </p>
            </div>
            </div>
      </footer>
    </>
  );
}
