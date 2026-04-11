import { Component } from '@angular/core';
import { TutorialNav } from '../tutorial-nav/tutorial-nav';
import { TutorialLayout } from "../tutorial-layout/tutorial-layout";

@Component({
  selector: 'app-media-queries',
  imports: [TutorialNav, TutorialLayout],
  templateUrl: './media-queries.html',
  styleUrl: './media-queries.css',
})
export class MediaQueries {}
