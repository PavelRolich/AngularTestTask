import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { State } from '../store/state';
import * as ProductActions from '../store/actions/products.actions';
import { selectProducts, selectSpecificProduct } from '../store/selectors/products.selectors';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Product } from '../interfaces/product.interface';

import { SnackbarService } from './snackbar.service';

@Injectable()
export class ProductsService {
  apiUrl: string = 'products/';

  constructor(private http: HttpClient, private store: Store<State>, private snackbarService: SnackbarService) {}

  loadProductsList(): void {
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

  getProductsList(): Observable<Product[]> {
    return this.store.select(selectProducts);
  }

  getSpecificProduct(productId: string): Observable<Product | undefined> {
    return this.store.select(selectSpecificProduct(productId));
  }
}
