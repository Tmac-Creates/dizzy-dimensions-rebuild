import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tutorial-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tutorial-nav.html',
  styleUrl: './tutorial-nav.css'
})
export class TutorialNav {

}
