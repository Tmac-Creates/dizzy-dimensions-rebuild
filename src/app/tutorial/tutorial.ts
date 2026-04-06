import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-tutorial',
  standalone: true,

  templateUrl: './tutorial.html',
  styleUrl: './tutorial.css',
  imports: [RouterLink],
})
export class Tutorial {}
