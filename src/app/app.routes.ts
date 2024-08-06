import { Routes } from '@angular/router';
import { QuestionsComponent } from './questions/questions.component';
import { RadioComponent } from './radio/radio.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'questions',
    component: QuestionsComponent,
  },
  {
    path: 'question/:id',
    component: RadioComponent,
  },
];
