/**
 * To add an Action to a Reducer:
 * - Add the property you need to the reducer's State
 * - Add an action which will set that property on State (this is done in the *.actions.ts file)
 */
import * as authActions from '../actions/auth.actions';


export const authFeatureKey = 'auth';

// The State for the reducers - this state is added to the main state
export interface State {
  userName?: string;
}

// The initialState which are the starting values
export const initialState: State = {
  userName: null
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

function handleSetAuths(state: State, action: authActions.SetAuths): State {
  return {
    ...state,                 // The ...state spread operator basically copies existing state
    userName: action.payload  // Overwrites the userName property of State
  }
}
