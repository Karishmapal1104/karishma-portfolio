import { useEffect, useRef, useState } from "react";
import { profile, experience, projects, skills, education, highlights, stats } from "./data.js";

/* ---------- icons ---------- */
const s = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
const icons = {
  mail: <g {...s}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></g>,
  phone: <path {...s} d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />,
  pin: <g {...s}><path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></g>,
  star: <polygon {...s} points="12 2 15 9 22 9.5 17 14.5 18.5 22 12 18 5.5 22 7 14.5 2 9.5 9 9" />,
  linkedin: <path fill="currentColor" d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />,
  github: <path fill="currentColor" d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3z" />,
};
const Icon = ({ name }) => (
  <svg className="icon" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">{icons[name]}</svg>
);

/* ---------- animation helpers ---------- */
const reduceMotion = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function Reveal({ children, delay = 0, as: Tag = "div", className = "" }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) { setSeen(true); return; }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setSeen(true); io.disconnect(); }
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} className={`reveal ${seen ? "in" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  );
}

function ProgressBar() {
  const bar = useRef(null);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const p = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight);
      if (bar.current) bar.current.style.transform = `scaleX(${p})`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div className="progress" ref={bar} aria-hidden="true" />;
}

const Section = ({ id, title, children }) => (
  <section id={id} className="section" aria-labelledby={`${id}-t`}>
    <Reveal><h2 id={`${id}-t`}>{title}</h2></Reveal>
    {children}
  </section>
);

const contact = [
  ["mail", "Email", `mailto:${profile.email}`],
  ["phone", "Phone", `tel:${profile.phone}`],
  ["linkedin", "LinkedIn", profile.linkedin],
  ["github", "GitHub", profile.github],
];

const ContactIcons = ({ className = "", style }) => (
  <ul className={`contact ${className}`} style={style}>
    {contact.map(([icon, label, href]) => (
      <li key={icon}>
        <a href={href} aria-label={label} title={label} {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}>
          <Icon name={icon} />
        </a>
      </li>
    ))}
  </ul>
);

export default function App() {
  return (
    <>
      <ProgressBar />
      <header className="topbar">
        <a className="brand" href="#top">{profile.name}</a>
        <nav aria-label="Sections">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#achievements">Achievements</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <span className="blob b1" aria-hidden="true" />
          <span className="blob b2" aria-hidden="true" />
          <div className="hero-text">
            <p className="hello" style={{ "--d": "0ms" }}>Hello, I am</p>
            <h1 style={{ "--d": "120ms" }}>{profile.name}</h1>
            <p className="doing" style={{ "--d": "240ms" }}>Computer Engineer</p>
            <p className="lead" style={{ "--d": "360ms" }}>{profile.intro}</p>
            <p className="where" style={{ "--d": "440ms" }}><Icon name="pin" /> {profile.location}</p>
            <ContactIcons style={{ "--d": "520ms" }} />
            <div className="actions" style={{ "--d": "620ms" }}>
              <a className="btn primary" href={profile.resume} download>Download resume</a>
              <a className="btn" href="#projects">See my work</a>
            </div>
          </div>
          <div className="photo-wrap" aria-hidden="false">
            <div className="ring" aria-hidden="true" />
            <img className="photo" src="/photo.jpg" alt={`Portrait of ${profile.name}`} width="640" height="640" />
          </div>
        </section>

        <ul className="stats" aria-label="Highlights">
          {stats.map((st, i) => (
            <Reveal as="li" key={st.big} delay={i * 120}><strong>{st.big}</strong><span>{st.label}</span></Reveal>
          ))}
        </ul>

        <Section id="projects" title="Projects">
          <div className="projects">
            {projects.map((p, i) => (
              <Reveal as="article" className="project" key={p.name} delay={i * 120}>
                <div className="row"><h3>{p.name}</h3><span className="result">{p.result}</span></div>
                <p className="sub">{p.sub}</p>
                <p>{p.text}</p>
                <ul className="tags">{p.tags.map((t) => <li key={t}>{t}</li>)}</ul>
                {p.link && <a className="textlink" href={p.link} target="_blank" rel="noreferrer"><Icon name="github" /> View source on GitHub</a>}
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <ol className="timeline">
            {experience.map((e, i) => (
              <Reveal as="li" key={e.org} delay={i * 120}>
                <div className="row"><h3>{e.title}, {e.org}</h3><span className="meta">{e.when} ({e.mode})</span></div>
                <ul>{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
              </Reveal>
            ))}
          </ol>
        </Section>

        <Section id="skills" title="Skills">
          <Reveal className="skillbox">
            {skills.map((g) => (
              <div key={g.group} className="skillgroup">
                <h3>{g.group}</h3>
                <ul>{g.items.map((it, i) => <li key={it} className="chip" style={{ "--i": i }}>{it}</li>)}</ul>
              </div>
            ))}
          </Reveal>
        </Section>

        <Section id="achievements" title="Achievements and certificates">
          <ul className="awards">
            {highlights.map((h, i) => (
              <Reveal as="li" key={h.text} delay={i * 90}>
                <Icon name="star" />
                <p>{h.text}{h.link && <> <a className="textlink" href={h.link} target="_blank" rel="noreferrer">{h.label}</a></>}</p>
              </Reveal>
            ))}
          </ul>
        </Section>

        <Section id="education" title="Education">
          <ul className="plain">
            {education.map((e, i) => (
              <Reveal as="li" key={e.school} delay={i * 90}>
                <div className="row"><h3>{e.school}</h3><span className="meta">{e.when}</span></div>
                <p>{e.detail}</p>
              </Reveal>
            ))}
          </ul>
        </Section>
      </main>

      <footer className="footer">
        <p>Open to internships and entry-level roles. Let's connect.</p>
        <ContactIcons className="center" />
      </footer>
    </>
  );
}
