import {Component, Input, OnInit} from '@angular/core';
import {Film, Films} from "./film";


@Component({
  selector: 'app-film-details',
  template: `
    <p>
      film-details works!
      {{filmSelection.title}}
    </p>
    <p>
      <span matBadge="{{filmSelection.year|badgeAnnee}}" matBadgeSize="small" matBadgeOverlap="false" matBadgeColor="accent">
        {{filmSelection.year}}
      </span>
    </p>
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
