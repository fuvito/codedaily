export interface Python28Day {
  id: number;
  title: string;
  topic: string;
  concepts: string[];
  challenge: string;
  starterCode: string;
  difficulty: string;
}

export const PYTHON_28_DAYS_CHALLENGES: Python28Day[] = [
  {
    id: 1,
    title: 'Variables & Input',
    topic: 'WEEK 1 — Fundamentals',
    concepts: ['Variables', 'Data types', 'input()', 'print()'],
    challenge:
      'Ask the user for their name and age, then print: "Hello <name>, you are <age> years old."',
    starterCode:
      'name = input("Enter your name: ")\nage = input("Enter your age: ")\n# Your code here\n',
    difficulty: 'easy'
  },
  {
    id: 2,
    title: 'Conditionals',
    topic: 'WEEK 1 — Fundamentals',
    concepts: ['if / elif / else', 'Comparison operators'],
    challenge:
      'Write a program that checks if a number is positive, negative, or zero.',
    starterCode: 'num = int(input("Enter a number: ") )\n# Your code here\n',
    difficulty: 'easy'
  },
  {
    id: 3,
    title: 'Lists',
    topic: 'WEEK 1 — Fundamentals',
    concepts: ['List creation', 'Indexing', 'Appending', 'len()'],
    challenge:
      'Create a list of five numbers. Print the first, the last, and the sum of all numbers.',
    starterCode: 'numbers = [ ]  # add five numbers\n# Your code here\n',
    difficulty: 'easy'
  },
  {
    id: 4,
    title: 'Loops',
    topic: 'WEEK 1 — Fundamentals',
    concepts: ['for loops', 'range()', 'Looping through lists'],
    challenge: 'Print all even numbers between 1 and 50.',
    starterCode: '# Your code here\n',
    difficulty: 'easy'
  },
  {
    id: 5,
    title: 'Functions',
    topic: 'WEEK 1 — Fundamentals',
    concepts: ['def', 'Parameters', 'Return values'],
    challenge: 'Create a function square(n) that returns n squared.',
    starterCode: 'def square(n):\n    # Your code here\n    pass\n',
    difficulty: 'easy'
  },
  {
    id: 6,
    title: 'Strings',
    topic: 'WEEK 1 — Fundamentals',
    concepts: ['String slicing', 'upper(), lower(), replace(), split()', 'f-strings'],
    challenge:
      'Write a function that reverses the words in a sentence ("hello world" → "world hello").',
    starterCode: 'sentence = ""\n# Your code here\n',
    difficulty: 'easy'
  },
  {
    id: 7,
    title: 'Dictionaries',
    topic: 'WEEK 1 — Fundamentals',
    concepts: ['Key/value pairs', 'Updating values', 'Iterating dictionaries'],
    challenge:
      'Create a user dictionary with name, age, and city. Print each key and value.',
    starterCode:
      'user = {\n    "name": "",\n    "age": 0,\n    "city": ""\n}\n# Your code here\n',
    difficulty: 'easy'
  },
  {
    id: 8,
    title: 'Tuples & Sets',
    topic: 'WEEK 2 — Intermediate Concepts',
    concepts: ['Tuples vs lists', 'Basic set operations', 'Removing duplicates with sets'],
    challenge:
      'Given a list with duplicate items, convert it to a tuple of unique elements using a set.',
    starterCode:
      'items = [1, 2, 2, 3, 3, 3]\n# Your code here\n',
    difficulty: 'medium'
  },
  {
    id: 9,
    title: 'List Comprehensions',
    topic: 'WEEK 2 — Intermediate Concepts',
    concepts: ['Basic list comprehensions', 'Conditional comprehensions', 'Reading vs. writing clarity'],
    challenge:
      'Using a list comprehension, create a list of squares for numbers 1 through 20, but only include even numbers.',
    starterCode: 'numbers = range(1, 21)\n# Your code here\n',
    difficulty: 'medium'
  },
  {
    id: 10,
    title: 'Error Handling',
    topic: 'WEEK 2 — Intermediate Concepts',
    concepts: ['try / except', 'Handling specific exceptions', 'finally blocks'],
    challenge:
      'Write a program that asks for a number and safely handles non-numeric input using try/except.',
    starterCode: 'raw = input("Enter a number: ")\n# Your code here\n',
    difficulty: 'medium'
  },
  {
    id: 11,
    title: 'File Handling',
    topic: 'WEEK 2 — Intermediate Concepts',
    concepts: ['Opening files', 'Reading & writing text', 'with context manager'],
    challenge:
      'Write a script that reads a text file, counts how many lines it has, and prints the result.',
    starterCode:
      'filename = "sample.txt"\n# Your code here\n',
    difficulty: 'medium'
  },
  {
    id: 12,
    title: 'Modules & Imports',
    topic: 'WEEK 2 — Intermediate Concepts',
    concepts: ['Importing standard library modules', 'from ... import ...', 'Creating your own module'],
    challenge:
      'Create a small utility module with a function greet(name) and import it from another file to print a greeting.',
    starterCode:
      '# utils.py\n# def greet(name):\n#     ...\n\n# main.py\n# from utils import greet\n# Your code here\n',
    difficulty: 'medium'
  },
  {
    id: 13,
    title: 'Virtual Environments & Packages',
    topic: 'WEEK 2 — Intermediate Concepts',
    concepts: ['venv basics', 'pip install', 'requirements.txt idea'],
    challenge:
      'Write down the commands to create a virtual environment, activate it, and install the requests package, then import requests in a short script.',
    starterCode:
      '# Commands (as comments) then Python code below\n# python -m venv .venv\n# source .venv/bin/activate  (or .venv\\Scripts\\activate on Windows)\n# pip install requests\n\nimport requests\n# Your code here\n',
    difficulty: 'medium'
  },
  {
    id: 14,
    title: 'Debugging Basics',
    topic: 'WEEK 2 — Intermediate Concepts',
    concepts: ['print debugging', 'Using breakpoint()', 'Reading tracebacks'],
    challenge:
      'Take a small buggy function, add print or breakpoint() calls to find the problem, and fix the bug.',
    starterCode:
      'def divide(a, b):\n    return a / b\n\n# Call divide in a way that raises an exception and then fix the issue\n',
    difficulty: 'medium'
  },
  {
    id: 15,
    title: 'Classes & OOP Basics',
    topic: 'WEEK 3 — Core Python Skills',
    concepts: ['Defining classes', '__init__', 'Instance attributes & methods'],
    challenge:
      'Create a simple class Person with name and age, and a method describe() that prints a friendly description.',
    starterCode:
      'class Person:\n    # Your code here\n    pass\n\n# Create a Person and call describe()\n',
    difficulty: 'medium'
  },
  {
    id: 16,
    title: 'Inheritance & Polymorphism',
    topic: 'WEEK 3 — Core Python Skills',
    concepts: ['Subclassing', 'Method overriding', 'super()'],
    challenge:
      'Create a base class Animal with a speak() method and two subclasses Dog and Cat that override speak(). Iterate over a list of animals and call speak().',
    starterCode:
      'class Animal:\n    # Your code here\n    pass\n\n# Define Dog and Cat subclasses and test them\n',
    difficulty: 'medium'
  },
  {
    id: 17,
    title: 'Dataclasses',
    topic: 'WEEK 3 — Core Python Skills',
    concepts: ['from dataclasses import dataclass', 'Type annotations', 'Automatic __init__'],
    challenge:
      'Use @dataclass to define a simple Book type with title, author, and pages, then create and print a few instances.',
    starterCode:
      'from dataclasses import dataclass\n\n# Your code here\n',
    difficulty: 'medium'
  },
  {
    id: 18,
    title: 'Working With APIs (requests)',
    topic: 'WEEK 3 — Core Python Skills',
    concepts: ['GET requests', 'JSON responses', 'Basic error handling'],
    challenge:
      'Use the requests library to fetch JSON from a public API (or httpbin) and print a few selected fields.',
    starterCode:
      'import requests\n\nurl = "https://httpbin.org/json"\n# Your code here\n',
    difficulty: 'medium'
  },
  {
    id: 19,
    title: 'JSON Handling',
    topic: 'WEEK 3 — Core Python Skills',
    concepts: ['json.loads()', 'json.dumps()', 'Reading/writing JSON files'],
    challenge:
      'Load a JSON string into a Python dict, modify a value, then dump it back to a JSON string and print it.',
    starterCode:
      'import json\n\nraw = "{\\"name\\": \\\"Alex\\\", \\\"age\\": 30}"\n# Your code here\n',
    difficulty: 'medium'
  },
  {
    id: 20,
    title: 'Date & Time',
    topic: 'WEEK 3 — Core Python Skills',
    concepts: ['datetime.now()', 'Timedeltas', 'Formatting dates'],
    challenge:
      'Write a script that prints today’s date, and also prints the date 7 days from now.',
    starterCode:
      'from datetime import datetime, timedelta\n# Your code here\n',
    difficulty: 'medium'
  },
  {
    id: 21,
    title: 'Generators & Iterators',
    topic: 'WEEK 3 — Core Python Skills',
    concepts: ['Generator functions (yield)', 'Lazy iteration', 'Custom iterators idea'],
    challenge:
      'Write a generator that yields even numbers up to a limit, then iterate over it and print the values.',
    starterCode:
      'def even_numbers(limit):\n    # Your code here\n    pass\n\n# Call even_numbers and print results\n',
    difficulty: 'medium'
  },
  {
    id: 22,
    title: 'Recursion',
    topic: 'WEEK 4 — Advanced / Real-World',
    concepts: ['Recursive functions', 'Base case', 'Stack depth awareness'],
    challenge:
      'Implement a recursive function factorial(n) and test it with a few values.',
    starterCode:
      'def factorial(n):\n    # Your code here\n    pass\n',
    difficulty: 'hard'
  },
  {
    id: 23,
    title: 'Lambda + map/filter/reduce',
    topic: 'WEEK 4 — Advanced / Real-World',
    concepts: ['lambda expressions', 'map()', 'filter()', 'functools.reduce()'],
    challenge:
      'Given a list of numbers, use map, filter, and reduce with lambdas to compute the sum of the squares of even numbers.',
    starterCode:
      'from functools import reduce\n\nnumbers = [1, 2, 3, 4, 5, 6]\n# Your code here\n',
    difficulty: 'hard'
  },
  {
    id: 24,
    title: 'Decorators',
    topic: 'WEEK 4 — Advanced / Real-World',
    concepts: ['Defining decorators', 'Wrapping functions', '@ syntax'],
    challenge:
      'Write a decorator that logs when a function is called, then apply it to a simple function and test it.',
    starterCode:
      'def log_calls(func):\n    # Your code here\n    pass\n\n@log_calls\ndef greet(name):\n    print(f"Hello, {name}!")\n',
    difficulty: 'hard'
  },
  {
    id: 25,
    title: 'Context Managers',
    topic: 'WEEK 4 — Advanced / Real-World',
    concepts: ['with statement', '__enter__ and __exit__', 'contextlib.contextmanager'],
    challenge:
      'Use a context manager to open a file and write some text, then read it back to confirm.',
    starterCode:
      'filename = "log.txt"\n# Your code here\n',
    difficulty: 'hard'
  },
  {
    id: 26,
    title: 'Regular Expressions',
    topic: 'WEEK 4 — Advanced / Real-World',
    concepts: ['import re', 'Basic patterns', 'search vs. findall'],
    challenge:
      'Write a regex that finds all email-like strings in a block of text and prints them.',
    starterCode:
      'import re\n\ntext = "Contact us at support@example.com or admin@test.org"\n# Your code here\n',
    difficulty: 'hard'
  },
  {
    id: 27,
    title: 'Data Structures (Stack/Queue)',
    topic: 'WEEK 4 — Advanced / Real-World',
    concepts: ['Implementing a stack', 'Implementing a queue', 'push/pop and enqueue/dequeue'],
    challenge:
      'Implement a simple Stack class with push, pop, and peek methods, then demonstrate its use.',
    starterCode:
      'class Stack:\n    # Your code here\n    pass\n',
    difficulty: 'hard'
  },
  {
    id: 28,
    title: 'Final Project (combine everything)',
    topic: 'WEEK 4 — Advanced / Real-World',
    concepts: ['Combining multiple concepts', 'Reading/writing data', 'Simple program structure'],
    challenge:
      'Design a small console project that uses files, functions, and at least one concept from each previous week (e.g., a simple task tracker or contact manager). Sketch the structure in comments and implement a minimal version.',
    starterCode:
      '# Plan your project in comments here, then start implementing step by step.\n',
    difficulty: 'hard'
  }
];
