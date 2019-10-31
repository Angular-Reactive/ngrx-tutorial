/**
 * To add an Action to a Reducer:
 * - Add the property you need to the reducer's State
 * - Add an action which will set that property on State (this is done in the *.actions.ts file)
 */
import * as authActions from '../actions/auth.actions';

export const authFeatureKey = 'auth';

// Selectos help us to get at the data in the store by using pure functions and
// keeping most of the logic on the sotre instead of in the components.
// The first step with selectors is to add selectors in your reducer for each property of state.
// These are just pure functions that take a State parameter and return a value on state.
// This will be used in the main reducer file to create the selectors there.

export const getUserName = (state: State) => state.userName;
export const getFriendlyName = (state: State) => state.friendlyName;

// The State for the reducers - this state is added to the main state
// Added 'friendlyName' to State - this will be shown on the welcome page
export interface State {
  userName?: string;
  friendlyName?: string;
}

// The initialState which are the starting values
export const initialState: State = {
  userName: null,
  friendlyName: null
};

// A reducer function that will ve added to the main reducer
export function reducer(state = initialState, action: authActions.AuthActions): State {
  switch (action.type) {
    case authActions.AuthActionTypes.SetAuths:
      return handleSetAuths(state, action);

    default:
      return state;
  }
}

// Updated handleSetAuths to take in more than just userName as payload
function handleSetAuths(state: State, action: authActions.SetAuths): State {
  return {
    ...state,                                 // The ...state spread operator basically copies existing state
    userName: action.payload.userName,        // Overwrites the userName property of State
    friendlyName: action.payload.friendlyName
  }
}
