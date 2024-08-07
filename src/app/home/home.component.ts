import { Component } from '@angular/core';
import { QuestionsComponent } from '../questions/questions.component';
import { QuizService } from '../quiz.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [QuestionsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  question: any;
  constructor(public quizService: QuizService, private route: ActivatedRoute) {
    let id: any = this.route.snapshot.paramMap.get('id') as string; // From URL

    this.question = this.quizService.questions[id - 1];
    console.log(this.question);
  }
}
