import { Routes } from '@angular/router';
import { QuestionsComponent } from './questions/questions.component';
import { RadioComponent } from './radio/radio.component';
import { HomeComponent } from './home/home.component';
import { ScoreComponent } from './score/score.component';
import { MainhomeComponent } from './mainhome/mainhome.component';

export const routes: Routes = [
  // {
  //   path: '',
  //   component: HomeComponent,
  // },
  {
    path: '',
    component: MainhomeComponent,
  },
  {
    path: 'questions',
    component: QuestionsComponent,
  },
  {
    path: 'question/:id',
    component: HomeComponent,
  },
  {
    path: 'score',
    component: ScoreComponent,
  },
];
