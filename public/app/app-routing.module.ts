'use strict';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { AboutComponent }  from './about.component';
import { AppComponent } from './app.component';
import { cartaoComponente } from './cartao.component';
import { configCartaoComponente } from './configCartao.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cartao',  component: cartaoComponente },
  { path: 'configCartao',  component: configCartaoComponente },
  
  // { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
