/**
 * This components was created using the @ngrx/schematics package with the command:
 *
 * ng generate container welcome --state store/reducers/index.ts --stateInterface State
 *
 * This basically is the same as "ng g component" but adds the store to the component's constructor.
 */
import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromStore from '../store/reducers';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  // First, we define a 'nameS' Observable<string> property
  name$: Observable<string>;

  constructor(private store: Store<fromStore.State>) { }

  ngOnInit() {
    // Now, we populate the name$ with this.store.select(fromStore.getFriendlyName)
    //  * This is using our selector created in the main reducer
    //  * Whenever this value is updated, it will automatically update the component
    this.name$ = this.store.select(fromStore.getFriendlyName);
  }

}
