import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Tutorial } from './tutorial/tutorial';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'tutorial', component: Tutorial }
];