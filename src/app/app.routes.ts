import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CharactersComponent } from './components/characters/characters.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'characters',
    component: CharactersComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
