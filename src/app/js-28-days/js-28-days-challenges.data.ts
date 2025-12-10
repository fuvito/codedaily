export interface Js28Day {
  id: number;
  title: string;
  topic: string;
  challenge: string;
  starterCode?: string;
}

export const JS_28_DAYS_CHALLENGES: Js28Day[] = [
  {
    id: 1,
    title: 'Variables & Data Types',
    topic: 'WEEK 1 — JavaScript Fundamentals',
    challenge: 'Create variables of all JS types, print them, and convert between types.',
    starterCode:
      "let count = 0;\nlet name = 'Alex';\nlet isActive = true;\n// Try logging them and changing their values\n"
  },
  {
    id: 2,
    title: 'Operators & Expressions',
    topic: 'WEEK 1 — JavaScript Fundamentals',
    challenge: 'Build a simple calculator using +, -, *, / and % with custom inputs.',
    starterCode:
      'const a = 10;\nconst b = 3;\n// Your code here: try different operators and log results\n'
  },
  {
    id: 3,
    title: 'Conditionals',
    topic: 'WEEK 1 — JavaScript Fundamentals',
    challenge: 'Write a function that grades a test score using if/else and ternaries.',
    starterCode:
      'function grade(score) {\n  // Your code here\n}\n\n// Test with a few scores\n'
  },
  {
    id: 4,
    title: 'Arrays',
    topic: 'WEEK 1 — JavaScript Fundamentals',
    challenge:
      'Implement a function that returns the largest, smallest, and average of an array.',
    starterCode:
      'const values = [3, 7, 2, 9, 4];\n// Your code here\n'
  },
  {
    id: 5,
    title: 'Loops',
    topic: 'WEEK 1 — JavaScript Fundamentals',
    challenge: 'Print numbers 1–100 but skip multiples of 3 and break at 80.',
    starterCode:
      '// Use a loop and conditionals\nfor (let i = 1; i <= 100; i++) {\n  // Your code here\n}\n'
  },
  {
    id: 6,
    title: 'Functions',
    topic: 'WEEK 1 — JavaScript Fundamentals',
    challenge:
      'Write a reusable function to format names ("john doe" → "John Doe").',
    starterCode:
      'function formatName(raw) {\n  // Your code here\n}\n\n// Try calling formatName("john doe")\n'
  },
  {
    id: 7,
    title: 'String & Array Methods',
    topic: 'WEEK 1 — JavaScript Fundamentals',
    challenge:
      'Reverse words of a sentence without using .reverse() on the whole string.',
    starterCode:
      "const sentence = 'hello world from js';\n// Your code here\n"
  },
  {
    id: 8,
    title: 'Objects',
    topic: 'WEEK 2 — Intermediate JavaScript Concepts',
    challenge: 'Write a function that deeply clones an object.',
    starterCode:
      'const original = { user: { name: "Alex" }, tags: ["js", "ts"] };\n// Your code here\n'
  },
  {
    id: 9,
    title: 'ES6 Features',
    topic: 'WEEK 2 — Intermediate JavaScript Concepts',
    challenge:
      'Rewrite old JS code using let/const, destructuring, and rest/spread syntax.',
    starterCode:
      'const user = { name: "Alex", age: 30 };\n// Your code here\n'
  },
  {
    id: 10,
    title: 'Array Higher-Order Functions',
    topic: 'WEEK 2 — Intermediate JavaScript Concepts',
    challenge:
      'Using only map/filter/reduce, calculate total revenue from a list of orders.',
    starterCode:
      'const orders = [\n  { amount: 50 },\n  { amount: 30 },\n  { amount: 20 }\n];\n// Your code here\n'
  },
  {
    id: 11,
    title: 'Dates & Timers',
    topic: 'WEEK 2 — Intermediate JavaScript Concepts',
    challenge: 'Build a countdown timer to a given date.',
    starterCode:
      'const target = new Date();\n// Your code here\n'
  },
  {
    id: 12,
    title: 'Error Handling',
    topic: 'WEEK 2 — Intermediate JavaScript Concepts',
    challenge: 'Create a function that validates JSON strings using try/catch.',
    starterCode:
      'function isValidJson(text) {\n  // Your code here\n}\n'
  },
  {
    id: 13,
    title: 'DOM Basics (Simulated)',
    topic: 'WEEK 2 — Intermediate JavaScript Concepts',
    challenge: 'Simulate a todo list with add/remove/update operations.',
    starterCode:
      'let todos: string[] = [];\n// Your code here\n'
  },
  {
    id: 14,
    title: 'Modules',
    topic: 'WEEK 2 — Intermediate JavaScript Concepts',
    challenge:
      'Split your code into modules such as utils, numbers, strings, etc., and wire them together.',
    starterCode:
      '// Imagine separate modules, sketch imports/exports in comments here.\n// Your code here\n'
  },
  {
    id: 15,
    title: 'TypeScript Basics',
    topic: 'WEEK 3 — TypeScript + Advanced JavaScript',
    challenge:
      'Convert existing JS functions into TS with proper types and interfaces.',
    starterCode:
      '// Start from a plain JS function and add types.\n// Your code here\n'
  },
  {
    id: 16,
    title: 'Union, Intersection & Literal Types',
    topic: 'WEEK 3 — TypeScript + Advanced JavaScript',
    challenge:
      'Build a function that accepts multiple shape types and calculates area using unions and narrowing.',
    starterCode:
      '// type Shape = ...;\n// function area(shape: Shape) { ... }\n// Your code here\n'
  },
  {
    id: 17,
    title: 'Generics',
    topic: 'WEEK 3 — TypeScript + Advanced JavaScript',
    challenge: 'Build a reusable wrapInArray<T>(item: T) generic utility.',
    starterCode:
      '// function wrapInArray<T>(item: T): T[] { ... }\n// Your code here\n'
  },
  {
    id: 18,
    title: 'Classes & OOP',
    topic: 'WEEK 3 — TypeScript + Advanced JavaScript',
    challenge: 'Build User, Admin, and Guest classes with inheritance.',
    starterCode:
      'class User {\n  // Your code here\n}\n\n// Define Admin and Guest subclasses\n'
  },
  {
    id: 19,
    title: 'Promises',
    topic: 'WEEK 3 — TypeScript + Advanced JavaScript',
    challenge:
      'Create a fake API call using setTimeout and return a Promise with resolve/reject.',
    starterCode:
      'function fakeApi(): Promise<string> {\n  // Your code here\n}\n'
  },
  {
    id: 20,
    title: 'Async/Await',
    topic: 'WEEK 3 — TypeScript + Advanced JavaScript',
    challenge:
      'Rewrite the previous Promise-based challenge using async/await plus error handling.',
    starterCode:
      'async function loadData() {\n  // Your code here\n}\n'
  },
  {
    id: 21,
    title: 'Fetch API + Data Handling',
    topic: 'WEEK 3 — TypeScript + Advanced JavaScript',
    challenge:
      'Use fetch to call a mock API, validate the response, and transform the data.',
    starterCode:
      'async function fetchData() {\n  const res = await fetch("/api");\n  // Your code here\n}\n'
  },
  {
    id: 22,
    title: 'Closures',
    topic: 'WEEK 4 — Expert Level',
    challenge:
      'Implement a counter function that supports .increment() and .reset() using closures.',
    starterCode:
      'function createCounter() {\n  // Your code here\n}\n'
  },
  {
    id: 23,
    title: 'Recursion',
    topic: 'WEEK 4 — Expert Level',
    challenge: 'Build a recursive function to flatten a deeply nested array.',
    starterCode:
      'function flatten(input: any[]): any[] {\n  // Your code here\n}\n'
  },
  {
    id: 24,
    title: 'Functional Programming',
    topic: 'WEEK 4 — Expert Level',
    challenge:
      'Create a pure function pipeline that composes 3 functions into one combined function.',
    starterCode:
      '// const pipeline = compose(fn1, fn2, fn3);\n// Your code here\n'
  },
  {
    id: 25,
    title: 'Advanced TypeScript: Utility Types',
    topic: 'WEEK 4 — Expert Level',
    challenge: 'Rebuild a Partial<T> or Pick<T> utility type manually.',
    starterCode:
      '// type MyPartial<T> = ...;\n// Your code here\n'
  },
  {
    id: 26,
    title: 'Data Structures',
    topic: 'WEEK 4 — Expert Level',
    challenge: 'Implement your own Stack or Queue class in TypeScript.',
    starterCode:
      'class Stack<T> {\n  // Your code here\n}\n'
  },
  {
    id: 27,
    title: 'Algorithms',
    topic: 'WEEK 4 — Expert Level',
    challenge:
      'Build a function to detect duplicates in an array with O(n) time complexity.',
    starterCode:
      'function hasDuplicates(values: any[]): boolean {\n  // Your code here\n}\n'
  },
  {
    id: 28,
    title: 'Architecture + Final Challenge',
    topic: 'WEEK 4 — Expert Level',
    challenge:
      'Build a small mini-project combining everything learned (fetch, async/await, types, classes, array methods, error handling, modules). For example: a “GitHub User Explorer” that fetches repos, sorts them by stars, and displays a summary.',
    starterCode:
      '// Sketch your app structure in comments, then start coding step by step.\n'
  }
];
