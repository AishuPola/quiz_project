import { Component } from '@angular/core';
import { QuestionsComponent } from '../questions/questions.component';
import { QuizService } from '../quiz.service';
import { ActivatedRoute } from '@angular/router';
import { ScoreComponent } from '../score/score.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [QuestionsComponent, ScoreComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  question: any;
  id = 0;
  constructor(
    public quizService: QuizService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    let id: any = this.route.snapshot.paramMap.get('id') as string; // From URL

    this.question = this.quizService.questions[id - 1];
    console.log(this.question);
  }
  prevQuestion() {
    if (this.id > 1) {
      this.id--;
      this.question = this.quizService.questions[this.id];

      this.router.navigate([`question/${this.id}`]);
    }
  }
  nextQuestion() {
    if (this.id <= this.quizService.questions.length - 1) {
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
