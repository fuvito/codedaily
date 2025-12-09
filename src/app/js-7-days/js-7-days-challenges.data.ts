export interface JsDay {
  id: number;
  title: string;
  topic: string;
  challenge: string;
}

export const JS_7_DAYS_CHALLENGES: JsDay[] = [
  {
    id: 1,
    title: 'Variables',
    topic: 'Variables',
    challenge: 'Create 3 variables (name, age, isStudent) and print them.'
  },
  {
    id: 2,
    title: 'Functions',
    topic: 'Functions',
    challenge: 'Write a function greet(name) that returns "Hello, <name>!".'
  },
  {
    id: 3,
    title: 'Arrays',
    topic: 'Arrays',
    challenge: 'Given an array of numbers, return the sum.'
  },
  {
    id: 4,
    title: 'Conditionals',
    topic: 'Conditionals',
    challenge: 'Given a number, return "even" or "odd".'
  },
  {
    id: 5,
    title: 'Loops',
    topic: 'Loops',
    challenge: 'Print the numbers from 1 to 20.'
  },
  {
    id: 6,
    title: 'String Methods',
    topic: 'String Methods',
    challenge: 'Take a sentence and return it in uppercase.'
  },
  {
    id: 7,
    title: 'Objects',
    topic: 'Objects',
    challenge:
      'Create an object representing a book (title, author, pages) and print it.'
  }
];
