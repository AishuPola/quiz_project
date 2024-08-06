import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuestionsComponent } from './questions/questions.component';
import { CheckboxComponent } from './checkbox/checkbox.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QuestionsComponent, CheckboxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'quiz_project';
}
