import { Component,Input } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-answers',
  standalone: true,
  imports: [],
  templateUrl: './answers.component.html',
  styleUrl: './answers.component.scss',
})
export class AnswersComponent {
   question: any;
   answer: any;
  
  
 
  constructor( private quizservice:QuizService ) {
  //  this.id=this.route.snapshot.paramMap.get('id');
  //  this.id=+this.id;
  
   this.question=this.quizservice.questions;
   this.answer=this.quizservice.actualanswers;
  
  //  console.log(this.quizservice.questions[this.id-1])
      
  }
  
}
  

