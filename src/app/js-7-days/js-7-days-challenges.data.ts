export interface JsDay {
  id: number;
  title: string;
  topic: string;
  challenge: string;
  starterCode: string;
}

export const JS_7_DAYS_CHALLENGES: JsDay[] = [
  {
    id: 1,
    title: 'Variables',
    topic: 'Variables',
    challenge: 'Create 3 variables (name, age, isStudent) and print them.',
    starterCode:
      "let name = 'Alice';\nlet age = 25;\nlet isStudent = true;\n// Your code here\n"
  },
  {
    id: 2,
    title: 'Functions',
    topic: 'Functions',
    challenge: 'Write a function greet(name) that returns "Hello, <name>!".',
    starterCode:
      'function greet(name) {\n  // Your code here\n}\n\n// Call greet with your name\n'
  },
  {
    id: 3,
    title: 'Arrays',
    topic: 'Arrays',
    challenge: 'Given an array of numbers, return the sum.',
    starterCode:
      'const numbers = [1, 2, 3, 4, 5];\n// Your code here\n'
  },
  {
    id: 4,
    title: 'Conditionals',
    topic: 'Conditionals',
    challenge: 'Given a number, return "even" or "odd".',
    starterCode:
      'function evenOrOdd(n) {\n  // Your code here\n}\n\n// Test with a few numbers\n'
  },
  {
    id: 5,
    title: 'Loops',
    topic: 'Loops',
    challenge: 'Print the numbers from 1 to 20.',
    starterCode:
      '// Use a for loop to print numbers 1 through 20\nfor (let i = 1; i <= 20; i++) {\n  // Your code here\n}\n'
  },
  {
    id: 6,
    title: 'String Methods',
    topic: 'String Methods',
    challenge: 'Take a sentence and return it in uppercase.',
    starterCode:
      "const sentence = 'hello world';\n// Your code here\n"
  },
  {
    id: 7,
    title: 'Objects',
    topic: 'Objects',
    challenge:
      'Create an object representing a book (title, author, pages) and print it.',
    starterCode:
      "const book = {\n  title: '',\n  author: '',\n  pages: 0\n};\n// Your code here\n"
  }
];
