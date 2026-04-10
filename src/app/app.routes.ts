import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Tutorial } from './tutorial/tutorial';
import { Flexbox } from './flexbox/flexbox';
import { MediaQueries } from './media-queries/media-queries';
import { AngularProjectSetup } from './angular-project-setup/angular-project-setup';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'tutorial', component: Tutorial },
  { path: 'flexbox', component: Flexbox },
  { path: 'media-queries', component: MediaQueries },
  { path: 'angular-project-setup', component: AngularProjectSetup }
];
