import { Component, OnInit } from '@angular/core';
import {Film, Films} from "./film";

@Component({
  selector: 'app-film-liste-cartes',
  template: `
        <app-film-card class="carte" *ngFor="let film of dataSource" [filmSelection]="film" appCardBorder></app-film-card>

  `,
  styles: [`.carte{display: inline-block;}`
  ]
})
export class FilmListeCartesComponent implements OnInit {
  dataSource: Film[] = Films;
  constructor() { }

  ngOnInit(): void {
  }

}
