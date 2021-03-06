import { NgModule } from '@angular/core';
import { Directive } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSliderModule} from '@angular/material/slider';
import {MatBadge, MatBadgeModule} from "@angular/material/badge";

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilmListeComponent } from './film-liste.component';
import {MatTableModule} from "@angular/material/table";
import { FilmDetailsComponent } from './film-details.component';
import * as dayjs from "dayjs";
import { BadgeAnneePipe } from './badge-annee.pipe';
import { FilmRatingComponent } from './film-rating.component';
import { FilmCardComponent } from './film-card.component';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import { FilmListeCartesComponent } from './film-liste-cartes.component';
import {MatChipsModule} from "@angular/material/chips";
import {CardBorderDirective} from "./card-border";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilmListeComponent,
    FilmDetailsComponent,
    BadgeAnneePipe,
    FilmRatingComponent,
    FilmCardComponent,
    FilmListeCartesComponent,
    CardBorderDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule,
    MatBadgeModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
