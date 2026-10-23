import { profile, experience, projects, skills, education, highlights, stats } from "./data.js";

const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
const icons = {
  mail: <g {...stroke}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></g>,
  phone: <path {...stroke} d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />,
  pin: <g {...stroke}><path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></g>,
  linkedin: <path fill="currentColor" d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />,
  github: <path fill="currentColor" d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3z" />,
};
const Icon = ({ name }) => (
  <svg className="icon" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">{icons[name]}</svg>
);

const links = [
  ["mail", profile.email, `mailto:${profile.email}`],
  ["phone", profile.phone, `tel:${profile.phone}`],
  ["linkedin", "LinkedIn", profile.linkedin],
  ["github", "GitHub", profile.github],
];

const Section = ({ id, title, children }) => (
  <section id={id} className="section" aria-labelledby={`${id}-t`}>
    <h2 id={`${id}-t`}>{title}</h2>
    {children}
  </section>
);

export default function App() {
  return (
    <div className="layout">
      <aside className="side">
        <img className="photo" src="/photo.jpg" alt={`Portrait of ${profile.name}`} width="640" height="640" />
        <h1>{profile.name}</h1>
        <p className="role">{profile.role}</p>
        <p className="where"><Icon name="pin" /> {profile.location}</p>
        <ul className="contact">
          {links.map(([icon, label, href]) => (
            <li key={icon}>
              <a href={href} {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}>
                <Icon name={icon} /> <span>{label}</span>
              </a>
            </li>
          ))}
        </ul>
        <a className="btn" href={profile.resume} download>Download resume</a>
        <nav className="sidenav" aria-label="Sections">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
        </nav>
      </aside>

      <main>
        <section className="intro">
          <p className="lead">{profile.intro}</p>
          <p>{profile.about}</p>
        </section>

        <ul className="stats" aria-label="Highlights">
          {stats.map((s) => (
            <li key={s.big}><strong>{s.big}</strong><span>{s.label}</span></li>
          ))}
        </ul>

        <Section id="projects" title="Projects">
          <div className="projects">
            {projects.map((p) => (
              <article key={p.name} className="project">
                <div className="row">
                  <h3>{p.name}</h3>
                  <span className="result">{p.result}</span>
                </div>
                <p className="sub">{p.sub}</p>
                <p>{p.text}</p>
                <ul className="tags">{p.tags.map((t) => <li key={t}>{t}</li>)}</ul>
                {p.link && (
                  <a className="textlink" href={p.link} target="_blank" rel="noreferrer">
                    <Icon name="github" /> View source on GitHub
                  </a>
                )}
              </article>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <ol className="timeline">
            {experience.map((e) => (
              <li key={e.org}>
                <div className="row">
                  <h3>{e.title}, {e.org}</h3>
                  <span className="meta">{e.when} ({e.mode})</span>
                </div>
                <ul>{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="skills" title="Skills">
          <dl className="skills">
            {skills.map((s) => (
              <div key={s.group}><dt>{s.group}</dt><dd>{s.items.join(", ")}</dd></div>
            ))}
          </dl>
        </Section>

        <Section id="education" title="Education">
          <ul className="plain">
            {education.map((e) => (
              <li key={e.school}>
                <div className="row"><h3>{e.school}</h3><span className="meta">{e.when}</span></div>
                <p>{e.detail}</p>
              </li>
            ))}
          </ul>
          <h3 className="subhead">Achievements and certificates</h3>
          <ul className="plain compact">
            {highlights.map((h) => (
              <li key={h.text}>
                {h.text}
                {h.link && <> <a className="textlink" href={h.link} target="_blank" rel="noreferrer">{h.label}</a></>}
              </li>
            ))}
          </ul>
        </Section>

        <footer className="footer">Open to internships and entry-level roles. Email me at <a href={`mailto:${profile.email}`}>{profile.email}</a></footer>
      </main>
    </div>
  );
}
