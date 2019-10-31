/**
 * It's convention to put the selectors that everyone uses in the main reducer.
 *
 * For feature modules, you'll do it in the feature module's main reducer.
 * These selectors are the way for the consumer(usually components) to access a
 * slice of state in the store.
 * We do it this way so that it can be easily unit tested in one spot (the reducers)
 * and easily consumed from the components.
 */
import {ActionReducerMap, createFeatureSelector, createSelector, MetaReducer} from '@ngrx/store';
import {environment} from '../../../environments/environment';
import * as fromAuth from './auth.reducer';


// 'createFutureSelector' and 'createSelector' are imported from '@ngrx/store'
// se;ectAuthState: this creates a feature selector of type fromAuth.State (thestate in the auth reducer)
//    * The 'auth' string must match the property in state
//    * This will be used to get the auth State for the upcoming createSelector functions
//
// getUserName: this creates a selector using selectAuthState and our getUserName selector
// getFriendlyName: this creates a selector using selectAuthState and our getFriendlyName selector

export const selectAuthState = createFeatureSelector<fromAuth.State>('auth');
export const getUserName = createSelector(selectAuthState, fromAuth.getUserName);
export const getFriendlyName = createSelector(selectAuthState, fromAuth.getFriendlyName);

export interface State {

  [fromAuth.authFeatureKey]: fromAuth.State;
}

export const reducers: ActionReducerMap<State> = {

  [fromAuth.authFeatureKey]: fromAuth.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
