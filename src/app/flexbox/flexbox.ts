import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { TutorialNav } from '../tutorial-nav/tutorial-nav';

@Component({
  selector: 'app-flexbox',
  imports: [RouterLink, TutorialNav],
  templateUrl: './flexbox.html',
  styleUrl: './flexbox.css',
})
export class Flexbox {}
