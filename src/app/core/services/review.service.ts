import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { State } from '../store/state';
import * as ReviewActions from '../store/actions/reviews.actions';

import { Review } from '../interfaces/review.interface';

import { Observable, of } from 'rxjs';
import { catchError, take, tap } from 'rxjs/operators';

import { SnackbarService } from './snackbar.service';
import { selectReviews } from '../store/selectors/reviews.selectors';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  apiUrl: string = 'reviews/';

  constructor(private http: HttpClient, private snackbarService: SnackbarService, private store: Store<State>) {}

  sendReview(text: string, rate: number, productId: string): void {
    this.http
      .post<{ review_id: string }>(this.apiUrl + productId, { text, rate })
      .pipe(
        take(1),
        tap(() => {
          const message = 'Review successfully saved';
          this.snackbarService.openSnackBar(message, 'success');
        }),
        tap(() => this.loadReviewList(productId)),
        catchError((response) => {
          this.snackbarService.openSnackBar(response.error.message, 'error');
          return of();
        })
      )
      .subscribe();
  }

  loadReviewList(productId: string): void {
    this.http
      .get<Review[]>(this.apiUrl + productId)
      .pipe(
        take(1),
        tap((reviews) => {
          this.store.dispatch(ReviewActions.setReviews({ reviews }));
        }),
        catchError((response) => {
          this.snackbarService.openSnackBar(response.error.message, 'error');
          return of([]);
        })
      )
      .subscribe();
  }

  getReviewList(): Observable<Review[]> {
    return this.store.select(selectReviews);
  }
}
