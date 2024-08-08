import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-answers',
  standalone: true,
  imports: [],
  templateUrl: './answers.component.html',
  styleUrl: './answers.component.scss',
})
export class AnswersComponent {
  @Input() question: any;
}
