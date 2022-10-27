import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Review } from '../interfaces/review.interface';
import { of } from 'rxjs';
import { catchError, take, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { State } from '../store/state';
import * as ReviewActions from '../store/actions/reviews.actions';
import { SnackbarService } from './snackbar.service';

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
        catchError((response) => {
          this.snackbarService.openSnackBar(response.error.message, 'error');
          return of();
        })
      )
      .subscribe();
  }

  getReviewList(productId: string): void {
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
}
