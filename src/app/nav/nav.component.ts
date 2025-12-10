import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'cd-nav-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="cd-nav">
      <div class="cd-shell">
        <div class="cd-logo">
          <a class="cd-logo-mark" routerLink="/">
            <img src="/assets/cd-logo.png" alt="CodeDaily logo" />
          </a>
          <a class="cd-logo-text" routerLink="/">
            <img
              src="/assets/cd-banner.png"
              alt="CodeDaily"
              class="cd-logo-banner"
            />
          </a>
        </div>

        <nav class="cd-nav-links nav">
          <a
            class="nav-link"
            routerLink="/"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: true }"
          >
            Home
          </a>
          <a class="nav-link" routerLink="/js-7-days" routerLinkActive="active">
            7 Days JS
          </a>
          <a class="nav-link" routerLink="/python-7-days" routerLinkActive="active">
            7 Days Python
          </a>
          <a class="nav-link" routerLink="/js-28-days" routerLinkActive="active">
            28 Days JS
          </a>
          <a class="nav-link" routerLink="/python-28-days" routerLinkActive="active">
            28 Days Python
          </a>
        </nav>
      </div>
    </header>
  `
})
export class NavComponent {}
