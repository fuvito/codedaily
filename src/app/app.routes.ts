import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { Js7DaysChallengeComponent } from './js-7-days/js-7-days-challenge.component';
import { Js28DaysChallengeComponent } from './js-28-days/js-28-days-challenge.component';

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
  }
];
