import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Tutorial } from './tutorial/tutorial';
import { MediaQueries } from './media-queries/media-queries';
import { Flexbox } from './flexbox/flexbox';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'tutorial', component: Tutorial },
  { path: 'media-queries', component: MediaQueries},
  { path: 'flexbox', component: Flexbox},
];
