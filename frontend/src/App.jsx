import { useState } from 'react'
import logo from './assets/logo.webp'
import founder from './assets/founder.webp'
import * as D from './data.js'

const wa = (text = '') => `https://wa.me/${D.WA_NUMBER}${text ? `?text=${encodeURIComponent(text)}` : ''}`
const sendToAdminWhatsApp = (text) => window.open(wa(text), 'admin-whatsapp', 'noopener,noreferrer')

const Ph = ({ label }) => <div className="ph">{label}</div>

const ConfirmationDialog = ({ open, onClose }) => {
  if (!open) return null

  return (
    <div className="dialog-backdrop" role="presentation" onMouseDown={onClose}>
      <div className="dialog" role="dialog" aria-modal="true" aria-labelledby="dialog-title" onMouseDown={(e) => e.stopPropagation()}>
        <h2 id="dialog-title">Enquiry sent</h2>
        <p>Your enquiry has been sent to the admin successfully. We will get back to you within 2 to 3 working days.</p>
        <button className="btn" type="button" onClick={onClose}>OK</button>
      </div>
    </div>
  )
}

const Card = ({ title, children, top }) => (
  <div className="card">
    {top}
    <h3>{title}</h3>
    <p>{children}</p>
  </div>
)

function Section({ id, title, sub, alt, children }) {
  return (
    <section id={id} className={alt ? 'alt' : undefined}>
      <div className="w">
        <h2>{title}</h2>
        <p className="sub">{sub}</p>
        {children}
      </div>
    </section>
  )
}

const nav = [['about', 'About'], ['programs', 'Programs'], ['coaches', 'Coaches'], ['achievements', 'Achievements'], ['branches', 'Branches'], ['timings', 'Timings'], ['fees', 'Fees'], ['events', 'Events'], ['gallery', 'Gallery'], ['reviews', 'Reviews'], ['contact', 'Contact']]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header>
      <div className="bar">
        <a className="logo" href="#home">
          <img src={logo} alt="SSSA Karate logo" width="44" height="44" />
          Super Seven Sports Academy
        </a>
        <button className="menu-toggle" type="button" aria-label="Toggle navigation menu" aria-expanded={menuOpen} aria-controls="main-nav" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span><span></span><span></span>
        </button>
        <nav id="main-nav" className={menuOpen ? 'open' : undefined} aria-label="Main">
          {nav.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a className="btn nav-demo" href="#admission" onClick={() => setMenuOpen(false)}>Free demo</a>
        </nav>
        <a className="btn" href="#admission">Free demo</a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <>
      <div className="hero" id="home">
        <div className="in">
          <div>
            <h1>Train like a champion</h1>
            <p>Karate, self-defense and fitness classes in Indore for students of all ages. No prior experience needed. Free trial class for new students.</p>
            <div className="cta">
              <a className="btn" href="#admission">Book a free demo</a>
              <a className="btn alt" href="#programs">See programs</a>
            </div>
          </div>
          <img className="sun" src={logo} alt="Super Seven Sports Academy SSSA Karate logo" width="320" height="320" />
        </div>
      </div>
      <div className="stats">
        {D.stats.map(([a, b]) => <div key={b}><b>{a}</b>{b}</div>)}
      </div>
    </>
  )
}

function About() {
  return (
    <section className="alt" id="about">
      <div className="w two">
        <div>
          <h2>About the academy</h2>
          <p className="sub">Super Seven Sports Academy (also known as Super Seven Karate Institute) in Indore builds discipline, confidence and fitness in students of all ages. Our trainers teach in a safe, supportive space where beginners are welcome. [Add founding year and academy story.]</p>
          <div className="grid">
            <Card title="Vision">Help every student grow in discipline, confidence and fitness through karate and self-defense.</Card>
            <Card title="Mission">Provide safe, motivating training for all age groups, with no prior experience required.</Card>
          </div>
        </div>
        <div className="card">
          <img className="fp" src={founder} alt="Divyanshi Pal, founder of Super Seven Sports Academy, holding a championship trophy" width="400" height="400" />
          <h3>Divyanshi Pal</h3>
          <p>Founder and coach. International karate player, Khelo India medalist in Pencak Silat and Black Belt holder. [Add dan grade, years of experience and certifications.]</p>
        </div>
      </div>
    </section>
  )
}

