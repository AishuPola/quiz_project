import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-score',
  standalone: true,
  imports: [],
  templateUrl: './score.component.html',
  styleUrl: './score.component.scss',
})
export class ScoreComponent {
  score: number = 90;
  constructor(private router: Router) {}
  showanswers() {
    this.router.navigate(['answers']);
  }
}
