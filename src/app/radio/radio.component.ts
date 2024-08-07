import { Component,Input } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { QuestionsComponent } from '../questions/questions.component';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-radio',
  standalone: true,
  imports: [MatRadioModule,QuestionsComponent,ReactiveFormsModule],
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.scss'
})
export class RadioComponent {
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
}