function Admission() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const submit = (e) => {
    e.preventDefault()
    const d = new FormData(e.target)
    sendToAdminWhatsApp(`New ${d.get('type')} enquiry\nName: ${d.get('name')}\nAge: ${d.get('age')}\nProgram: ${d.get('prog')}\nPhone: ${d.get('phone')}`)
    e.target.reset()
    setIsSubmitted(true)
  }
  return (
    <section className="alt" id="admission">
      <div className="w two">
        <div>
          <h2>Admission &amp; free demo</h2>
          <p className="sub">Fill the form and we will call you to confirm your free demo class.</p>
          <form onSubmit={submit}>
            <input name="name" placeholder="Student name" required aria-label="Student name" />
            <input name="age" type="number" min="3" max="80" placeholder="Age" required aria-label="Age" />
            <input name="phone" type="tel" placeholder="WhatsApp number" required aria-label="WhatsApp number" />
            <select name="prog" aria-label="Program">{D.programs.map(([p]) => <option key={p}>{p}</option>)}</select>
            <select name="type" aria-label="Request type"><option>Free demo class</option><option>Admission</option></select>
            <button className="btn" type="submit">Submit enquiry</button>
          </form>
        </div>
        <Card title="What to bring to the demo">Comfortable sportswear, a water bottle and a parent or guardian for students under 18. No equipment needed for the first class.</Card>
      </div>
      <ConfirmationDialog open={isSubmitted} onClose={() => setIsSubmitted(false)} />
    </section>
  )
}

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const submit = (e) => {
    e.preventDefault()
    const d = new FormData(e.target)
    sendToAdminWhatsApp(`New website enquiry\nName: ${d.get('n')}\nPhone: ${d.get('p')}\nQuestion: ${d.get('m')}`)
    e.target.reset()
    setIsSubmitted(true)
  }
  return (
    <section id="contact">
      <div className="w two">
        <div>
          <h2>Contact us</h2>
          <p className="sub">Call, message or visit us.</p>
          <p>
            <b>Phone:</b> <a href="tel:+919200991960">{D.PHONE_DISPLAY}</a><br />
            <b>WhatsApp:</b> <a href={wa()}>Chat now</a><br />
            <b>Email:</b> <a href={`mailto:${D.EMAIL}`}>{D.EMAIL}</a><br />
            <b>Address:</b> {D.ADDRESS}
          </p>
          <p style={{ marginTop: 14 }}>follow us on : <br /><a href="https://www.instagram.com/super_seven_sports_acadmey/" target='_blank'><img width="36" height="36" src="https://img.icons8.com/3d-fluency/94/instagram-logo.png" alt="instagram-logo"/></a></p>
        </div>
        <form onSubmit={submit}>
          <input name="n" placeholder="Your name" required aria-label="Your name" />
          <input name="p" type="tel" placeholder="Phone" required aria-label="Phone" />
          <textarea name="m" rows="4" placeholder="Your question" aria-label="Your question" />
          <button className="btn" type="submit">Send enquiry</button>
        </form>
      </div>
      <ConfirmationDialog open={isSubmitted} onClose={() => setIsSubmitted(false)} />
    </section>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Section id="programs" title="Programs" sub="Choose a discipline. Every program welcomes beginners.">
          <div className="grid">{D.programs.map(([t, p]) => <Card key={t} title={t}>{p}</Card>)}</div>
        </Section>
        <Section id="coaches" alt title="Our coaches" sub="Certified, experienced and active in competition.">
          <div className="grid">
            {D.coaches.map((c) => (
              <Card key={c.name} title={c.name} top={c.founder ? <img className="fp" src={founder} alt={`${c.name}, coach`} width="400" height="400" /> : <Ph label="Coach photo" />}>{c.text}</Card>
            ))}
          </div>
        </Section>
        <Section id="achievements" title="Achievements" sub="International and national medals, awards and championships.">
          <div className="grid">{D.achievements.map(([t, p]) => <Card key={t} title={t}>{p}</Card>)}</div>
          <h2 style={{ marginTop: 56 }}>Champion students</h2>
          <p className="sub">Results from our students at district, state and national level.</p>
          <div className="grid">{D.champions.map((s, i) => <Card key={i} title={s} top={<Ph label="Student photo" />}>[Add result and year]</Card>)}</div>
        </Section>
        <Section id="branches" alt title="Branches" sub="Find us and see class days.">
          <div className="grid">
            {D.branches.map(([t, p]) => (
              <Card key={t} title={t}>{p}<br />{D.ADDRESS}<br />Coach: Divyanshi Pal / Harsh Chauchan <br /><a href={D.MAPS}><img width="32" height="32" src="https://img.icons8.com/color/48/google-maps.png" alt="google-maps" />Open in Google Maps</a></Card>
            ))}
          </div>
        </Section>
        <Section id="timings" title="Classes & timings" sub="Classes run Monday to Saturday. Exact batch times vary, so add yours in data.js.">
          <div className="scroll">
            <table>
              <thead><tr><th>Batch</th><th>Days</th><th>Time</th><th>Age group</th></tr></thead>
              <tbody>{D.batches.map((r, i) => <tr key={i}>{r.map((c, j) => <td key={j}>{c}</td>)}</tr>)}</tbody>
            </table>
          </div>
        </Section>
        <Admission />
        <Section id="fees" title="Fees & membership" sub="Fees were not available online. Add your plans in data.js.">
          <div className="grid">
            {D.fees.map(([t, tag, price]) => (
              <div className="card" key={t}><span className="tag">{tag}</span><h3>{t}</h3><div className="price">{price}</div><p>Admission fee and uniform extra.</p></div>
            ))}
          </div>
        </Section>
        <Section id="events" alt title="Events & championships" sub="Upcoming and recent tournaments, grading exams and camps.">
          <div className="grid">{D.events.map(([t, p], i) => <Card key={i} title={t}>{p}</Card>)}</div>
        </Section>
        <Section id="gallery" title="Photo & video gallery" sub="Training, tournaments and celebrations.">
          <div className="grid">{D.gallery.map((g) => <Ph key={g} label={g} />)}</div>
        </Section>
        <Section id="media" alt title="In the news" sub="Newspaper and media coverage of our students and events.">
          <div className="grid">{D.media.map(([t, p], i) => <Card key={i} title={t} top={<Ph label="Clipping" />}>{p}</Card>)}</div>
        </Section>
        <Section id="reviews" title="Parents & students say" sub="Rated 4.8 out of 5 by 87 reviewers on Lyfskills. Add parent and student testimonials in data.js.">
          <div className="grid">{D.reviews.map(([t, p], i) => <Card key={i} title={t}>{p}</Card>)}</div>
        </Section>
        <Section id="affiliations" alt title="Affiliations & recognitions" sub="Add your federation logos and certificates here.">
          <div className="grid">{D.affiliations.map((a) => <Card key={a} title={a}>Add logo and registration details here.</Card>)}</div>
        </Section>
        <Contact />
      </main>
      <footer>
        <p>© 2026 Super Seven Sports Academy, Indore. All rights reserved.</p>
        <p style={{ marginTop: 8 }}><a href="#about">About</a><a href="#programs">Programs</a><a href="#contact">Contact</a></p>
      </footer>
      <a className="wa" href={wa()} aria-label="Chat with us on WhatsApp">
        <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
          <path d="M27.3 4.7A15.8 15.8 0 0 0 2.8 23.8L1 31l7.4-1.9a15.8 15.8 0 0 0 18.9-24.4ZM16 28a12 12 0 0 1-6.1-1.7l-.4-.2-4.4 1.1 1.2-4.3-.3-.4A12 12 0 1 1 16 28Zm6.6-8.9c-.4-.2-2.4-1.2-2.8-1.3-.4-.1-.7-.2-1 .2-.3.4-1.1 1.3-1.3 1.6-.2.3-.5.3-.9.1a9.7 9.7 0 0 1-2.8-1.7 10.7 10.7 0 0 1-2-2.5c-.2-.4 0-.6.1-.8l.6-.7c.2-.2.2-.4.3-.7.1-.2 0-.5 0-.7-.1-.2-1-2.3-1.3-3.1-.3-.8-.7-.7-1-.7h-.8c-.3 0-.7.1-1 .5-.4.4-1.4 1.3-1.4 3.3s1.4 3.8 1.6 4.1c.2.3 2.8 4.3 6.8 6 .9.4 1.7.7 2.2.9.9.3 1.8.3 2.4.2.7-.1 2.4-1 2.7-1.9.3-.9.3-1.7.2-1.9-.1-.2-.4-.3-.8-.5Z" />
        </svg>
      </a>
    </>
  )
}
