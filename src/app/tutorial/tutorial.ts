import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { TutorialNav } from '../tutorial-nav/tutorial-nav';

@Component({
  selector: 'app-tutorial',
  standalone: true,

  templateUrl: './tutorial.html',
  styleUrl: './tutorial.css',
  imports: [RouterLink, TutorialNav],
})
export class Tutorial {}
