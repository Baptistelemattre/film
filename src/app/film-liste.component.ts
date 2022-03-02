import { Component, OnInit } from '@angular/core';
import {Film, Films} from "./film";

@Component({
  selector: 'app-film-liste',
  template: `
    <table mat-table [dataSource]="dataSource" class="mat-elevation-z8">

      <!-- titre Column -->
      <ng-container matColumnDef="title">
        <th mat-header-cell *matHeaderCellDef> Titre </th>
        <td mat-cell *matCellDef="let element"> {{element.title}} </td>
      </ng-container>

      <!-- year Column -->
      <ng-container matColumnDef="year">
        <th mat-header-cell *matHeaderCellDef> Année </th>
        <td mat-cell *matCellDef="let element"> {{element.year}} </td>
      </ng-container>

      <!-- director Column -->
      <ng-container matColumnDef="director">
        <th mat-header-cell *matHeaderCellDef> Metteur en scène </th>
        <td mat-cell *matCellDef="let element"> {{element.director}} </td>
      </ng-container>

      <!-- La ligne -->
      <tr mat-header-row *matHeaderRowDef="lesColonnes"></tr>
      <tr mat-row *matRowDef="let row; columns: lesColonnes;"></tr>
    </table>
  `,
  styles: [
    'table {margin: auto auto; min-width: 600px}'
  ]
})
export class FilmListeComponent implements OnInit {
  dataSource: Film[] = Films;
  lesColonnes: string[] = ['title', 'year', 'director'];

  constructor() { }

  ngOnInit(): void {
  }

}
