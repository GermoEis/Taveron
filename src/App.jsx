import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, Github, Linkedin, Moon, Sun } from "lucide-react";
import { base, certificateUrl, siteContent } from "./data/content.js";
import { projectsByLanguage } from "./data/projects.js";

const LANGUAGE_KEY = "portfolio-language";
const THEME_KEY = "portfolio-theme";
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;
const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/GermoEis", Icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/germo-eismann/", Icon: Linkedin },
];

function readStoredPreference(key) {
  if (typeof window === "undefined") return null;

  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeStoredPreference(key, value) {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Storage can be unavailable in private browsing or restricted environments.
  }
}

function getInitialLanguage() {
  return readStoredPreference(LANGUAGE_KEY) === "en" ? "en" : "et";
}

function getInitialTheme() {
  if (typeof window === "undefined") return "dark";
  const stored = readStoredPreference(THEME_KEY);
  if (stored === "light" || stored === "dark") return stored;
  if (document.documentElement.dataset.theme) return document.documentElement.dataset.theme;
  return "dark";
}

function ProjectThumbnail({ project }) {
  const image = project.image ?? project.gallery?.[0]?.src;
  const imageAlt = project.imageAlt ?? project.gallery?.[0]?.alt ?? project.title;

  if (image) {
    return (
      <div className="project-thumbnail">
        <img src={`${base}${image}`} alt={imageAlt} loading="lazy" />
      </div>
    );
  }

  return (
    <div className="project-thumbnail project-thumbnail-workflow" aria-label={project.visualLabel}>
      {project.visualLabel.split(" → ").map((step) => <span key={step}>{step}</span>)}
    </div>
  );
}

function IdentityVisual() {
  return (
    <div className="identity-visual" aria-hidden="true">
      <svg viewBox="0 0 280 220" role="presentation">
        <g className="system-orbits" fill="none">
          <ellipse cx="140" cy="110" rx="94" ry="44" transform="rotate(-24 140 110)" />
          <ellipse cx="140" cy="110" rx="94" ry="44" transform="rotate(28 140 110)" />
          <ellipse cx="140" cy="110" rx="58" ry="25" transform="rotate(-24 140 110)" />
          <path d="M40 163c39-24 69-32 97-52s58-29 101-47" />
          <path d="M45 72c43 13 68 26 92 39s58 29 100 51" />
        </g>

        <g className="system-rails">
          <rect x="101" y="95" width="78" height="34" rx="3" />
          <path d="M114 105h26M114 114h47M151 105h12" />
        </g>

        <g className="system-nodes">
          <circle cx="40" cy="163" r="2.5" />
          <circle cx="238" cy="64" r="2.5" />
          <circle cx="237" cy="162" r="2.5" />
          <circle className="system-node-pulse" cx="140" cy="110" r="3.5" />
        </g>
      </svg>
    </div>
  );
}

function ContactForm({ copy }) {
  const [status, setStatus] = useState("idle");
  const isSubmitting = useRef(false);

  async function handleSubmit(event) {
    event.preventDefault();
    if (isSubmitting.current) return;

    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    isSubmitting.current = true;
    setStatus("submitting");

    try {
      if (!FORMSPREE_ENDPOINT) throw new Error("Missing Formspree endpoint");

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Formspree request failed");

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      isSubmitting.current = false;
    }
  }

  return (
    <div className="contact-form-panel">
      <h3>{copy.title}</h3>
      <p>{copy.help}</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-honeypot" aria-hidden="true">
          <label htmlFor="contact-company">Company</label>
          <input id="contact-company" name="_gotcha" type="text" tabIndex="-1" autoComplete="off" />
        </div>

        <div className="contact-form-field">
          <label htmlFor="contact-name">{copy.name}</label>
          <input id="contact-name" name="name" type="text" autoComplete="name" required />
        </div>

        <div className="contact-form-field">
          <label htmlFor="contact-email">{copy.email}</label>
          <input id="contact-email" name="email" type="email" autoComplete="email" required />
        </div>

        <div className="contact-form-field">
          <label htmlFor="contact-message">{copy.message}</label>
          <textarea id="contact-message" name="message" rows="6" required />
        </div>

        <button className="button button-primary" type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? copy.submitting : copy.submit}
          <ArrowRight size={16} />
        </button>

        <div className="contact-form-feedback" role="status" aria-live="polite" aria-atomic="true">
          {status === "success" ? <p className="is-success">{copy.success}</p> : null}
          {status === "error" ? <p className="is-error" role="alert">{copy.error}</p> : null}
        </div>
      </form>
    </div>
  );
}

