/**
 * Effect allow us to habndle asynchronous operations in NgRx.
 *
 * - Most times will be calling an API
 * - The resulting data should be stored in state by returning an action for the reducer
 * - Effects always return one or more actions (unless you decorate @Effect with {dispatch:fakse})
 * - You can inject services into your effects as well so if you need to acces those in NgRx, effects
 *   are the place to do it.
 *
 * To generate an effect file, run this command:
 * ng generate effect store/effects/auth --module app.module --root true
 *
 * This command also updates the app.module.ts file.
 * The main thing the schematics generated in that file is EffectsModule.forRoot([AuthEffects]).
 * This registers our new AuthEffects class with NgRx so that it starts to listen for dispatched actions.
 */
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as authActions from '../actions/auth.actions';
import {map, switchMap} from 'rxjs/operators';


@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  /**
   * - Decorate the effect with @Effect()
   * - Name the effect using camel case and end with $ to denotate itis an Observable.
   *   The type of this variable should always be Observable<Action>
   *
   * - The 'ofType functions is what triggering this effect - whenever LoadAuths is dispatched
   *   as an action, this effect will run
   *      * Note it is using the string LoadAuths here and not the action class
   *
   * - Use http to do whatever you need to do, in this case log the user in and return the
   *   user name.
   *      * Return from the map a SetAuths action with the userName
   *          * This will automatically dispatch the SetAuthgs action to the reducer to update the userName on state
   *          * If you want to return multiple actions, return an array of actions
   // tslint:disable-next-line:jsdoc-format
   * */
  @Effect()
  loadAuths$: Observable<Action> = this.actions$.pipe(
    ofType(authActions.AuthActionTypes.LoadAuths),
    switchMap(() => {
      return this.http.get<string>('login').pipe(
        map((userName) => {
          return new authActions.SetAuths(userName);
        })
      );
    })
  );

}
