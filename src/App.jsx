import { useEffect, useState } from 'react'
import './App.css'
import {
  FaJava,
  FaPython,
  FaReact,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
} from 'react-icons/fa'
import {
  SiTypescript,
  SiJavascript,
  SiMysql,
  SiSpringboot,
  SiFirebase,
  SiPostman,
  SiGithubactions,
  SiKotlin,
  SiTailwindcss,
} from 'react-icons/si'

function App() {
  const username = 'leolu3278'

  const [leetcodeStats, setLeetcodeStats] = useState({
    easySolved: 0,
    mediumSolved: 0,
    hardSolved: 0,
    totalSolved: 0,
    loading: true,
    error: false,
  })

  const [activeSegment, setActiveSegment] = useState(null)

  useEffect(() => {
    let cancelled = false

    async function loadLeetcodeStats() {
      try {
        const res = await fetch(`https://leetcode-stats.tashif.codes/${username}`)
        if (!res.ok) throw new Error('Failed to fetch LeetCode stats')

        const data = await res.json()

        const easySolved = Number(data.easySolved || 0)
        const mediumSolved = Number(data.mediumSolved || 0)
        const hardSolved = Number(data.hardSolved || 0)
        const totalSolved = easySolved + mediumSolved + hardSolved

        if (!cancelled) {
          setLeetcodeStats({
            easySolved,
            mediumSolved,
            hardSolved,
            totalSolved,
            loading: false,
            error: false,
          })
        }
      } catch (error) {
        if (!cancelled) {
          setLeetcodeStats({
            easySolved: 0,
            mediumSolved: 0,
            hardSolved: 0,
            totalSolved: 0,
            loading: false,
            error: true,
          })
        }
      }
    }

    loadLeetcodeStats()

    return () => {
      cancelled = true
    }
  }, [username])

  const {
    easySolved,
    mediumSolved,
    hardSolved,
    totalSolved,
    loading: leetcodeLoading,
    error: leetcodeError,
  } = leetcodeStats

  const easyPercent = totalSolved ? (easySolved / totalSolved) * 100 : 0
  const mediumPercent = totalSolved ? (mediumSolved / totalSolved) * 100 : 0
  const hardPercent = totalSolved ? (hardSolved / totalSolved) * 100 : 0

  const circumference = 2 * Math.PI * 72
  const easyArc = (easyPercent / 100) * circumference
  const mediumArc = (mediumPercent / 100) * circumference
  const hardArc = (hardPercent / 100) * circumference

  return (
    <div className="app">
      <header className="navbar">
        <a href='#hero' className="logo">Siming Li</a>

        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#leetcode">LeetCode</a>
          <a href="#tech">Tech Stack</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="hero" className="hero">
          <div className="hero-content">
            <div className="hero-copy">
              <h1>Siming Li</h1>

              <h2>
                Full-Stack Developer focused on React, Java, Python, and backend
                systems.
              </h2>

              <p className="hero-desc">
                M.S. in Computer Science at Pace University. I build practical web
                applications and backend workflows with a focus on clean
                engineering, real-world usability, and scalable project structure.
              </p>

              <p className="hero-meta">
                New York, NY · Open to Software Engineering opportunities
              </p>

              <div className="hero-buttons">
                <a
                  href="./Siming_Li_Resume.pdf"
                  download="Siming_Li_Resume.pdf"
                  className="primary-btn"
                >
                  Resume
                </a>
                <a href="#contact" className="secondary-btn">
                  Contact Me
                </a>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-visual-inner">
              <img
                src="/hero.png"
                alt="Portfolio visual"
                className="hero-image"
              />
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-inner">
            <div className="section-heading about-heading">
              <p className="section-label">About Me</p>
            </div>

            <div className="about-snapshot">
              <div className="about-copy-block">
                <p className="about-lead">
                  Full-Stack Developer with a background in software engineering
                  and hands-on experience building web applications, backend
                  workflows, and practical software solutions.
                </p>

                <p className="about-support">
                  Skilled in React, Java, Python, SQL, and modern development
                  tools, with experience across frontend development, API
                  integration, databases, and structured engineering workflows.
                  Currently pursuing an M.S. in Computer Science at Pace
                  University and seeking Software Engineering opportunities.
                </p>
              </div>

              <div className="snapshot-panel">
                <div className="snapshot-item">
                  <span className="snapshot-label">Education</span>
                  <h4>M.S. in Computer Science</h4>
                  <p>Pace University · Expected Jun 2026</p>
                </div>

                <div className="snapshot-item">
                  <span className="snapshot-label">Focus</span>
                  <h4>Full-Stack Development</h4>
                  <p>Frontend, backend, APIs, and practical engineering workflows</p>
                </div>

                <div className="snapshot-item">
                  <span className="snapshot-label">Strengths</span>
                  <h4>React · Java · Python · SQL</h4>
                  <p>Clean engineering, structured logic, and practical delivery</p>
                </div>

                <div className="snapshot-item">
                  <span className="snapshot-label">Looking For</span>
                  <h4>Software Engineering Roles</h4>
                  <p>Internship, new grad, and SWE opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-inner">
            <div className="section-heading">
              <p className="section-label">Experience</p>
            </div>

            <div className="experience-list">
              <article className="experience-card">
                <div className="experience-top">
                  <div>
                    <h4>Apexus-Tech</h4>
                    <p className="experience-role">Software Development Engineer Intern</p>
                  </div>
                  <span className="experience-time">Jul 2025 – Sep 2025</span>
                </div>

                <ul>
                  <li>
                    Developed an internal analytics dashboard using React and
                    TypeScript to visualize key operational metrics for daily reviews.
                  </li>
                  <li>
                    Integrated REST APIs and internal Python scripts with retry
                    and transformation logic to automate recurring data workflows.
                  </li>
                  <li>
                    Improved system reliability and release quality by resolving
                    issues across frontend components and backend APIs.
                  </li>
                  <li>
                    Authored technical documentation, including setup guides and
                    troubleshooting runbooks, to improve onboarding efficiency.
                  </li>
                </ul>
              </article>

              <article className="experience-card">
                <div className="experience-top">
                  <div>
                    <h4>Fujian Shike Intelligent Technology Co. Ltd.</h4>
                    <p className="experience-role">Software Engineer Intern</p>
                  </div>
                  <span className="experience-time">Mar 2024 – May 2024</span>
                </div>

                <ul>
                  <li>
                    Built an end-to-end PDF-to-dataset pipeline to convert
                    technical documents into structured Markdown and JSON for
                    downstream use.
                  </li>
                  <li>
                    Designed schema-based parsing and deterministic normalization
                    to clean formulas, code blocks, and tables.
                  </li>
                  <li>
                    Improved data quality and consistency through automated
                    normalization of formatting, numerical values, and units
                    across documents.
                  </li>
                  <li>
                    Reconstructed complex tables with LLM-assisted methods into
                    structured formats such as HTML and LaTeX.
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-inner">
            <div className="section-heading">
              <p className="section-label">Projects</p>
            </div>

            <div className="projects-grid">
              <article className="project-card featured-project">
                <div className="project-top">
                  <div>
                    <h4>KneeVision</h4>
                    <p className="project-subtitle">AI-assisted knee X-ray platform</p>
                  </div>
                  <span className="project-year">2026</span>
                </div>

                <p className="project-desc">
                  A web platform for knee X-ray upload, image workflow
                  management, and future osteoarthritis analysis support. Built
                  with a full-stack architecture for practical research-oriented use.
                </p>

                <div className="project-tags">
                  <span>React</span>
                  <span>TypeScript</span>
                  <span>Node.js</span>
                  <span>Express</span>
                  <span>JWT</span>
                </div>

                <div className="project-links">
                  <a
                    href="https://github.com/htmw/STARLABS"
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    View Project
                  </a>
                </div>
              </article>

              <article className="project-card">
                <div className="project-top">
                  <div>
                    <h4>Fitness Habit Builder</h4>
                    <p className="project-subtitle">Android habit tracking app</p>
                  </div>
                  <span className="project-year">2025</span>
                </div>

                <p className="project-desc">
                  Developed an Android habit tracking application using Kotlin
                  and Jetpack Compose with MVVM architecture, Firebase-backed
                  data flow, and external API integration for personalized
                  workout support.
                </p>

                <div className="project-tags">
                  <span>Kotlin</span>
                  <span>Jetpack Compose</span>
                  <span>MVVM</span>
                  <span>Firebase</span>
                  <span>Retrofit</span>
                </div>

                <div className="project-links">
                  <a
                    href="https://github.com/dfox131/cs639project"
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    View Project
                  </a>
                </div>
              </article>

              <article className="project-card">
                <div className="project-top">
                  <div>
                    <h4>ETF</h4>
                    <p className="project-subtitle">Data Analysis</p>
                  </div>
                  <span className="project-year">2024</span>
                </div>

                <p className="project-desc">
                  Automated workflow fetching live U.S. ETF data. Downloads
                  one-year OHLCV data, performs quality checks, and prepares
                  datasets for analysis.
                </p>

                <div className="project-tags">
                  <span>Python</span>
                  <span>Data Pipeline</span>
                </div>

                <div className="project-links">
                  <a
                    href="https://github.com/leolub/ETF"
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    View Project
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="leetcode" className="section">
          <div className="section-inner">
            <div className="section-heading">
              <p className="section-label">LeetCode</p>
            </div>

            <div className="leetcode-showcase">
              <article className="leetcode-left-card">
                <div className="leetcode-card-frame">
                  <img
                    src={`https://leetcard.jacoblin.cool/${username}?theme=nord&font=Noto%20Sans%20Ol%20Chiki`}
                    alt="LeetCode stats card"
                    className="leetcode-api-card"
                  />
                </div>

                <div className="leetcode-live-pill">
                  <span className="leetcode-live-dot"></span>
                  <span>Live coding snapshot</span>
                </div>
              </article>

              <article className="leetcode-right-card">
                <div className="leetcode-right-top">
                  <span className="leetcode-kicker">Solved Breakdown</span>
                </div>

                <div className="leetcode-visual-block">
                  <div className="leetcode-donut-wrap">
                    <div className="leetcode-donut-svg-wrap">
                      <svg viewBox="0 0 220 220" className="leetcode-donut-svg">
                        <circle
                          cx="110"
                          cy="110"
                          r="72"
                          fill="none"
                          stroke="rgba(255,255,255,0.06)"
                          strokeWidth="18"
                        />

                        <circle
                          cx="110"
                          cy="110"
                          r="72"
                          fill="none"
                          stroke="#b8d97c"
                          strokeWidth={activeSegment === 'easy' ? 22 : 18}
                          strokeLinecap="round"
                          strokeDasharray={`${easyArc} ${circumference}`}
                          strokeDashoffset="0"
                          transform="rotate(-90 110 110)"
                          className={`leetcode-segment ${activeSegment === 'easy' ? 'is-active' : ''}`}
                          onMouseEnter={() => setActiveSegment('easy')}
                          onMouseLeave={() => setActiveSegment(null)}
                        />

                        <circle
                          cx="110"
                          cy="110"
                          r="72"
                          fill="none"
                          stroke="#d8b55b"
                          strokeWidth={activeSegment === 'medium' ? 22 : 18}
                          strokeLinecap="round"
                          strokeDasharray={`${mediumArc} ${circumference}`}
                          strokeDashoffset={`-${easyArc}`}
                          transform="rotate(-90 110 110)"
                          className={`leetcode-segment ${activeSegment === 'medium' ? 'is-active' : ''}`}
                          onMouseEnter={() => setActiveSegment('medium')}
                          onMouseLeave={() => setActiveSegment(null)}
                        />

                        <circle
                          cx="110"
                          cy="110"
                          r="72"
                          fill="none"
                          stroke="#d35b6a"
                          strokeWidth={activeSegment === 'hard' ? 22 : 18}
                          strokeLinecap="round"
                          strokeDasharray={`${hardArc} ${circumference}`}
                          strokeDashoffset={`-${easyArc + mediumArc}`}
                          transform="rotate(-90 110 110)"
                          className={`leetcode-segment ${activeSegment === 'hard' ? 'is-active' : ''}`}
                          onMouseEnter={() => setActiveSegment('hard')}
                          onMouseLeave={() => setActiveSegment(null)}
                        />
                      </svg>

                      <div className="leetcode-donut-inner">
                        {leetcodeLoading ? (
                          <>
                            <strong>...</strong>
                            <span>Loading</span>
                          </>
                        ) : leetcodeError ? (
                          <>
                            <strong>--</strong>
                            <span>Unavailable</span>
                          </>
                        ) : activeSegment === 'easy' ? (
                          <>
                            <strong>{easyPercent.toFixed(1)}%</strong>
                            <span>Easy</span>
                          </>
                        ) : activeSegment === 'medium' ? (
                          <>
                            <strong>{mediumPercent.toFixed(1)}%</strong>
                            <span>Medium</span>
                          </>
                        ) : activeSegment === 'hard' ? (
                          <>
                            <strong>{hardPercent.toFixed(1)}%</strong>
                            <span>Hard</span>
                          </>
                        ) : (
                          <>
                            <strong>{totalSolved}</strong>
                            <span>Total Solved</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="leetcode-legend">
                    <div
                      className={`leetcode-legend-item ${activeSegment === 'easy' ? 'is-active' : ''}`}
                      onMouseEnter={() => setActiveSegment('easy')}
                      onMouseLeave={() => setActiveSegment(null)}
                    >
                      <span className="leetcode-dot easy-dot"></span>
                      <span>Easy</span>
                      <strong>{leetcodeLoading ? '...' : `${easyPercent.toFixed(1)}%`}</strong>
                    </div>

                    <div
                      className={`leetcode-legend-item ${activeSegment === 'medium' ? 'is-active' : ''}`}
                      onMouseEnter={() => setActiveSegment('medium')}
                      onMouseLeave={() => setActiveSegment(null)}
                    >
                      <span className="leetcode-dot medium-dot"></span>
                      <span>Medium</span>
                      <strong>{leetcodeLoading ? '...' : `${mediumPercent.toFixed(1)}%`}</strong>
                    </div>

                    <div
                      className={`leetcode-legend-item ${activeSegment === 'hard' ? 'is-active' : ''}`}
                      onMouseEnter={() => setActiveSegment('hard')}
                      onMouseLeave={() => setActiveSegment(null)}
                    >
                      <span className="leetcode-dot hard-dot"></span>
                      <span>Hard</span>
                      <strong>{leetcodeLoading ? '...' : `${hardPercent.toFixed(1)}%`}</strong>
                    </div>
                  </div>
                </div>

                <div className="leetcode-live-pill">
                  <span className="leetcode-live-dot"></span>
                  <span>Difficulty distribution percentage</span>
                </div>

                {leetcodeError && (
                  <p className="leetcode-error-text">
                    Failed to load live stats. The card is still available on the left.
                  </p>
                )}
              </article>
            </div>
          </div>
        </section>

        <section id="tech" className="section">
          <div className="section-inner">
            <div className="section-heading">
              <p className="section-label">Tech Stack</p>
            </div>

            <div className="tech-groups">
              <div className="tech-group">
                <h4 className="tech-group-title">Languages</h4>
                <div className="tech-grid">
                  <div className="tech-card">
                    <FaJava className="tech-icon" />
                    <span>Java</span>
                    <small>Backend / OOP</small>
                  </div>
                  <div className="tech-card">
                    <FaPython className="tech-icon" />
                    <span>Python</span>
                    <small>Automation / Data</small>
                  </div>
                  <div className="tech-card">
                    <SiJavascript className="tech-icon" />
                    <span>JavaScript</span>
                    <small>Frontend</small>
                  </div>
                  <div className="tech-card">
                    <SiTypescript className="tech-icon" />
                    <span>TypeScript</span>
                    <small>Typed Web Apps</small>
                  </div>
                  <div className="tech-card">
                    <SiKotlin className="tech-icon" />
                    <span>Kotlin</span>
                    <small>Android</small>
                  </div>
                  <div className="tech-card">
                    <SiMysql className="tech-icon" />
                    <span>SQL</span>
                    <small>Database Logic</small>
                  </div>
                </div>
              </div>

              <div className="tech-group">
                <h4 className="tech-group-title">Frameworks & Web</h4>
                <div className="tech-grid">
                  <div className="tech-card">
                    <FaReact className="tech-icon" />
                    <span>React</span>
                    <small>Frontend Apps</small>
                  </div>
                  <div className="tech-card">
                    <SiSpringboot className="tech-icon" />
                    <span>Spring Boot</span>
                    <small>Backend Services</small>
                  </div>
                  <div className="tech-card">
                    <FaHtml5 className="tech-icon" />
                    <span>HTML</span>
                    <small>Web Structure</small>
                  </div>
                  <div className="tech-card">
                    <FaCss3Alt className="tech-icon" />
                    <span>CSS</span>
                    <small>Styling</small>
                  </div>
                  <div className="tech-card">
                    <SiTailwindcss className="tech-icon" />
                    <span>Tailwind</span>
                    <small>Utility CSS</small>
                  </div>
                  <div className="tech-card">
                    <SiFirebase className="tech-icon" />
                    <span>Firebase</span>
                    <small>App Services</small>
                  </div>
                </div>
              </div>

              <div className="tech-group">
                <h4 className="tech-group-title">Databases & APIs</h4>
                <div className="tech-grid">
                  <div className="tech-card">
                    <SiMysql className="tech-icon" />
                    <span>MySQL</span>
                    <small>Relational Data</small>
                  </div>
                  <div className="tech-card">
                    <SiPostman className="tech-icon" />
                    <span>Postman</span>
                    <small>API Testing</small>
                  </div>
                  <div className="tech-card">
                    <span className="tech-icon tech-text-icon">API</span>
                    <span>REST APIs</span>
                    <small>Integration</small>
                  </div>
                </div>
              </div>

              <div className="tech-group">
                <h4 className="tech-group-title">Cloud & Data APIs</h4>
                <div className="tech-grid">
                  <div className="tech-card">
                    <span className="tech-icon tech-text-icon">S3</span>
                    <span>Amazon S3</span>
                    <small>Storage</small>
                  </div>
                  <div className="tech-card">
                    <span className="tech-icon tech-text-icon">λ</span>
                    <span>Lambda</span>
                    <small>Serverless</small>
                  </div>
                  <div className="tech-card">
                    <span className="tech-icon tech-text-icon">PS</span>
                    <span>Pub/Sub</span>
                    <small>Messaging</small>
                  </div>
                  <div className="tech-card">
                    <span className="tech-icon tech-text-icon">DF</span>
                    <span>Dataflow</span>
                    <small>Data Pipeline</small>
                  </div>
                </div>
              </div>

              <div className="tech-group">
                <h4 className="tech-group-title">Tools & DevOps</h4>
                <div className="tech-grid">
                  <div className="tech-card">
                    <FaDocker className="tech-icon" />
                    <span>Docker</span>
                    <small>Containerization</small>
                  </div>
                  <div className="tech-card">
                    <FaGitAlt className="tech-icon" />
                    <span>Git</span>
                    <small>Version Control</small>
                  </div>
                  <div className="tech-card">
                    <SiGithubactions className="tech-icon" />
                    <span>GitHub Actions</span>
                    <small>CI / CD</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="section-inner">
            <div className="contact-panel">
              <div className="contact-copy">
                <p className="section-label">Contact</p>
                <p className="contact-desc">
                  I’m currently open to Software Engineering opportunities. Feel
                  free to reach out if you’d like to connect, collaborate, or
                  discuss a role.
                </p>
              </div>

              <div className="contact-links">
                <a href="mailto:lisiming3278@gmail.com" className="contact-card">
                  <span className="contact-card-label">Email</span>
                  <strong>lisiming3278@gmail.com</strong>
                </a>

                <a
                  href="https://github.com/leolub"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-card"
                >
                  <span className="contact-card-label">GitHub</span>
                  <strong>github.com/leolub</strong>
                </a>

                <a
                  href="https://www.linkedin.com/in/-siming-li"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-card"
                >
                  <span className="contact-card-label">LinkedIn</span>
                  <strong>linkedin.com/in/-siming-li</strong>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App