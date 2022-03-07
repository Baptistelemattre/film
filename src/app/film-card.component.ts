import {Component, Input, OnInit} from '@angular/core';
import {Film} from "./film";

@Component({
  selector: 'app-film-card',
  template: `
    <table>
    <mat-card class="{{filmSelection.title}}">
      <mat-card-title-group>
        <mat-card-title>{{filmSelection.title}}</mat-card-title>
        <mat-card-subtitle>{{filmSelection.director}}</mat-card-subtitle>
        <img mat-card-lg-image [src]="'assets/images/'+filmSelection.affiche" alt="{{filmSelection.title}} image">
      </mat-card-title-group>
      <mat-card-content>
        <h2>Liste des acteurs</h2>
        <p>
            <mat-list-item *ngFor="let actor of filmSelection.actors">
                <span matLine class="demo-2"> {{actor}} </span>
            </mat-list-item>
        </p>
        <app-film-rating [rating]="filmSelection.rating"></app-film-rating>
        <h2 id="entre">Nombre D'entrée : {{filmSelection.entree}} </h2>
      </mat-card-content>
    </mat-card>
    </table>
  `,
  styles: [
    'table {margin: auto auto; min-width: 600px;} #entre{text-align: right}'
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
