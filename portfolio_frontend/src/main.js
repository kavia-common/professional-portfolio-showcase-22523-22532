/**
 * Ocean Professional Portfolio - Vite Frontend
 * Modern, minimalist portfolio with blue & amber accents, subtle shadows, rounded corners, gradients, and smooth transitions.
 */
import './style.css'

// PUBLIC_INTERFACE
export function initApp() {
  /**
   * Initializes the portfolio UI, sets up sections, smooth scrolling, mock data rendering, and form handling.
   */
  const app = document.getElementById('app')
  if (!app) return

  app.innerHTML = `
    <header class="header">
      <div class="container nav">
        <a href="#" class="brand" aria-label="Home">
          <span class="brand-badge" aria-hidden="true"></span>
          <span>Alex Ocean</span>
        </a>
        <nav class="nav-links" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="#contact" class="button primary" style="padding:8px 14px;border-radius:8px;">Hire Me</a>
        </nav>
      </div>
    </header>

    <main>
      <section class="hero">
        <div class="container">
          <div class="hero-card fade-in">
            <span class="badge">Available for opportunities</span>
            <h1>Building delightful web experiences with a focus on performance and accessibility.</h1>
            <p>
              I am a frontend engineer specializing in modern JavaScript and design systems.
              I craft robust interfaces with clean code and thoughtful UX.
            </p>
            <div class="cta-row">
              <a class="button primary" href="#projects">View Projects</a>
              <a class="button secondary" href="#about">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" class="section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">About</h2>
            <p class="section-subtitle">Skills, background, and achievements</p>
          </div>
          <div class="about-grid">
            <article class="card fade-in" style="animation-delay:.05s">
              <h3 style="margin:0 0 8px 0;">Who I am</h3>
              <p style="margin:0;">
                I’m a developer with 6+ years of experience crafting web apps with React, Vite, and TypeScript.
                I focus on performance, component reusability, and accessible design.
              </p>
              <div class="kv">
                <div class="kv-item">
                  <strong>Primary</strong>
                  <span>JavaScript (ESNext), TypeScript</span>
                </div>
                <div class="kv-item">
                  <strong>UI/UX</strong>
                  <span>Design systems, Accessibility</span>
                </div>
                <div class="kv-item">
                  <strong>Build</strong>
                  <span>Vite, Vitest, ESlint</span>
                </div>
                <div class="kv-item">
                  <strong>Cloud</strong>
                  <span>Netlify, Vercel</span>
                </div>
              </div>
            </article>
            <aside class="card fade-in" style="animation-delay:.1s">
              <h3 style="margin:0 0 8px 0;">Key Achievements</h3>
              <ul style="padding-left: 18px; margin: 0;">
                <li>Shipped a design system increasing dev velocity by 30%.</li>
                <li>Optimized performance to achieve 95+ Lighthouse scores.</li>
                <li>Led migration to Vite, reducing build times by 60%.</li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section id="projects" class="section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Projects</h2>
            <p class="section-subtitle">Selected work and case studies</p>
          </div>
          <div class="projects-grid" id="projects-grid" aria-live="polite"></div>
        </div>
      </section>

      <section id="contact" class="section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Contact</h2>
            <p class="section-subtitle">Let’s build something great together</p>
          </div>

          <div class="card">
            <form id="contact-form" novalidate>
              <div class="contact-grid">
                <div>
                  <label for="name" style="display:block;margin:0 0 6px 0;font-weight:600;">Name</label>
                  <input id="name" name="name" type="text" class="input" placeholder="Your full name" required aria-required="true" />
                </div>
                <div>
                  <label for="email" style="display:block;margin:0 0 6px 0;font-weight:600;">Email</label>
                  <input id="email" name="email" type="email" class="input" placeholder="you@example.com" required aria-required="true" />
                </div>
              </div>
              <div style="margin-top:14px;">
                <label for="message" style="display:block;margin:0 0 6px 0;font-weight:600;">Message</label>
                <textarea id="message" name="message" class="input textarea" placeholder="Tell me about your project..." required aria-required="true"></textarea>
              </div>
              <div style="margin-top:16px;display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
                <button type="submit" class="button primary">Send Message</button>
                <span id="form-status" style="font-size:14px;color:var(--color-muted);" role="status" aria-live="polite"></span>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="container footer-inner">
        <div>© <span id="year"></span> Alex Ocean. All rights reserved.</div>
        <div>
          <a href="#about">About</a> •
          <a href="#projects">Projects</a> •
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  `

  setupSmoothScroll()
  renderProjects('#projects-grid')
  setupContactForm('#contact-form', '#form-status')
  const yearEl = document.getElementById('year')
  if (yearEl) yearEl.textContent = new Date().getFullYear().toString()
}

