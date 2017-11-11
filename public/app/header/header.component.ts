'use strict';

import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'headerComponente',
  styles: [`
  .router-link-active {
    text-decoration: underline;
  }
  `],
  templateUrl: './header.component.html'
})
export class headerComponente {}
