'use strict';

import './rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
//import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about.component';
import { VideoCardComponent } from './video-card.component';
import { headerComponente } from './header.component';
import { footerComponente } from './footer.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    VideoCardComponent,
    headerComponente,
    footerComponente
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
