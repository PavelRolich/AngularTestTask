import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  setToken(token: string): void {
    localStorage.setItem('Authorization', token);
  }

  removeToken(): void {
    localStorage.removeItem('Authorization');
  }
}
