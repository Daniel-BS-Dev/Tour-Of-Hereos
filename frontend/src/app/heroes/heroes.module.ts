import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { PagesComponent } from './pages/pages.component';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MatToolbarModule
  ]
})
export class HeroesModule { }
