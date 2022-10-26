import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../components/snackbar/snackbar.component';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, type: 'success' | 'warning' | 'error') {
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: 3000,
      panelClass: [type],
      data: {
        text: message,
        type,
      },
    });
  }
}
