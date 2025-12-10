import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { PYTHON_7_DAYS_CHALLENGES, PythonDay } from './python-7-days-challenges.data';

@Component({
  selector: 'cd-python-7-days-challenge',
  standalone: true,
  imports: [RouterLink],
  styleUrls: ['./python-7-days-challenge.component.css'],
  templateUrl: './python-7-days-challenge.view.html'
})
export class Python7DaysChallengeComponent {
  readonly days: PythonDay[] = PYTHON_7_DAYS_CHALLENGES;

  currentIndex = 0;
  private readonly notesStoragePrefix = 'py7-notes-';
  currentNote = '';

  get currentDay(): PythonDay {
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

    this.title.setTitle('7 Days Python Challenge — CodeDaily');
    this.meta.updateTag({
      name: 'description',
      content:
        'Learn Python fundamentals in 7 days with small, console-based scripts, daily challenges, starter code, and a notes area.',
    });
  }
}
