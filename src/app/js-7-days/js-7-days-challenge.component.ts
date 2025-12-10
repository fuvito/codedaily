import { Component, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { JsDay, JS_7_DAYS_CHALLENGES } from './js-7-days-challenges.data';

@Component({
  selector: 'cd-js-7-days-challenge',
  standalone: true,
  imports: [RouterLink],
  styleUrls: ['./js-7-days-challenge.component.css'],
  templateUrl: './js-7-days-challenge.component.html'
})
export class Js7DaysChallengeComponent {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  readonly days: JsDay[] = JS_7_DAYS_CHALLENGES;

  currentIndex = 0;
  private readonly notesStoragePrefix = 'js7-notes-';
  currentNote = '';

  get currentDay(): JsDay {
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

  constructor() {
    this.loadNoteForCurrentDay();

    this.title.setTitle('7 Days JavaScript Challenge — CodeDaily');
    this.meta.updateTag({
      name: 'description',
      content:
        'Practice core JavaScript fundamentals over 7 focused days with daily tasks, starter code, and space for notes.',
    });
  }
}
