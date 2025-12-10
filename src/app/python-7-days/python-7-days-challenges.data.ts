export interface PythonDay {
  id: number;
  title: string;
  topic: string;
  concepts: string[];
  challenge: string;
  starterCode: string;
  difficulty: string;
}

export const PYTHON_7_DAYS_CHALLENGES: PythonDay[] = [
  {
    id: 1,
    title: 'Variables & Input',
    topic: 'Variables & Input',
    concepts: [
      'Variables',
      'Basic data types (str, int, float, bool)',
      'input()',
      'print()'
    ],
    challenge:
      'Write a program that asks for your name and age, then prints: "Hello <name>, you are <age> years old."',
    starterCode:
      'name = input("Enter your name: ")\nage = input("Enter your age: ")\n# Your code here\n',
    difficulty: 'easy'
  },
  {
    id: 2,
    title: 'Conditionals',
    topic: 'Conditionals',
    concepts: ['if / elif / else', 'Comparison operators'],
    challenge:
      'Write a program that takes a number and prints: "Positive" if it is greater than zero, "Negative" if it is less than zero, and "Zero" otherwise.',
    starterCode: 'num = int(input("Enter a number: ") )\n# Your code here\n',
    difficulty: 'easy'
  },
  {
    id: 3,
    title: 'Lists',
    topic: 'Lists',
    concepts: ['Creating lists', 'Indexing', 'Appending items', 'Getting list length'],
    challenge:
      'Create a list of five numbers. Then print: the first number, the last number, and the sum of all numbers.',
    starterCode: 'numbers = [ ]  # add five numbers\n# Your code here\n',
    difficulty: 'easy'
  },
  {
    id: 4,
    title: 'Loops',
    topic: 'Loops',
    concepts: ['for loops', 'range()', 'Looping through lists'],
    challenge: 'Print all even numbers between 1 and 50.',
    starterCode: '# Your code here\n',
    difficulty: 'easy'
  },
  {
    id: 5,
    title: 'Functions',
    topic: 'Functions',
    concepts: ['def', 'Parameters', 'Return values'],
    challenge: 'Create a function square(n) that returns n squared.',
    starterCode: 'def square(n):\n    # Your code here\n    pass\n',
    difficulty: 'easy'
  },
  {
    id: 6,
    title: 'Strings',
    topic: 'Strings',
    concepts: ['String slicing', '.upper(), .lower(), .replace(), .split()', 'f-strings'],
    challenge:
      'Write a function that reverses the words in a sentence ("hello world" → "world hello").',
    starterCode: 'sentence = ""\n# Your code here\n',
    difficulty: 'easy'
  },
  {
    id: 7,
    title: 'Dictionaries',
    topic: 'Dictionaries',
    concepts: ['Key/value pairs', 'Updating values', 'Iterating dictionaries'],
    challenge:
      'Create a dictionary representing a user with keys "name", "age", and "city". Then print each key and value on a separate line.',
    starterCode:
      'user = {\n    "name": "",\n    "age": 0,\n    "city": ""\n}\n# Your code here\n',
    difficulty: 'easy'
  }
];
