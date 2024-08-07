import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { QuizService } from '../quiz.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RadioComponent } from '../radio/radio.component';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [MatRadioModule, ReactiveFormsModule,RadioComponent],
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
  @Input() id: any;
  constructor(public fb: FormBuilder, private route: ActivatedRoute) {
    this.quizForm = this.fb.group({
      choices: [''],
    });
  }

  ngOnInit(): void {
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
