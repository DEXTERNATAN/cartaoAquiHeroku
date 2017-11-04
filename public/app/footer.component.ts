'use strict';

import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'footerComponente',
  styles: [`
  .router-link-active {
    text-decoration: underline;
  }
  `],
  templateUrl: './footer.component.html'
})
export class footerComponente {}
