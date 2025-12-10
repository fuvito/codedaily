import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { Js7DaysChallengeComponent } from './js-7-days/js-7-days-challenge.component';
import { Js28DaysChallengeComponent } from './js-28-days/js-28-days-challenge.component';
import { Python7DaysChallengeComponent } from './python-7-days/python-7-days-challenge.component';
import { Python28DaysChallengeComponent } from './python-28-days/python-28-days-challenge.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'js-7-days',
    component: Js7DaysChallengeComponent
  },
  {
    path: 'js-28-days',
    component: Js28DaysChallengeComponent
  },
  {
    path: 'python-7-days',
    component: Python7DaysChallengeComponent
  },
  {
    path: 'python-28-days',
    component: Python28DaysChallengeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];
