import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PYTHON_28_DAYS_CHALLENGES, Python28Day } from './python-28-days-challenges.data';

@Component({
  selector: 'cd-python-28-days-challenge',
  standalone: true,
  imports: [RouterLink],
  styleUrls: ['./python-28-days-challenge.component.css'],
  templateUrl: './python-28-days-challenge.component.html'
})
export class Python28DaysChallengeComponent {
  readonly days: Python28Day[] = PYTHON_28_DAYS_CHALLENGES;

  currentIndex = 0;
  private readonly notesStoragePrefix = 'py28-notes-';
  currentNote = '';

  get currentDay(): Python28Day {
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
  }
}
