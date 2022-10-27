import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, take, tap } from 'rxjs/operators';
import { User } from '../interfaces/user.interface';
import { State } from '../store/state';
import * as AuthActions from '../store/actions/auth.actions';
import { SnackbarService } from './snackbar.service';
import { selectIsAuthenticated } from '../store/selectors/auth.selectors';
import { AuthResponse } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl: string = 'user/';

  constructor(
    private http: HttpClient,
    private snackbarService: SnackbarService,
    private router: Router,
    private store: Store<State>
  ) {}

  registerUser(user: User): void {
    this.http
      .post<AuthResponse>(this.apiUrl + 'register', { ...user })
      .pipe(
        take(1),
        tap((response) => {
          if (response.success) {
            const message = 'User successfully register';
            this.snackbarService.openSnackBar(message, 'success');
            this.router.navigate(['/products']);
          }
        }),
        catchError((response) => {
          this.snackbarService.openSnackBar(response.error.message, 'error');
          return of();
        })
      )
      .subscribe();
  }

  login(user: User): void {
    this.http
      .post<AuthResponse>(this.apiUrl + 'login', { ...user })
      .pipe(
        take(1),
        tap((response) => {
          if (response.success) {
            const message = 'User successfully logged in';
            this.snackbarService.openSnackBar(message, 'success');
            this.store.dispatch(AuthActions.loginSuccess({ token: response.token }));
            this.router.navigate(['/products/list']);
          }
        }),
        catchError((response) => {
          this.snackbarService.openSnackBar(response.error.message, 'error');
          return of();
        })
      )
      .subscribe();
  }

  logout(): void {
    this.http
      .post<{ message: string }>(this.apiUrl + 'logout', {})
      .pipe(
        take(1),
        map((response) => {
          const message = 'User successfully logged out';
          this.snackbarService.openSnackBar(message, 'success');
          this.store.dispatch(AuthActions.logout());
        }),
        catchError((response) => {
          this.snackbarService.openSnackBar(response.error.message, 'error');
          return of();
        })
      )
      .subscribe();
  }

  isAuthenticated(): Observable<boolean> {
    return this.store.select(selectIsAuthenticated);
  }
}
