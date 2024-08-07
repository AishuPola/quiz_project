import { Routes } from '@angular/router';
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
    path: 'home',
    component: HomeComponent,
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
