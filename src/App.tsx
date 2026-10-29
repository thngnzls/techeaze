import { useEffect, useState } from "react"

const capabilities = [
  {
    number: "01",
    title: "Product strategy",
    text: "We clarify the problem, the audience, and the smartest path from early idea to valuable product.",
  },
  {
    number: "02",
    title: "Experience design",
    text: "We shape accessible interfaces and journeys that make sophisticated technology feel intuitive.",
  },
  {
    number: "03",
    title: "Product engineering",
    text: "We turn validated concepts into fast, resilient digital experiences built with room to evolve.",
  },
]

const principles = [
  [
    "01",
    "Decisions stay visible",
    "The reasoning, trade-offs, and next steps are documented in plain language.",
  ],
  [
    "02",
    "The work stays connected",
    "Strategy, design, and engineering inform one another from the start.",
  ],
  [
    "03",
    "Quality is not a final pass",
    "Accessibility, resilience, and maintainability shape the work as it is made.",
  ],
]

function Arrow() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M11 6l4 4-4 4" />
    </svg>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="section-label">
      <span />
      {children}
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>("[data-reveal]")
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed")
            observer.unobserve(entry.target)
          }
        }),
      { threshold: 0.06, rootMargin: "0px 0px -30px 0px" },
    )
    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="nav-wrap">
        <nav className="nav container" aria-label="Main navigation">
          <a href="#" className="brand" aria-label="TechEaZe home">
            <img
              className="brand-logo"
              src="/techeaze-logo-white.png"
              alt="TechEaZe"
            />
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={menuOpen ? "open" : ""} />
          </button>
          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
            <a href="#capabilities" onClick={closeMenu}>
              Capabilities
            </a>
            <a href="#rescuar" onClick={closeMenu}>
              RescuAR
            </a>
            <a className="nav-cta" href="#contact" onClick={closeMenu}>
              Start a conversation <Arrow />
            </a>
          </div>
        </nav>
      </header>

      <main id="main">
        <section className="hero container">
          <div className="hero-copy" data-reveal>
            <SectionLabel>Independent digital product studio</SectionLabel>
            <h1>
              Thoughtful technology, <em>clearly made.</em>
            </h1>
            <p className="hero-lede">
              TechEaZe helps turn difficult, meaningful problems into digital
              products people can understand and trust.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">
                Start a conversation <Arrow />
              </a>
              <a className="button secondary" href="#rescuar">
                Explore RescuAR <Arrow />
              </a>
            </div>
            <div className="proof" aria-label="Our approach">
              <span>Strategy-led</span>
              <span>Human-centered</span>
              <span>Built for impact</span>
            </div>
          </div>

          <div className="hero-visual" data-reveal>
            <div className="project-sheet">
              <div className="sheet-scan" aria-hidden="true" />
              <svg
                className="tech-trace"
                viewBox="0 0 460 525"
                aria-hidden="true"
              >
                <path d="M0 104h74l18 18h70l20-20h72" />
                <path d="M460 338h-62l-22-22h-54" />
                <circle cx="254" cy="102" r="3" />
                <circle cx="322" cy="316" r="3" />
              </svg>
              <div className="sheet-head">
                <span>TE / PRODUCT NOTE 001</span>
                <span className="live-label">
                  <i /> CURRENT WORK
                </span>
              </div>
              <div className="sheet-index">R</div>
              <div className="sheet-body">
                <small>RESCUAR — IN DEVELOPMENT</small>
                <h2>Designing calm into critical moments.</h2>
              </div>
              <div className="sheet-foot">
                <div>
                  <small>Problem</small>
                  <span>
                    Emergency information is hard to process under pressure.
                  </span>
                </div>
                <div>
                  <small>Response</small>
                  <span>
                    Contextual AR guidance with a deliberately calm interface.
                  </span>
                </div>
              </div>
              <a href="#rescuar">
                Read the product note <Arrow />
              </a>
              <div className="sequence" aria-hidden="true">
                <span>01</span>
                <i />
                <span>02</span>
                <i />
                <span>03</span>
              </div>
            </div>
            <span className="sheet-caption">
              A current TechEaZe product exploration
            </span>
          </div>
        </section>

        <section id="about" className="section container about">
          <div data-reveal>
            <SectionLabel>About TechEaZe</SectionLabel>
          </div>
          <div className="about-grid">
            <h2 data-reveal>
              Useful technology begins with understanding, not spectacle.
            </h2>
            <div data-reveal>
              <p>
                We’re a digital product studio built around one idea: complexity
                belongs behind the scenes. We pair sharp strategy, thoughtful
                design, and solid engineering to create products people can
                trust.
              </p>
              <div className="clarity-line">
                <span>Complexity</span>
                <i />
                <span>Clarity</span>
              </div>
            </div>
          </div>
        </section>

        <section id="capabilities" className="section container">
          <div className="section-heading" data-reveal>
            <div>
              <SectionLabel>What we do</SectionLabel>
              <h2>
                From first question
                <br />
                to working product.
              </h2>
            </div>
            <p>A connected practice across the decisions that matter most.</p>
          </div>
          <div className="capability-grid">
            {capabilities.map((item) => (
              <article className="capability-card" key={item.title} data-reveal>
                <div className="cap-top">
                  <span>{item.number}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <Arrow />
              </article>
            ))}
          </div>
        </section>

        <section id="rescuar" className="product-section">
          <span id="rescuer" className="sr-only" aria-hidden="true" />
          <div className="container product-grid">
            <div className="product-copy" data-reveal>
              <SectionLabel>Featured product / RescuAR</SectionLabel>
              <span className="status">
                <i /> In development
              </span>
              <h2>Guidance when every second matters.</h2>
              <p>
                RescuAR is an augmented-reality emergency response concept
                designed to help people understand a situation, act with
                clarity, and reach the right help.
              </p>
              <div className="feature-list">
                <div>
                  <span>01</span>
                  <p>
                    <b>See the situation</b>Contextual signals help make hazards
                    easier to recognize.
                  </p>
                </div>
                <div>
                  <span>02</span>
                  <p>
                    <b>Act with clarity</b>Calm, sequential guidance keeps the
                    next step visible.
                  </p>
                </div>
                <div>
                  <span>03</span>
                  <p>
                    <b>Connect to help</b>Escalation paths are immediate and
                    easy to find.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="phone-stage product-screens"
              data-reveal
              aria-label="Selected RescuAR mobile application screens"
            >
              <div className="screen-orbit" aria-hidden="true" />
              <figure className="product-screen screen-alert">
                <img
                  src="/rescuar/flood-alert.webp"
                  alt="RescuAR high-severity flood warning screen"
                  loading="lazy"
                />
                <figcaption>01 / Detect</figcaption>
              </figure>
              <figure className="product-screen screen-guidance">
                <img
                  src="/rescuar/ar-guidance.webp"
                  alt="RescuAR augmented-reality evacuation guidance screen"
                  loading="lazy"
                />
                <figcaption>02 / Guide</figcaption>
              </figure>
              <figure className="product-screen screen-safe">
                <img
                  src="/rescuar/safe-zone.webp"
                  alt="RescuAR safe-zone arrival confirmation screen"
                  loading="lazy"
                />
                <figcaption>03 / Confirm</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="section container process">
          <div className="section-heading" data-reveal>
            <div>
              <SectionLabel>What you can expect</SectionLabel>
              <h2>Trust is built into the process.</h2>
            </div>
            <p>
              A transparent way of working—without theatre or unnecessary
              complexity.
            </p>
          </div>
          <div className="process-grid">
            {principles.map(([number, title, text]) => (
              <article key={number} data-reveal>
                <span>{number}</span>
                <div className="process-node" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact container" data-reveal>
          <div className="contact-art" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <SectionLabel>Let’s make it real</SectionLabel>
          <h2>
            Have a hard problem
            <br />
            worth solving?
          </h2>
          <p>
            We’d like to hear what you’re building and where you want to take
            it.
          </p>
          <a className="button dark" href="mailto:hello@techeaze.com">
            Start a conversation <Arrow />
          </a>
          <a className="email" href="mailto:hello@techeaze.com">
            hello@techeaze.com
          </a>
        </section>
      </main>

      <footer className="footer container">
        <a href="#" className="brand">
          <img
            className="brand-logo brand-logo-footer"
            src="/techeaze-logo-white.png"
            alt="TechEaZe"
          />
        </a>
        <p>Technology made human.</p>
        <div>
          <a href="#about">About</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#rescuar">RescuAR</a>
        </div>
        <span>© {new Date().getFullYear()} TechEaZe</span>
      </footer>
    </div>
  )
}

export default App