function App() {
  const [language, setLanguage] = useState(getInitialLanguage);
  const [theme, setTheme] = useState(getInitialTheme);
  const [activeSection, setActiveSection] = useState("minust");
  const copy = siteContent[language];
  const projects = projectsByLanguage[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = copy.meta.title;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", copy.meta.description);
    writeStoredPreference(LANGUAGE_KEY, language);
  }, [copy.meta, language]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) themeColor.setAttribute("content", theme === "dark" ? "#0a1110" : "#f4f3ee");
    writeStoredPreference(THEME_KEY, theme);
  }, [theme]);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: 901px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reducedMotion.matches) return undefined;

    const root = document.documentElement;
    let currentX = window.innerWidth / 2;
    let currentY = window.innerHeight / 2;
    let targetX = currentX;
    let targetY = currentY;
    let animationFrame = 0;

    function updateSpotlight() {
      currentX += (targetX - currentX) * 0.16;
      currentY += (targetY - currentY) * 0.16;
      root.style.setProperty("--spotlight-x", `${currentX}px`);
      root.style.setProperty("--spotlight-y", `${currentY}px`);

      if (Math.abs(targetX - currentX) > 0.2 || Math.abs(targetY - currentY) > 0.2) {
        animationFrame = window.requestAnimationFrame(updateSpotlight);
      } else {
        animationFrame = 0;
      }
    }

    function handlePointerMove(event) {
      targetX = event.clientX;
      targetY = event.clientY;
      if (!animationFrame) animationFrame = window.requestAnimationFrame(updateSpotlight);
    }

    root.style.setProperty("--spotlight-x", `${currentX}px`);
    root.style.setProperty("--spotlight-y", `${currentY}px`);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      root.style.removeProperty("--spotlight-x");
      root.style.removeProperty("--spotlight-y");
    };
  }, []);

  useEffect(() => {
    const sectionIds = siteContent.et.nav.map((item) => item.href.slice(1));
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    let animationFrame = 0;

    function updateActiveSection() {
      const threshold = Math.min(window.innerHeight * 0.35, 260);
      let current = sectionIds[0];

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= threshold) current = section.id;
      }

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = sectionIds.at(-1) ?? current;
      }

      setActiveSection(current);

      const nextHash = `#${current}`;
      if (window.location.hash !== nextHash) {
        window.history.replaceState(
          window.history.state,
          "",
          `${window.location.pathname}${window.location.search}${nextHash}`,
        );
      }
    }

    function scheduleUpdate() {
      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(() => {
        animationFrame = 0;
        updateActiveSection();
      });
    }

    updateActiveSection();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="site">
      <a className="skip-link" href="#main-content">{copy.controls.skipToContent}</a>
      <div className="cursor-spotlight" aria-hidden="true" />

      <div className="portfolio-layout">
        <aside id="algus" className="identity-panel">
          <div className="identity-sticky">
            <div className="identity-heading">
              <a className="identity-name" href="#minust">Germo Eismann</a>
              <p className="identity-role">{copy.brandSubtitle}</p>
              <p className="identity-intro">{copy.hero.lead}</p>
            </div>

            <nav className="side-nav" aria-label={language === "et" ? "Peamenüü" : "Main navigation"}>
              {copy.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={activeSection === item.href.slice(1) ? "is-active" : undefined}
                  aria-current={activeSection === item.href.slice(1) ? "location" : undefined}
                >
                  <span aria-hidden="true" />
                  {item.label}
                </a>
              ))}
            </nav>

            <IdentityVisual />

            <div className="social-links" aria-label={language === "et" ? "Sotsiaalmeedia" : "Social profiles"}>
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}>
                  <Icon size={19} aria-hidden="true" />
                </a>
              ))}
            </div>

            <div className="identity-controls">
              <div className="language-switch" role="group" aria-label={copy.controls.language}>
                <button
                  type="button"
                  lang="et"
                  aria-label="Eesti keel"
                  aria-pressed={language === "et"}
                  className={language === "et" ? "is-active" : ""}
                  onClick={() => setLanguage("et")}
                >
                  EST
                </button>
                <button
                  type="button"
                  lang="en"
                  aria-label="English language"
                  aria-pressed={language === "en"}
                  className={language === "en" ? "is-active" : ""}
                  onClick={() => setLanguage("en")}
                >
                  ENG
                </button>
              </div>
              <button
                type="button"
                className="theme-toggle"
                aria-label={theme === "dark" ? copy.controls.lightTheme : copy.controls.darkTheme}
                title={theme === "dark" ? copy.controls.lightTheme : copy.controls.darkTheme}
                onClick={() => setTheme((current) => current === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
              </button>
            </div>
          </div>
        </aside>

        <main id="main-content" className="content-column" tabIndex="-1">
          <section id="minust" className="content-section about-content">
            <h2>{copy.about.title}</h2>
            <div className="prose">
              {copy.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </section>

          <section id="projektid" className="content-section work-content">
            <h2>{copy.work.title}</h2>
            <p className="section-lead">{copy.work.lead}</p>
            <div className="project-list">
              {projects.map((project) => {
                return (
                  <article className="project-row" key={project.title}>
                    <ProjectThumbnail project={project} />
                    <div className="project-row-copy">
                      <h3>{project.title}</h3>
                      <p className="project-positioning">{project.problem}</p>
                      <p className="project-description">{project.system}</p>
                      <p className="project-description">{project.simplified}</p>
                      {project.modules ? (
                        <ul className="project-modules">
                          {project.modules.map((module) => (
                            <li key={module.name}>
                              <strong>{module.name}</strong>
                              <span>{module.text}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                      <p className="project-role"><span>{copy.work.roleLabel}:</span> {project.roleShort}</p>
                      <div className="project-meta">
                        <ul className="tech-list">
                          {project.technologies.map((tech) => <li key={tech}>{tech}</li>)}
                        </ul>
                        {project.liveUrl ? (
                          <a href={project.liveUrl} target="_blank" rel="noreferrer">
                            {copy.work.openWebsite} <ArrowUpRight size={13} />
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          <section id="lahendused" className="content-section capabilities-content">
            <h2>{copy.solutions.title}</h2>
            <div className="capability-list">
              {copy.solutions.services.map((service) => (
                <article key={service.title}>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
            <a className="certificate-link" href={certificateUrl} target="_blank" rel="noreferrer">
              {copy.solutions.certificate} <ArrowUpRight size={13} />
            </a>
          </section>

          <section id="tooviis" className="content-section process-content">
            <h2>{copy.process.title}</h2>
            <p className="section-lead">{copy.process.lead}</p>
            <ol className="process-list">
              {copy.process.principles.map((principle, index) => (
                <li key={principle}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{principle}</p>
                </li>
              ))}
            </ol>
          </section>

          <section id="kontakt" className="content-section contact-content">
            <h2>{copy.contact.title}</h2>
            <p className="section-lead">{copy.contact.text}</p>
            <ContactForm copy={copy.contact.form} />
          </section>

          <footer className="content-footer">
            <span>© {new Date().getFullYear()} Germo Eismann</span>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;
