import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],  // 👈 THIS PART
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {

}