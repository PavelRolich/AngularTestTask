import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, take, tap } from 'rxjs/operators';
import { Review } from '../interfaces/review.interface';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  apiUrl: string = 'reviews/';

  constructor(private http: HttpClient, private snackbarService: SnackbarService) {}

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

  getReviewList(productId: string): Observable<Review[]> {
    return this.http.get<Review[]>(this.apiUrl + productId).pipe(
      catchError((response) => {
        this.snackbarService.openSnackBar(response.error.message, 'error');
        return of([]);
      })
    );
  }
}
