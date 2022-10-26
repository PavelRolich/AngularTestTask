import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { catchError, tap } from 'rxjs/operators';
import { Product } from '../interfaces/product.interface';
import { State } from '../store/state';
import * as ProductActions from '../store/actions/products.actions';
import { SnackbarService } from './snackbar.service';
import { of } from 'rxjs';

@Injectable()
export class ProductsService {
  apiUrl: string = 'products/';

  constructor(private http: HttpClient, private store: Store<State>, private snackbarService: SnackbarService) {}

  getProductsList(): void {
    this.http
      .get<Product[]>(this.apiUrl)
      .pipe(
        tap((products) => {
          this.store.dispatch(ProductActions.setProducts({ products }));
        }),
        catchError((response) => {
          this.snackbarService.openSnackBar(response.error.message, 'error');
          return of();
        })
      )
      .subscribe();
  }
}
