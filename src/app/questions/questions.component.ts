import { Component, Input } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [MatRadioModule],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss',
})
export class QuestionsComponent {
  @Input() question: any = {
    id: '1',
    question: 'What is the capital of France?',
    type: 'mcq',
    choices: ['Berlin', 'Madrid', 'Paris', 'Rome'],
  };
  id = 0;
  constructor(
    private quizService: QuizService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    let currentQuestionIndex: any = this.route.snapshot.paramMap.get(
      'id'
    ) as string; // From URL
    this.id = currentQuestionIndex;
  }
  nextQuestion() {
    if (this.id < this.quizService.questions.length - 1) {
      this.id++;
      this.question = this.quizService.questions[this.id];

      this.router.navigate([`question/${this.id}`]);
    } else {
      this.onSubmit();
    }
  }

  onSubmit() {
    this.router.navigate(['/score']);
  }
}
