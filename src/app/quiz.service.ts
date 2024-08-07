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
  ];

  // private correctAnswers = {
  //   question1: 'A',
  //   question2: 'B',
  //   question3: 'C',
  //   question4: 'D'
  // };

  // private userAnswers = {};

  // constructor() { }

  // setUserAnswer(question: string, answer: string) {
  //   this.userAnswers[question] = answer;
  // }

  // getUserAnswers() {
  //   return this.userAnswers;
  // }

  // getCorrectAnswers() {
  //   return this.correctAnswers;
  // }

  // calculateScore() {
  //   let score = 0;
  //   for (const question in this.correctAnswers) {
  //     if (this.correctAnswers[question] === this.userAnswers[question]) {
  //       score++;
  //     }
  //   }
  //   return score;
  // }
}
