import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'cd-landing',
  standalone: true,
  imports: [RouterLink],
  styleUrls: ['./landing.component.css'],
  template: `
    <section class="cd-banner" routerLink="/">
      <div class="cd-banner-inner"></div>
    </section>

    <section class="cd-hero row align-items-center g-4">
      <div class="cd-hero-left col-12 col-lg-7">
        <div class="cd-hero-kicker">
          <span class="cd-hero-kicker-dot"></span>
          <span>Practice a little. Learn a lot.</span>
        </div>

        <h1 class="cd-hero-title">
          Ship your
          <span class="cd-hero-highlight">daily coding habit</span>
        </h1>

        <p class="cd-hero-subtitle">
          CodeDaily is a startup-style learning lab: focused JavaScript and Python
          challenges, background notes, and clear tracks from basics to advanced.
        </p>

        <div class="cd-hero-meta">
          <span class="cd-hero-meta-pill">
            <span class="cd-hero-meta-dot"></span>
            7 Days JavaScript (basics)
          </span>
          <span class="cd-hero-meta-pill">
            <span class="cd-hero-meta-dot"></span>
            7 Days Python (basics)
          </span>
          <span class="cd-hero-meta-pill">
            <span class="cd-hero-meta-dot"></span>
            28 Days JavaScript (basic → advanced)
          </span>
          <span class="cd-hero-meta-pill">
            <span class="cd-hero-meta-dot"></span>
            28 Days Python (fundamentals → real world)
          </span>
          <span class="cd-hero-meta-pill">More subjects will be added</span>
        </div>

        <div class="cd-hero-actions">
          <button
            type="button"
            class="cd-btn cd-btn-primary"
            routerLink="/js-7-days"
          >
            Start 7-day JS challenge
          </button>
          <button
            type="button"
            class="cd-btn cd-btn-secondary"
            routerLink="/python-7-days"
          >
            Start 7-day Python challenge
          </button>
          <button
            type="button"
            class="cd-btn cd-btn-tertiary"
            routerLink="/js-28-days"
          >
            View 28-day JS roadmap
          </button>
        </div>

        <p class="cd-hero-note">
          <strong>No scoring yet.</strong>
          Just consistent practice – Supabase-backed progress and more tracks will be added
          later.
        </p>
      </div>

      <aside
        class="cd-hero-right col-12 col-lg-5 mt-4 mt-lg-0"
        aria-label="CodeDaily challenge overview"
      >
        <div class="cd-board">
          <header class="cd-board-header">
            <span>Today&apos;s focus</span>
            <div class="cd-board-badges">
              <span class="cd-board-badge">JavaScript</span>
              <span class="cd-board-badge">Daily</span>
            </div>
          </header>

          <div class="cd-board-list">
            <article class="cd-track cd-track-main">
              <div class="cd-track-text">
                <span class="cd-track-title">7 Days JavaScript Challenge</span>
                <span class="cd-track-meta">Absolute basics · one focused task per day</span>
              </div>
              <span class="cd-track-tag">
                <span class="cd-track-tag-dot"></span>
                Day 1
              </span>
            </article>

            <article class="cd-track">
              <div class="cd-track-text">
                <span class="cd-track-title">7 Days Python Challenge</span>
                <span class="cd-track-meta">Beginner Python · small scripts every day</span>
              </div>
              <span class="cd-track-tag">Python · 7 days</span>
            </article>

            <article class="cd-track">
              <div class="cd-track-text">
                <span class="cd-track-title">28 Days JavaScript Challenge</span>
                <span class="cd-track-meta">From fundamentals to advanced concepts</span>
              </div>
              <span class="cd-track-tag">Basic → Advanced</span>
            </article>

            <article class="cd-track">
              <div class="cd-track-text">
                <span class="cd-track-title">28 Days Python Challenge</span>
                <span class="cd-track-meta">From Python basics to real-world patterns</span>
              </div>
              <span class="cd-track-tag">Python · 28 days</span>
            </article>

            <article class="cd-track">
              <div class="cd-track-text">
                <span class="cd-track-title">More subjects</span>
                <span class="cd-track-meta">New tracks and technologies will be added</span>
              </div>
              <span class="cd-track-tag">Coming soon</span>
            </article>
          </div>
        </div>
      </aside>
    </section>

    <section class="cd-section mt-5">
      <header class="cd-section-header">
        <h2 class="cd-section-title">Daily challenges you can actually finish</h2>
        <p class="cd-section-subtitle">
          Open your editor, read the short background, and complete one focused task.
        </p>
      </header>

      <div class="cd-cards row g-3">
        <div class="col-12 col-md-6">
          <article class="card h-100">
            <div class="card-body">
              <h3 class="card-title cd-card-title">7 Days JavaScript (Basics)</h3>
              <p class="card-text cd-card-meta">
                A one-week intro track covering variables, control flow, functions, and core
                language fundamentals.
              </p>
              <ul class="cd-card-list">
                <li>Beginner-friendly pace</li>
                <li>One concept per day</li>
                <li>Hands-on mini tasks</li>
              </ul>
            </div>
          </article>
        </div>

        <div class="col-12 col-md-6">
          <article class="card h-100">
            <div class="card-body">
              <h3 class="card-title cd-card-title">28 Days JavaScript (Basic → Advanced)</h3>
              <p class="card-text cd-card-meta">
                Deepen your skills with four weeks of practice – from callbacks and promises
                to more advanced patterns.
              </p>
              <ul class="cd-card-list">
                <li>Daily progressive challenges</li>
                <li>Fundamentals &amp; modern JS</li>
                <li>Space to experiment</li>
              </ul>
            </div>
          </article>
        </div>

        <div class="col-12 col-md-6">
          <article class="card h-100">
            <div class="card-body">
              <h3 class="card-title cd-card-title">7 Days Python (Basics)</h3>
              <p class="card-text cd-card-meta">
                A one-week Python intro covering variables, input, lists, loops, functions,
                strings, and dictionaries.
              </p>
              <ul class="cd-card-list">
                <li>Beginner-friendly Python</li>
                <li>Console-based scripts</li>
                <li>One clear challenge per day</li>
              </ul>
            </div>
          </article>
        </div>

        <div class="col-12 col-md-6">
          <article class="card h-100 cd-card-muted">
            <div class="card-body">
              <h3 class="card-title cd-card-title">More subjects coming</h3>
              <p class="card-text cd-card-meta">
                As CodeDaily grows, you&apos;ll get new study subjects and a Supabase-backed
                backend for progress tracking.
              </p>
              <ul class="cd-card-list">
                <li>Additional languages</li>
                <li>Frontend frameworks</li>
                <li>Backend fundamentals</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  `
})
export class LandingComponent {}
