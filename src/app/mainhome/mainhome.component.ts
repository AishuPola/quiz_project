import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainhome',
  standalone: true,
  imports: [],
  templateUrl: './mainhome.component.html',
  styleUrl: './mainhome.component.scss',
})
export class MainhomeComponent {
  constructor(private router: Router) {}
  starttest() {
    this.router.navigate(['/question/1']);
  }
}
