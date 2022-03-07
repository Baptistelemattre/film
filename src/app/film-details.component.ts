import {Component, Input, OnInit} from '@angular/core';
import {Film, Films} from "./film";


@Component({
  selector: 'app-film-details',
  template: `
    <app-film-card [filmSelection]="filmSelection"></app-film-card>
  `,
  styles: [
  ]
})
export class FilmDetailsComponent implements OnInit {
  @Input() filmSelection: Film

  constructor() {
    this.filmSelection = <Film>{};
  }

  ngOnInit(): void {
  }

}
