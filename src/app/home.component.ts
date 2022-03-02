import { Component, OnInit } from '@angular/core';
import {Film, Films} from "./film";

@Component({
  selector: 'app-home',
  template: `
    <p>
      home works!
    </p>
    <app-film-liste></app-film-liste>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
