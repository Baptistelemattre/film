import {Component, Input, OnInit} from '@angular/core';
import {Film} from "./film";

@Component({
  selector: 'app-film-card',
  template: `
    <mat-card>
      <mat-card-title><mat-icon>today</mat-icon>{{filmSelection.year}}</mat-card-title>
      <mat-card-title-group>
        <mat-card-title>{{filmSelection.title}}</mat-card-title>
        <mat-card-subtitle>{{filmSelection.director}}</mat-card-subtitle>
        <img mat-card-lg-image [src]="'assets/images/'+filmSelection.affiche" alt="{{filmSelection.title}} image">
      </mat-card-title-group>
      <mat-card-content>
        <h2>Liste des acteurs</h2>
        <mat-chip-list>
          <mat-chip *ngFor="let acteur of filmSelection.actors">{{acteur}}</mat-chip>
        </mat-chip-list>
        <br>
        <app-film-rating [rating]="filmSelection.rating"></app-film-rating>
        <h2 id="entre">Nombre D'entrée : {{filmSelection.entree}} </h2>
      </mat-card-content>
    </mat-card>
  `,
  styles: [
    'mat-card {margin: auto auto; max-width: 425px; background-color: lightgrey;border: 0.1em solid;border-radius: 1em} #entre{text-align: right;} mat-card-subtitle.year{border: 0.01em solid lightcoral; border-radius:1em;  background-color: lightsalmon;} mat-card-title{text-align: center}'
  ]
})
export class FilmCardComponent implements OnInit {
  @Input() filmSelection: Film

  constructor() {
    this.filmSelection = <Film>{};
  }

  ngOnInit(): void {
  }

}
