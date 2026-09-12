import { Link } from "react-router-dom";
import "./home_page.css";

const supportRoutes = [
  { number: "01", title: "Plan your day", description: "Browse event timings, participation details, venues, and event-specific rules.", action: "View schedule", to: "/events" },
  { number: "02", title: "Read the general rules", description: "Review the festival-wide requirements before you arrive or take part in an event.", action: "View rules", to: "/rules" },
  { number: "03", title: "Get support", description: "Send a question to the support team when you need help during Semaphore Fest.", action: "Open help desk", to: "/helpdesk" },
];

export default function HomePage() {
  return (
    <div className="home">
      <main id="home" className="home-hero">
        <div className="hero-copy">
          <p className="eyebrow">Semaphore Fest 2026 · September 17–18</p>
          <h1 className="headline-motion">
            <span className="headline-main">Everything you need,</span>
            <span className="headline-accent"> in one place.</span>
          </h1>
          <p className="hero-description">The official support space for Semaphore Fest. Check the programme, understand the guidelines, or get in touch with our team.</p>
          <div className="hero-actions">
            <Link to="/events" className="primary-btn">Explore events</Link>
            <Link to="/helpdesk" className="secondary-btn">Contact support</Link>
          </div>
        </div>
        <aside className="festival-note" aria-label="Festival support information">
          <div className="note-heading">
            <p className="eyebrow">Festival support</p>
            <span className="support-state"><i /> Available throughout the fest</span>
          </div>
          <div className="note-rule" />
          <div className="note-details">
            <div><span>When</span><strong>17–18 September</strong></div>
            <div><span>For</span><strong>Events, rules &amp; queries</strong></div>
          </div>
          <Link to="/rules" className="text-link">Read the general rules <span aria-hidden="true">→</span></Link>
        </aside>
      </main>
      <section id="help" className="help-section" aria-labelledby="help-title">
        <div className="section-intro">
          <p className="eyebrow">Quick assistance</p>
          <h2 id="help-title">Find what you need</h2>
          <p>Clear information for a smoother festival experience.</p>
        </div>
        <div className="help-grid">
          {supportRoutes.map((route) => (
            <article className="help-card" key={route.number}>
              <span className="route-number">{route.number}</span>
              <h3>{route.title}</h3>
              <p>{route.description}</p>
              <Link to={route.to} className="card-btn">{route.action} <span aria-hidden="true">→</span></Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
