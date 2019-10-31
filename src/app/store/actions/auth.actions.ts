import {Action} from '@ngrx/store';

// Interface SetAuthsPayload interface with userName and friendlyName as properties) to use with
// the SetAuths action.
interface SetAuthsPayload {
  userName: string;
  friendlyName: string;
}
export enum AuthActionTypes {
  LoadAuths = '[Auth] Load Auths',
  SetAuths = '[Auth] Set Auths',
}

export class LoadAuths implements Action {
  readonly type = AuthActionTypes.LoadAuths;
}

export class SetAuths implements Action {
  readonly type = AuthActionTypes.SetAuths;
  constructor(public payload: SetAuthsPayload) {}
}

export type AuthActions = LoadAuths | SetAuths;
