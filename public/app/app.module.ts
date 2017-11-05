'use strict';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import './rxjs-extensions';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { VideoCardComponent } from './video-card.component';
import { headerComponente } from './header.component';
import { footerComponente } from './footer.component';
import { cartaoComponente } from './cartao.component';
import { configCartaoComponente } from './configCartao.component';

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
    footerComponente,
    cartaoComponente,
    configCartaoComponente
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
