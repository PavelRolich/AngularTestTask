import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from '../reducers/auth.reducer';

export const selectAuthFeatureState = createFeatureSelector<AuthState>('auth');

export const selectIsAuthenticated = createSelector(selectAuthFeatureState, (state: AuthState) => state.isLoggedIn);

export const selectAuthToken = createSelector(selectAuthFeatureState, (state: AuthState) => state.token);
