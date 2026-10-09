export function NavBar() {
  return (
    <>
     {/* ── NAVBAR ── */}
      <nav className="navbar" id="navbar">
        <div className="navbar-inner">
          <a className='logo' href="/">
            <img src="/logo.jpg" alt="Super Seven Sports Academy" className="logo-img" style={{"height": "52px", "width": "52px", "borderRadius": "50%", "objectFit": "cover", "flexShrink": "0"}} loading="lazy" />
            <div className="logo-text">
              <span className="logo-name">Super Seven Sports</span>
              <span className="logo-sub">Academy · Indore</span>
            </div>
          </a>
          <ul className="nav-links">
            <li><a className='active' href="/">Home</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/legacy">Legacy</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a className='btn btn-primary nav-cta' href="/contact">Join Now</a></li>
          </ul>
          <div className="hamburger" id="hamburger">
            <span></span><span></span><span></span>
          </div>
        </div>
      </nav>
      <div className="mobile-menu" id="mobileMenu">
        <a href="/">Home</a>
        <a href="/events">Events</a>
        <a href="/legacy">Legacy</a>
        <a href="/gallery">Gallery</a>
        <a href="/contact">Contact Us</a>
      </div>
    </>
  )
}
