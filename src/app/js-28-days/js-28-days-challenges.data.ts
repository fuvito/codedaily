export interface Js28Day {
  id: number;
  title: string;
  topic: string;
  challenge: string;
}

export const JS_28_DAYS_CHALLENGES: Js28Day[] = [
  {
    id: 1,
    title: 'Variables & Data Types',
    topic: 'WEEK 1 — JavaScript Fundamentals',
    challenge: 'Create variables of all JS types, print them, and convert between types.'
  },
  {
    id: 2,
    title: 'Operators & Expressions',
    topic: 'WEEK 1 — JavaScript Fundamentals',
    challenge: 'Build a simple calculator using +, -, *, / and % with custom inputs.'
  },
  {
    id: 3,
    title: 'Conditionals',
    topic: 'WEEK 1 — JavaScript Fundamentals',
    challenge: 'Write a function that grades a test score using if/else and ternaries.'
  },
  {
    id: 4,
    title: 'Arrays',
    topic: 'WEEK 1 — JavaScript Fundamentals',
    challenge:
      'Implement a function that returns the largest, smallest, and average of an array.'
  },
  {
    id: 5,
    title: 'Loops',
    topic: 'WEEK 1 — JavaScript Fundamentals',
    challenge: 'Print numbers 1–100 but skip multiples of 3 and break at 80.'
  },
  {
    id: 6,
    title: 'Functions',
    topic: 'WEEK 1 — JavaScript Fundamentals',
    challenge:
      'Write a reusable function to format names ("john doe" → "John Doe").'
  },
  {
    id: 7,
    title: 'String & Array Methods',
    topic: 'WEEK 1 — JavaScript Fundamentals',
    challenge:
      'Reverse words of a sentence without using .reverse() on the whole string.'
  },
  {
    id: 8,
    title: 'Objects',
    topic: 'WEEK 2 — Intermediate JavaScript Concepts',
    challenge: 'Write a function that deeply clones an object.'
  },
  {
    id: 9,
    title: 'ES6 Features',
    topic: 'WEEK 2 — Intermediate JavaScript Concepts',
    challenge:
      'Rewrite old JS code using let/const, destructuring, and rest/spread syntax.'
  },
  {
    id: 10,
    title: 'Array Higher-Order Functions',
    topic: 'WEEK 2 — Intermediate JavaScript Concepts',
    challenge:
      'Using only map/filter/reduce, calculate total revenue from a list of orders.'
  },
  {
    id: 11,
    title: 'Dates & Timers',
    topic: 'WEEK 2 — Intermediate JavaScript Concepts',
    challenge: 'Build a countdown timer to a given date.'
  },
  {
    id: 12,
    title: 'Error Handling',
    topic: 'WEEK 2 — Intermediate JavaScript Concepts',
    challenge: 'Create a function that validates JSON strings using try/catch.'
  },
  {
    id: 13,
    title: 'DOM Basics (Simulated)',
    topic: 'WEEK 2 — Intermediate JavaScript Concepts',
    challenge: 'Simulate a todo list with add/remove/update operations.'
  },
  {
    id: 14,
    title: 'Modules',
    topic: 'WEEK 2 — Intermediate JavaScript Concepts',
    challenge:
      'Split your code into modules such as utils, numbers, strings, etc., and wire them together.'
  },
  {
    id: 15,
    title: 'TypeScript Basics',
    topic: 'WEEK 3 — TypeScript + Advanced JavaScript',
    challenge:
      'Convert existing JS functions into TS with proper types and interfaces.'
  },
  {
    id: 16,
    title: 'Union, Intersection & Literal Types',
    topic: 'WEEK 3 — TypeScript + Advanced JavaScript',
    challenge:
      'Build a function that accepts multiple shape types and calculates area using unions and narrowing.'
  },
  {
    id: 17,
    title: 'Generics',
    topic: 'WEEK 3 — TypeScript + Advanced JavaScript',
    challenge: 'Build a reusable wrapInArray<T>(item: T) generic utility.'
  },
  {
    id: 18,
    title: 'Classes & OOP',
    topic: 'WEEK 3 — TypeScript + Advanced JavaScript',
    challenge: 'Build User, Admin, and Guest classes with inheritance.'
  },
  {
    id: 19,
    title: 'Promises',
    topic: 'WEEK 3 — TypeScript + Advanced JavaScript',
    challenge:
      'Create a fake API call using setTimeout and return a Promise with resolve/reject.'
  },
  {
    id: 20,
    title: 'Async/Await',
    topic: 'WEEK 3 — TypeScript + Advanced JavaScript',
    challenge:
      'Rewrite the previous Promise-based challenge using async/await plus error handling.'
  },
  {
    id: 21,
    title: 'Fetch API + Data Handling',
    topic: 'WEEK 3 — TypeScript + Advanced JavaScript',
    challenge:
      'Use fetch to call a mock API, validate the response, and transform the data.'
  },
  {
    id: 22,
    title: 'Closures',
    topic: 'WEEK 4 — Expert Level',
    challenge:
      'Implement a counter function that supports .increment() and .reset() using closures.'
  },
  {
    id: 23,
    title: 'Recursion',
    topic: 'WEEK 4 — Expert Level',
    challenge: 'Build a recursive function to flatten a deeply nested array.'
  },
  {
    id: 24,
    title: 'Functional Programming',
    topic: 'WEEK 4 — Expert Level',
    challenge:
      'Create a pure function pipeline that composes 3 functions into one combined function.'
  },
  {
    id: 25,
    title: 'Advanced TypeScript: Utility Types',
    topic: 'WEEK 4 — Expert Level',
    challenge: 'Rebuild a Partial<T> or Pick<T> utility type manually.'
  },
  {
    id: 26,
    title: 'Data Structures',
    topic: 'WEEK 4 — Expert Level',
    challenge: 'Implement your own Stack or Queue class in TypeScript.'
  },
  {
    id: 27,
    title: 'Algorithms',
    topic: 'WEEK 4 — Expert Level',
    challenge:
      'Build a function to detect duplicates in an array with O(n) time complexity.'
  },
  {
    id: 28,
    title: 'Architecture + Final Challenge',
    topic: 'WEEK 4 — Expert Level',
    challenge:
      'Build a small mini-project combining everything learned (fetch, async/await, types, classes, array methods, error handling, modules). For example: a “GitHub User Explorer” that fetches repos, sorts them by stars, and displays a summary.'
  }
];
