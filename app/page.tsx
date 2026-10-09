import Image from "next/image";

const skills = [
  ["Python", "Intermediate"],
  ["C++", "Intermediate"],
  ["C", "Basic"],
  ["Data Structures", "Core"],
  ["Algorithms", "Core"],
  ["SQL / MySQL", "Database"],
  ["Microcontroller Interfacing", "Embedded"],
  ["Web Development", "Basic"],
  ["Arduino / ESP32", "IoT"],
];

const projects = [
  {
    number: "01",
    title: "Sensor-Integrated Rover",
    tag: "Embedded • IoT",
    description:
      "An Arduino-based rover designed to monitor hazardous or inaccessible areas using ultrasonic, DHT11, GPS, motion, ESP32-CAM and gas sensors.",
    stack: ["Arduino", "ESP32-CAM", "GPS", "DHT11", "Sensors"],
  },
  {
    number: "02",
    title: "Real-Time Livestock Health Monitoring",
    tag: "IoT • Healthcare",
    description:
      "An ESP32-based monitoring system for heart rate, temperature, humidity and animal movement, with wireless transmission to a Flutter dashboard for continuous monitoring and early alerts.",
    stack: ["ESP32", "Flutter", "Arduino IDE", "IoT"],
  },
  {
    number: "03",
    title: "Campus Assistant Robot",
    tag: "Robotics • Automation",
    description:
      "A robotics project designed to assist users in a campus environment through controlled movement, obstacle detection and task-oriented interaction.",
    stack: ["Arduino", "Sensors", "Motors", "Robotics"],
  },
  {
    number: "04",
    title: "Line Following Robot",
    tag: "Robotics • Embedded",
    description:
      "An autonomous robot designed to detect and follow a predefined path using sensors and motor-control logic.",
    stack: ["Arduino", "IR Sensors", "Motor Driver", "Embedded C"],
  },
  {
    number: "05",
    title: "Smart Door Locking System",
    tag: "Embedded • Security",
    description:
      "A microcontroller-based electronic access system designed to control door locking and unlocking through an authentication mechanism.",
    stack: ["Arduino", "Keypad", "Servo Motor", "Embedded"],
  },
  {
    number: "06",
    title: "Stock Market Prediction Website",
    tag: "Machine Learning • Web",
    description:
      "A web-based application that uses historical market data and machine-learning techniques to generate stock prediction results through an interactive interface.",
    stack: ["Python", "Machine Learning", "Web Development", "Data Analysis"],
  },
  {
    number: "07",
    title: "Pest-Affected Leaf Detection",
    tag: "Machine Learning • Image Processing",
    description:
      "A machine-learning project that analyzes leaf images to identify and classify visible pest-related damage.",
    stack: ["Python", "Machine Learning", "Image Processing", "Computer Vision"],
  },
];

