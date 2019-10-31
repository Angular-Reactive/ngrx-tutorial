/**
 * The actions live to be dispatched.
 * Reducers and effects just wait until an action is dispatched
 * so they can do their job.
 * To dispatch the action is done tipically from the component.
 */
import {Component, OnInit} from '@angular/core';

import * as fromRoot from './store/reducers'; // This is where the main State interface lives in the index.ts file
import * as authActions from './store/actions/auth.actions'; // This is where our LoadAuth actions live
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngrx-tutorial';

  // Injecting the store
  constructor(private store: Store<fromRoot.State>) {
  }

  ngOnInit() {
    // Dispatching the action
    this.store.dispatch(new authActions.LoadAuths());
  }
}
