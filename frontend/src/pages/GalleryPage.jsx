import { Footer } from "./Footer";
import { NavBar } from "./NavBar";

export function GalleryPage() {
  return (
    <>
      {/* NAVBAR */}
    <NavBar/>
      
      
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
      <Footer/>
    </>
  );
}