function Icon({ name }: { name: string }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (name === "arrow")
    return (
      <svg {...common}>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </svg>
    );

  if (name === "mail")
    return (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    );

  if (name === "phone")
    return (
      <svg {...common}>
        <path d="M7 3h3l1.2 4-2 1.5a16 16 0 0 0 6.3 6.3l1.5-2 4 1.2v3c0 1.1-.9 2-2 2C10.2 19 5 13.8 5 7c0-1.1.9-2 2-2Z" />
      </svg>
    );

  if (name === "download")
    return (
      <svg {...common}>
        <path d="M12 3v12" />
        <path d="m7 10 5 5 5-5" />
        <path d="M5 21h14" />
      </svg>
    );

  if (name === "external")
    return (
      <svg {...common}>
        <path d="M14 4h6v6" />
        <path d="M10 14 20 4" />
        <path d="M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5" />
      </svg>
    );

  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="8" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#home" aria-label="Kiruthick Kumar home">
          KRK<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#certificates">Certificates</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          className="nav-cta"
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Resume <Icon name="external" />
        </a>
      </nav>

      <section id="home" className="hero section-pad">
        <div className="hero-copy reveal">
          <p className="eyebrow">
            <span /> ELECTRONICS & COMMUNICATION ENGINEERING
          </p>

          <h1>
            From <em>circuits</em>
            <br />
            to real-world <strong>systems.</strong>
          </h1>

          <p className="hero-text">
            I&apos;m K. R. Kiruthick Kumar — an ECE student interested in
            electronics, embedded systems, IoT and practical engineering.
            My journey includes hands-on projects and industry exposure at
            Kaynes Technology India Limited.
          </p>

          <div className="hero-actions">
            <a className="button button-dark" href="#experience">
              Explore my journey <Icon name="arrow" />
            </a>

            <a className="button button-light" href="#projects">
              View projects
            </a>
          </div>

          <div className="hero-meta">
            <span>ECE · 2024—2028</span>
            <span>Chennai, India</span>
          </div>
        </div>

        <div className="hero-image-wrap reveal">
          <div className="image-frame">
            <Image
              src="/profile.jpg"
              alt="K. R. Kiruthick Kumar"
              fill
              priority
              sizes="(max-width: 900px) 90vw, 46vw"
              className="hero-image"
            />

            <div className="image-label">
              <span>01</span>
              <span>ENGINEERING JOURNEY</span>
            </div>
          </div>

          <div className="orbit-card">
            <span className="dot" />
            <span>Industry experience</span>
            <strong>Kaynes Technology</strong>
          </div>
        </div>
      </section>

      <section id="about" className="section-pad section-dark">
        <div className="section-head">
          <p className="eyebrow light">
            <span /> 01 — ABOUT
          </p>

          <h2>
            Learning by building.
            <br />
            <em>Growing through experience.</em>
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-lead">
            <p>
              I am an Electronics and Communication Engineering student with a
              strong interest in turning technical concepts into practical
              solutions.
            </p>

            <p>
              My work combines electronics, programming, sensors and
              microcontrollers. My internship at Kaynes Technology India
              Limited gave me direct exposure to an electronics manufacturing
              environment and helped me connect classroom concepts with
              industrial processes.
            </p>
          </div>

          <div className="about-facts">
            <div>
              <span>EDUCATION</span>
              <strong>B.E. ECE</strong>
              <small>Sri Venkateswara College of Engineering</small>
            </div>

            <div>
              <span>INTERESTS</span>
              <strong>Embedded · IoT</strong>
              <small>Electronics · Software · Automation</small>
            </div>

            <div>
              <span>LANGUAGES</span>
              <strong>English · Tamil</strong>
              <small>Telugu — speaking</small>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section-pad">
        <div className="section-head">
          <p className="eyebrow">
            <span /> 02 — INDUSTRY EXPERIENCE
          </p>

          <h2>
            A month inside
            <br />
            <em>electronics manufacturing.</em>
          </h2>
        </div>

        <div className="experience-card">
          <div className="experience-top">
            <div>
              <p className="company-kicker">
                KAYNES TECHNOLOGY INDIA LIMITED
              </p>
              <h3>Production Department</h3>
              <p className="muted">
                Electronics Manufacturing Services (EMS)
              </p>
            </div>

            <div className="date-pill">05 DEC 2025 — 31 DEC 2025</div>
          </div>

          <p className="experience-intro">
            Completed an industry internship in the Production Department,
            gaining practical exposure to manufacturing workflows, quality
            practices, wire-harness assembly and electrical testing.
          </p>

          <div className="work-grid">
            <article>
              <span>01</span>
              <h4>Wire Harness Assembly</h4>
              <p>
                Assembled wire-harness components according to wiring diagrams.
              </p>
            </article>

            <article>
              <span>02</span>
              <h4>Wire Preparation</h4>
              <p>
                Performed wire cutting, stripping and crimping operations.
              </p>
            </article>

            <article>
              <span>03</span>
              <h4>Electrical Testing</h4>
              <p>
                Conducted continuity and short-circuit testing using a
                multimeter.
              </p>
            </article>

            <article>
              <span>04</span>
              <h4>Connector Configuration</h4>
              <p>
                Verified connector pin configuration and correct wire routing.
              </p>
            </article>

            <article>
              <span>05</span>
              <h4>Quality Standards</h4>
              <p>
                Followed quality standards and production guidelines throughout
                the work.
              </p>
            </article>
          </div>

          <div className="experience-bottom">
            <div>
              <span className="small-label">WHAT I TOOK AWAY</span>
              <p>
                Practical understanding of production discipline, electrical
                verification, quality control and how engineering work moves
                through an industrial environment.
              </p>
            </div>

            <a
              className="text-link"
              href="/kaynes-internship-certificate.jpg"
              target="_blank"
              rel="noreferrer"
            >
              View completion certificate <Icon name="arrow" />
            </a>
          </div>
        </div>
      </section>

      <section id="projects" className="section-pad section-paper">
        <div className="section-head">
          <p className="eyebrow">
            <span /> 03 — PROJECTS
          </p>

          <h2>
            Ideas that became
            <br />
            <em>working systems.</em>
          </h2>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-number">{project.number}</div>
              <p className="project-tag">{project.tag}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="stack">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section-pad">
        <div className="section-head">
          <p className="eyebrow">
            <span /> 04 — TECHNICAL SKILLS
          </p>

          <h2>
            A toolkit that
            <br />
            <em>keeps expanding.</em>
          </h2>
        </div>

        <div className="skills-grid">
          {skills.map(([name, level], index) => (
            <div className="skill-row" key={name}>
              <span className="skill-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <strong>{name}</strong>
              <span>{level}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="certificates" className="section-pad">
        <div className="section-head">
          <p className="eyebrow">
            <span /> 05 — CERTIFICATES
          </p>

          <h2>
            Proof of
            <br />
            <em>the journey.</em>
          </h2>
        </div>

        <div className="certificate-grid">
          {/* KAYNES CERTIFICATE */}
          <a
            className="certificate-card featured"
            href="/kaynes-internship-certificate.jpg"
            target="_blank"
            rel="noreferrer"
          >
            <div className="certificate-preview kaynes-preview">
              <Image
                src="/kaynes-internship-certificate.jpg"
                alt="Kaynes Technology internship completion certificate"
                fill
                sizes="(max-width: 900px) 90vw, 50vw"
              />
            </div>

            <div className="certificate-info">
              <span>INTERNSHIP COMPLETION</span>
              <h3>Kaynes Technology India Limited</h3>
              <p>Production Department · EMS · Dec 2025</p>
              <b>Open certificate ↗</b>
            </div>
          </a>

          {/* PROJECT IMAGES PDF */}
          <a
            className="certificate-card"
            href="/project-images.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <div className="certificate-placeholder">
              <span>PROJECT</span>
              <strong>GALLERY</strong>
            </div>

            <div className="certificate-info">
              <span>PROJECT PORTFOLIO</span>
              <h3>Project Images</h3>
              <p>
                A collection of images showcasing my projects in robotics,
                embedded systems, IoT and machine learning.
              </p>
              <b>View project images ↗</b>
            </div>
          </a>

          {/* COLLEGE CERTIFICATES */}
          <a
            className="certificate-card"
            href="/college-certificates.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <div className="certificate-placeholder">
              <span>COLLEGE</span>
              <strong>CERTIFICATES</strong>
            </div>

            <div className="certificate-info">
              <span>DOCUMENT COLLECTION</span>
              <h3>College Certificates</h3>
              <p>
                Additional certificates and academic participation documents.
              </p>
              <b>Open document ↗</b>
            </div>
          </a>
        </div>
      </section>

      <section className="resume-banner section-pad">
        <div>
          <p className="eyebrow light">
            <span /> PROFILE
          </p>

          <h2>
            Want the complete
            <br />
            <em>one-page version?</em>
          </h2>
        </div>

        <a
          className="button button-white"
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Open my resume <Icon name="download" />
        </a>
      </section>

      <footer id="contact" className="footer section-pad">
        <div className="footer-main">
          <div>
            <p className="eyebrow">
              <span /> 06 — CONTACT
            </p>

            <h2>
              Let&apos;s build something
              <br />
              <em>worth talking about.</em>
            </h2>
          </div>

          <div className="contact-links">
            <a href="mailto:ragukiruthick@gmail.com">
              <Icon name="mail" />
              <span>ragukiruthick@gmail.com</span>
            </a>

            <a href="tel:+919940771908">
              <Icon name="phone" />
              <span>+91 9940771908</span>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 K. R. Kiruthick Kumar</span>
          <span>ECE · Electronics · IoT</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
