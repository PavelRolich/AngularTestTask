import { createAction, props } from '@ngrx/store';

export enum AuthActionTypes {
  Register = '[Auth] Register',
  Login = '[Auth] Login',
  LoginSuccess = '[Auth] Login Success',
  LoginFailure = '[Auth] Login Failure',
  CheckAuthentication = '[Auth] Check Authentication',
  Logout = '[Auth] Logout',
}

export const registerUser = createAction(AuthActionTypes.Register);

export const checkAuth = createAction(AuthActionTypes.CheckAuthentication);

export const login = createAction(AuthActionTypes.Login);
export const loginSuccess = createAction(AuthActionTypes.LoginSuccess, props<{ token: string }>());
export const loginFailure = createAction(AuthActionTypes.LoginFailure);

export const logout = createAction(AuthActionTypes.Logout);
