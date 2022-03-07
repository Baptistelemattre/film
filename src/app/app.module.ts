import { NgModule } from '@angular/core';
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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilmListeComponent,
    FilmDetailsComponent,
    BadgeAnneePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