// PUBLIC_INTERFACE
export function setupSmoothScroll() {
  /**
   * Enables smooth scrolling for in-page anchor links in the header/nav areas.
   */
  const allLinks = Array.from(document.querySelectorAll('a[href^="#"]'))
  allLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href')
      if (!href || href === '#') return
      const target = document.querySelector(href)
      if (target) {
        e.preventDefault()
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        history.replaceState(null, '', href)
      }
    })
  })
}

// PUBLIC_INTERFACE
export function renderProjects(selector) {
  /**
   * Renders a projects grid with mock data.
   * @param {string} selector - CSS selector for the container to render projects.
   */
  const container = document.querySelector(selector)
  if (!container) return

  const projects = [
    {
      title: 'Design System UI Kit',
      description: 'A scalable component library with tokens and theming.',
      stack: ['Vite', 'TS', 'CSS'],
      role: 'Lead Engineer',
    },
    {
      title: 'Analytics Dashboard',
      description: 'Interactive dashboard with charts and real-time updates.',
      stack: ['React', 'Vite', 'API'],
      role: 'Frontend Dev',
    },
    {
      title: 'Marketing Website',
      description: 'Fast, SEO-friendly site with modern animations.',
      stack: ['Static', 'Vite', 'Netlify'],
      role: 'Fullstack',
    },
    {
      title: 'E-commerce Prototype',
      description: 'Accessible storefront with cart and checkout flows.',
      stack: ['JS', 'Stripe', 'Vite'],
      role: 'Frontend Dev',
    },
    {
      title: 'Docs Platform',
      description: 'Documentation site with search and MDX support.',
      stack: ['MDX', 'Algolia', 'Vite'],
      role: 'Fullstack',
    },
    {
      title: 'Portfolio v3',
      description: 'Personal portfolio with Ocean Professional theme.',
      stack: ['Vite', 'TS', 'Design'],
      role: 'Owner',
    },
  ]

  const fragment = document.createDocumentFragment()

  projects.forEach((p, i) => {
    const card = document.createElement('article')
    card.className = 'project-card fade-in'
    card.style.animationDelay = `${i * 0.04 + 0.04}s`
    card.innerHTML = `
      <div class="project-media" aria-hidden="true"></div>
      <div class="project-body">
        <div class="project-meta">
          <span class="tag">${p.role}</span>
          <span>•</span>
          <span>${p.stack.join(' · ')}</span>
        </div>
        <h3 class="project-title">${p.title}</h3>
        <p style="margin:0;color:var(--color-muted)">${p.description}</p>
      </div>
    `
    fragment.appendChild(card)
  })

  container.innerHTML = ''
  container.appendChild(fragment)
}

// PUBLIC_INTERFACE
export function setupContactForm(formSelector, statusSelector) {
  /**
   * Adds client-side validation and mock submission flow to the contact form.
   * @param {string} formSelector - CSS selector for the form element.
   * @param {string} statusSelector - CSS selector for the status text element.
   */
  const form = document.querySelector(formSelector)
  const status = document.querySelector(statusSelector)
  if (!form || !status) return

  form.addEventListener('submit', async (e) => {
    e.preventDefault()

    const data = new FormData(form)
    const name = (data.get('name') || '').toString().trim()
    const email = (data.get('email') || '').toString().trim()
    const message = (data.get('message') || '').toString().trim()

    if (!name || !email || !message) {
      status.textContent = 'Please complete all fields.'
      status.style.color = 'var(--color-error)'
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      status.textContent = 'Please enter a valid email address.'
      status.style.color = 'var(--color-error)'
      return
    }

    status.textContent = 'Sending...'
    status.style.color = 'var(--color-muted)'

    // Mock async send
    await new Promise((r) => setTimeout(r, 900))

    status.textContent = 'Thanks! Your message has been sent.'
    status.style.color = 'var(--color-primary)'
    form.reset()
  })
}

initApp()
