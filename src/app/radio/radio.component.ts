import { Component, Input } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { QuestionsComponent } from '../questions/questions.component';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-radio',
  standalone: true,
  imports: [MatRadioModule, QuestionsComponent, ReactiveFormsModule],
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.scss',
})
export class RadioComponent {
  @Input() question: any;
}
