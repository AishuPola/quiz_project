import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { QuizService } from '../quiz.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [MatRadioModule, ReactiveFormsModule],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss',
})
export class QuestionsComponent {
  quizForm: FormGroup;
  @Input() question: any = {
    id: '1',
    question: 'What is the capital of France?',
    type: 'mcq',
    choices: ['Berlin', 'Madrid', 'Paris', 'Rome'],
  };
  id: number;
  constructor(
    public quizService: QuizService,
    public router: Router,
    public fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.quizForm = this.fb.group({
      choices: [''],
    });
    // let currentQuestionIndex: any = this.route.snapshot.paramMap.get(
    //   'id'
    // ) as string; // From URL
    // this.id = currentQuestionIndex;
    this.id = parseInt(this.route.snapshot.paramMap.get('id') || '0', 10);
  }
  nextQuestion() {
    if (this.id < this.quizService.questions.length - 1) {
      this.id++;
      this.question = this.quizService.questions[this.id];

      this.router.navigate([`question/${this.id}`]).then(() => {
        this.loadQuestion();
        this.loadSavedAnswer();
      });
    } else {
      this.onSubmit();
    }
  }
  loadQuestion() {
    this.question = this.quizService.questions[this.id];
    //this.quizForm.patchValue({ choices: '' });
  }

  onSubmit() {
    this.router.navigate(['/score']);
  }

  ngOnInit(): void {
    // this.id = parseInt(this.route.snapshot.paramMap.get('id') || '0', 10);
    // this.loadQuestion();
    this.loadSavedAnswer();
    this.quizForm.get('choices')?.valueChanges.subscribe((value) => {
      this.saveAnswer(value);
    });
  }
  saveAnswer(value: string): void {
    localStorage.setItem(`selectedAnswer_${this.id}`, value);
  }
  loadSavedAnswer(): void {
    const savedAnswer = localStorage.getItem(`selectedAnswer_${this.id}`);
    if (savedAnswer) {
      this.quizForm.patchValue({ choices: savedAnswer });
    }
  }
}
