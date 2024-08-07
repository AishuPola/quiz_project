import { Component, Input } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';

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
}
