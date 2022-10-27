import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { State } from '../store/state';
import { selectIsAuthenticated } from '../store/selectors/auth.selectors';

import { Observable, of } from 'rxjs';
import { catchError, filter, map, take, tap } from 'rxjs/operators';

import { User } from '../interfaces/user.interface';
import { AuthResponse } from '../interfaces/auth.interface';

import { SnackbarService } from './snackbar.service';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl: string = 'user/';

  constructor(
    private http: HttpClient,
    private store: Store<State>,
    private snackbarService: SnackbarService,
    private localStorageService: LocalStorageService
  ) {}

  registerUser(user: User): Observable<boolean> {
    return this.http.post<AuthResponse>(this.apiUrl + 'register', { ...user }).pipe(
      take(1),
      filter((response) => response.success),
      tap((response) => {
        this.localStorageService.setToken(response.token);
      }),
      tap(() => {
        const message = 'User successfully register';
        this.snackbarService.openSnackBar(message, 'success');
      }),
      map((response) => response.success),
      catchError((response) => {
        this.snackbarService.openSnackBar(response.error.message, 'error');
        return of(false);
      })
    );
  }

  login(user: User): Observable<boolean> {
    return this.http.post<AuthResponse>(this.apiUrl + 'login', { ...user }).pipe(
      take(1),
      filter((response) => response.success),
      tap((response) => {
        this.localStorageService.setToken(response.token);
      }),
      tap(() => {
        const message = 'User successfully logged in';
        this.snackbarService.openSnackBar(message, 'success');
      }),
      map((response) => response.success),
      catchError((response) => {
        this.snackbarService.openSnackBar(response.error.message, 'error');
        return of(false);
      })
    );
  }

  logout(): void {
    this.http
      .post<{ message: string }>(this.apiUrl + 'logout', {})
      .pipe(
        take(1),
        tap(() => {
          this.localStorageService.removeToken();
        }),
        tap((response) => {
          this.snackbarService.openSnackBar(response.message, 'success');
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
