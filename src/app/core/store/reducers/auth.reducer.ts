import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';

export const authFeatureName = 'auth';

export interface AuthState {
  isLoggedIn: boolean;
  token: string | null;
}

export const initialState: AuthState = {
  isLoggedIn: localStorage.getItem('Authorization') ? true : false,
  token: localStorage.getItem('Authorization'),
};

export const authReducerInternal = createReducer(
  initialState,
  on(AuthActions.loginSuccess, (state, { token }) => {
    return {
      ...state,
      isLoggedIn: true,
      token,
    };
  }),
  on(AuthActions.loginFailure, (state, {}) => {
    return {
      ...state,
      isLoggedIn: false,
      token: null,
    };
  }),
  on(AuthActions.logout, (state, {}) => {
    return {
      ...state,
      isLoggedIn: false,
      token: null,
    };
  })
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return authReducerInternal(state, action);
}
