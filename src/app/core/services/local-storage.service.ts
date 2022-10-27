import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../store/state';
import * as AuthActions from '../store/actions/auth.actions';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor(private store: Store<State>) {}

  setToken(token: string): void {
    localStorage.setItem('Authorization', token);
    this.store.dispatch(AuthActions.loginSuccess({ token }));
  }

  removeToken(): void {
    localStorage.removeItem('Authorization');
    this.store.dispatch(AuthActions.logout());
  }
}
