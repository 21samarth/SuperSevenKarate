import { Footer } from "./Footer";
import { NavBar } from "./NavBar";

export function EventsPage() {
  return (
    <>
    <NavBar/>
      
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero-bg"></div>
        <div className="container page-hero-content">
          <div className="breadcrumb">Home &rsaquo; <span>Events</span></div>
          <h1 className="page-hero-title">Upcoming <span>Events</span></h1>
          <p className="page-hero-sub">Tournaments · Workshops · Belt Promotions · Camps</p>
        </div>
      </section>
      
      {/* EVENTS SECTION */}
      <section className="events-preview" style={{"padding": "80px 0"}}>
        <div className="container">
          <div className="events-header reveal" style={{"marginBottom": "56px"}}>
            <div>
              <div className="section-tag">Upcoming Events</div>
              <h2 className="section-title light">Don't Miss <span>What's Next</span></h2>
            </div>
          </div>
          <div className="events-grid">
      
            <div className="event-card reveal">
              <div className="event-img">
                <img src="/event2.jpg" alt="Belt Promotion Test" style={{"width": "100%", "height": "100%", "objectFit": "cover"}} loading="lazy" />
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
                <a className='btn btn-primary' href="/contact">Register Now</a>
              </div>
            </div>
      
            <div className="event-card reveal reveal-delay-1">
              <div className="event-img">
                <img src="/event1.jpg" alt="District Karate Championship" style={{"width": "100%", "height": "100%", "objectFit": "cover"}} loading="lazy" />
                <div className="event-date-badge">
                  <div className="event-date-day">12</div>
                  <div className="event-date-month">July</div>
                </div>
              </div>
              <div className="event-body">
                <div className="event-type">Tournament</div>
                <div className="event-name">1st Girls open Karate championship</div>
                <div className="event-meta">📍 Ips School, Rajendra nagar, Indore(M.P.) &nbsp;|&nbsp; 8:00 AM</div>
                <p style={{"fontSize": ".82rem", "color": "rgba(255,255,255,.45)", "lineHeight": "1.6", "marginBottom": "16px"}}>1st Girls open Karate championship for all age groups.</p>
                <a className='btn btn-primary' href="/contact">Register Now</a>
              </div>
            </div>
      
            <div className="event-card reveal reveal-delay-2">
              <div className="event-img">
                <img src="/event3.jpg" alt="State Karate Championship" style={{"width": "100%", "height": "100%", "objectFit": "cover"}} loading="lazy" />
                <div className="event-date-badge">
                  <div className="event-date-day">16</div>
                  <div className="event-date-month">Aug</div>
                </div>
              </div>
              <div className="event-body">
                <div className="event-type">Tournament</div>
                <div className="event-name">State Open Karate Championship, MP</div>
                <div className="event-meta">📍 Basketball Complex, Indore &nbsp;|&nbsp; 08:00 AM</div>
                <p style={{"fontSize": ".82rem", "color": "rgba(255,255,255,.45)", "lineHeight": "1.6", "marginBottom": "16px"}}>State wide competition featuring kata and kumite events for all age groups.</p>
                <a className='btn btn-primary' href="/contact">Register Now</a>
              </div>
            </div>
      
          </div>
        </div>
      </section>
      
      {/* FOOTER */}
      <Footer/>
        
    </>
  );
}
