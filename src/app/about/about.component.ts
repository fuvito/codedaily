import { Component, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'cd-about',
  standalone: true,
  template: `
    <section class="cd-shell cd-about-page">
      <header class="cd-about-header">
        <div class="cd-about-title-row">
          <img
            src="/assets/cd-banner.png"
            alt="CodeDaily"
            class="cd-about-title-banner"
          />
        </div>
        <p class="cd-about-subtitle">
          A small, focused practice lab for building a consistent daily coding habit.
        </p>
      </header>

      <div class="row g-4 cd-about-grid">
        <div class="col-12 col-lg-7">
          <article class="card h-100 cd-about-card">
            <div class="card-body">
              <h2 class="cd-about-section-title">Purpose</h2>
              <p>
                CodeDaily is a small, focused practice lab for building a
                <strong>daily coding habit</strong>. The goal is to provide short,
                finishable challenges that fit into a busy day, with clear structure
                across 7-day and 28-day tracks so you always know what to do next.
              </p>

              <h2 class="cd-about-section-title mt-4">Challenge Tracks</h2>
              <ul class="cd-about-list">
                <li>
                  <strong>7 Days JavaScript (Basics)</strong> — variables, control flow,
                  functions, and core JS fundamentals.
                </li>
                <li>
                  <strong>28 Days JavaScript (Basic → Advanced)</strong> — from
                  fundamentals to modern JavaScript and TypeScript.
                </li>
                <li>
                  <strong>7 Days Python (Basics)</strong> — console-based Python scripts
                  focusing on fundamentals.
                </li>
                <li>
                  <strong>28 Days Python (Fundamentals → Real World)</strong> — from
                  basics to OOP, data, and APIs.
                </li>
              </ul>
            </div>
          </article>
        </div>

        <div class="col-12 col-lg-5">
          <article class="card h-100 cd-about-card">
            <div class="card-body">
              <h2 class="cd-about-section-title">Technologies</h2>
              <ul class="cd-about-list">
                <li><strong>Framework:</strong> Angular (standalone components, router)</li>
                <li>
                  <strong>Language:</strong> TypeScript for the frontend,
                  JavaScript/Python for challenge code
                </li>
                <li><strong>Styling:</strong> Custom CSS plus Bootstrap utilities</li>
                <li><strong>Build tooling:</strong> Angular CLI</li>
              </ul>

              <h2 class="cd-about-section-title mt-4">Design Principles</h2>
              <ul class="cd-about-list">
                <li>
                  <strong>Daily momentum:</strong> one clear task per day instead of long,
                  unfocused courses.
                </li>
                <li>
                  <strong>Consistency:</strong> shared layouts and styles across
                  JS/Python and 7/28-day tracks.
                </li>
                <li>
                  <strong>Clarity:</strong> plain-language descriptions, explicit
                  concepts, and visible progress.
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>

      <section class="cd-about-footer">
        <div class="cd-about-meta">
          <div>
            <h2 class="cd-about-section-title">Author</h2>
            <p class="mb-1"><strong>Fuat Yazar</strong></p>
            <p class="mb-1">
              <a href="https://www.linkedin.com/in/fuatyazar/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              ·
              <a href="https://github.com/fuvito/codedaily" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </p>
          </div>

          <div>
            <h2 class="cd-about-section-title">Roadmap (high level)</h2>
            <ul class="cd-about-list">
              <li>More subjects: frontend frameworks, backend fundamentals, data tooling</li>
              <li>Supabase-backed backend for saving progress</li>
              <li>Richer progress views and optional scoring/achievements</li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  `,
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  constructor() {
    this.title.setTitle('About CodeDaily — Daily Coding Challenges');
    this.meta.updateTag({
      name: 'description',
      content:
        'Learn what CodeDaily is about: a focused practice lab for daily JavaScript and Python coding challenges, design principles, and roadmap.',
    });
  }
}
