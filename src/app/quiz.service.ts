import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  questions = [
    {
      id: '1',
      question: 'What is the capital of France?',
      type: 'mcq',
      choices: ['Berlin', 'Madrid', 'Paris', 'Rome'],
    },
    {
      id: '2',
      question: 'What is the largest planet in our solar system?',
      type: 'mcq',
      choices: ['Earth', 'Jupiter', 'Mars', 'Saturn'],
    },
    {
      id: '3',
      question: 'What is the chemical symbol for gold?',
      type: 'mcq',
      choices: ['Au', 'Ag', 'Fe', 'Pb'],
    },
    {
      id: '4',
      question: "Who wrote 'To Kill a Mockingbird'?",
      type: 'mcq',
      choices: ['Harper Lee', 'Mark Twain', 'Ernest Hemingway', 'Jane Austen'],
    },
    {
      id: '5',
      question: 'What is the smallest unit of life?',
      type: 'mcq',
      choices: ['Atom', 'Cell', 'Molecule', 'Organ'],
    },
    {
      id: '6',
      question: 'Which element has the atomic number 1?',
      type: 'mcq',
      choices: ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'],
    },
    {
      id: '7',
      question: 'What is the hardest natural substance on Earth?',
      type: 'mcq',
      choices: ['Gold', 'Iron', 'Diamond', 'Platinum'],
    },
    {
      id: '8',
      question: 'What is the main ingredient in guacamole?',
      type: 'mcq',
      choices: ['Tomato', 'Avocado', 'Pepper', 'Onion'],
    },
    {
      id: '9',
      question: 'Who painted the Mona Lisa?',
      type: 'mcq',
      choices: [
        'Vincent van Gogh',
        'Leonardo da Vinci',
        'Claude Monet',
        'Pablo Picasso',
      ],
    },
    {
      id: '10',
      question: 'What is the longest river in the world?',
      type: 'mcq',
      choices: ['Amazon', 'Nile', 'Yangtze', 'Mississippi'],
    },
    {
      id: '11',
      question: 'Which of the following are programming languages?',
      type: 'mcq',
      choices: ['Python', 'Java', 'HTML', 'C++'],
    },
    {
      id: '12',
      question:
        'Which of the following are types of database normalization forms?',
      type: 'mcq',
      choices: ['1NF', '2NF', '3NF', '4NF', '5NF'],
    },
    {
      id: '13',
      question: 'Which of the following are common operating systems?',
      type: 'mcq',
      choices: ['Windows', 'Android', 'Linux', 'HTML'],
    },
    {
      id: '14',
      question: 'Which of these are common data structures?',
      type: 'mcq',
      choices: ['Array', 'Queue', 'Binary Tree', 'HTML'],
    },
    {
      id: '15',
      question: 'Which of the following are types of software testing?',
      type: 'mcq',
      choices: [
        'Unit Testing',
        'Integration Testing',
        'System Testing',
        'SEO Testing',
      ],
    },
  ];
  constructor() {}
}
