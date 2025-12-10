import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { JS_28_DAYS_CHALLENGES, Js28Day } from './js-28-days-challenges.data';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'cd-js-28-days-challenge',
  standalone: true,
  imports: [RouterLink],
  styleUrls: ['./js-28-days-challenge.component.css'],
  templateUrl: './js-28-days-challenge.component.html'
})
export class Js28DaysChallengeComponent {
  readonly days: Js28Day[] = JS_28_DAYS_CHALLENGES;

  currentIndex = 0;
  private readonly notesStoragePrefix = 'js28-notes-';
  currentNote = '';

  get currentDay(): Js28Day {
    return this.days[this.currentIndex];
  }

  selectDay(index: number): void {
    if (index >= 0 && index < this.days.length) {
      this.currentIndex = index;
      this.loadNoteForCurrentDay();
    }
  }

  goNext(): void {
    if (this.currentIndex < this.days.length - 1) {
      this.currentIndex++;
      this.loadNoteForCurrentDay();
    }
  }

  goPrevious(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.loadNoteForCurrentDay();
    }
  }

  onNoteChange(value: string): void {
    this.currentNote = value;
    const key = this.notesStoragePrefix + this.currentDay.id;
    try {
      localStorage.setItem(key, value);
    } catch {
      // ignore storage errors
    }
  }

  private loadNoteForCurrentDay(): void {
    const key = this.notesStoragePrefix + this.currentDay.id;
    try {
      this.currentNote = localStorage.getItem(key) ?? '';
    } catch {
      this.currentNote = '';
    }
  }

  clearCurrentNote(): void {
    const key = this.notesStoragePrefix + this.currentDay.id;
    try {
      localStorage.removeItem(key);
    } catch {
      // ignore storage errors
    }
    this.currentNote = '';
  }

  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  constructor() {
    this.loadNoteForCurrentDay();

    this.title.setTitle('28 Days JavaScript Challenge — CodeDaily');
    this.meta.updateTag({
      name: 'description',
      content:
        'A 28-day JavaScript roadmap from fundamentals to advanced concepts, with daily challenges, starter code, and notes.',
    });
  }
}
