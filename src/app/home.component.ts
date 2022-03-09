import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <!--<app-film-liste></app-film-liste>-->
    <app-film-liste-cartes></app-film-liste-cartes>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
