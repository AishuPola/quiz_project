import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../quiz.service';
import { ScoreComponent } from '../score/score.component';
import { MatRadioModule } from '@angular/material/radio';
import { RadioComponent } from '../radio/radio.component';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { AnswersComponent } from '../answers/answers.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatRadioModule,
    ScoreComponent,
    RadioComponent,
    CheckboxComponent,
    AnswersComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  question: any;
  id: any;
  constructor(
    public quizService: QuizService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.id = this.route.snapshot.paramMap.get('id'); // From URL
    this.id = +this.id;
    this.question = this.quizService.questions[this.idx];

    console.log(this.question);
  }

  get idx() {
    return this.id - 1;
  }

  prevQuestion() {
    if (this.id > 1) {
      this.id--;
      this.question = this.quizService.questions[this.idx];

      this.router.navigate([`question/${this.id}`]);
    }
  }
  nextQuestion() {
    if (this.id <= this.quizService.questions.length - 1) {
      this.id++;
      this.question = this.quizService.questions[this.idx];
      console.log(this.id, this.question);
      this.router.navigate([`question/${this.id}`]);
    } else {
      this.onSubmit();
    }
  }

  onSubmit() {
    this.router.navigate(['/score']);
  }
  skipQuestion() {
    if (this.id <= this.quizService.questions.length - 1) {
      this.id++;
      this.question = this.quizService.questions[this.idx];
      console.log(this.id, this.question);
      this.router.navigate([`question/${this.id}`]);
    }
  }
}
