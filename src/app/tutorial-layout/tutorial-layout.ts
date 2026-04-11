import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TutorialNav } from '../tutorial-nav/tutorial-nav';

@Component({
  selector: 'app-tutorial-layout',
  standalone: true,
  imports: [RouterOutlet, TutorialNav],
  templateUrl: './tutorial-layout.html',
  styleUrl: './tutorial-layout.css'
})
export class TutorialLayout {

}
