import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../reducers';
import * as layout from '../actions/layout';


@Component({
  selector: 'book-collection-app',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `

    <div>
      <p-dataTable [value]="testData" selectionMode="single" [responsive]="true">
        <p-column field="name" header="name"></p-column>
      </p-dataTable>
    </div>

      <router-outlet></router-outlet>

  `
})
export class AppComponent {
  public testData;
  constructor() {
    this.testData = [
      {name: 'a'},
      {name: 'b'}
    ];
    
    setTimeout(() => {
      this.testData = [
        {name: 'c'},
        {name: 'd'}
      ];
    }, 500);
  }

}
