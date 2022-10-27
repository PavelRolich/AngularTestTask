import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../core/store/state';
import { Observable, of } from 'rxjs';
import { Product } from '../core/interfaces/product.interface';
import { Review, ReviewForm } from '../core/interfaces/review.interface';
import { ReviewService } from '../core/services/review.service';
import { selectReviews } from '../core/store/selectors/reviews.selectors';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent implements OnInit {
  @Input() activeProduct!: Product;

  reviewList$: Observable<Review[]> = of([]);

  constructor(private reviewService: ReviewService, private store: Store<State>) {
    this.reviewList$ = this.store.select(selectReviews);
  }

  ngOnInit(): void {
    this.reviewService.getReviewList(this.activeProduct.id);
  }

  submitReviewForm(form: ReviewForm): void {
    this.reviewService.sendReview(form.text, form.rate, this.activeProduct.id);
  }
}
