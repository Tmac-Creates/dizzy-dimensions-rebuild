import { Routes } from '@angular/router';
import { About } from './about/about';
import { Home } from './home/home';
import {Tutorial} from './tutorial/tutorial'

export const routes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'home', component: Home },
{ path: 'about', component: About },
{ path: 'tutorial', component: Tutorial }
]