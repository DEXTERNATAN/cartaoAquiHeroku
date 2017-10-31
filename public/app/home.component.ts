/**
 * Copyright 2017, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

import { Component } from '@angular/core';
import { Http } from '@angular/http';
// import { Video, VideoCardComponent } from './video-card.component';

@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl:'./home.component.html' 
})
export class HomeComponent {
  resultsPerPage: number;
  totalResults: number;
  videos = [];
  constructor (public http: Http) {

  }
  ngOnInit () {
    // this.http.get('/data.json').subscribe((res) => {
    //   const data = res.json();
    //   this.resultsPerPage = data.pageInfo.resultsPerPage;
    //   this.totalResults = data.pageInfo.totalResults;
    //   this.videos = data.items.map((video) => new Video(video));
    // });
  }
}
