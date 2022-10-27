import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../core/interfaces/product.interface';
import { Review, ReviewForm } from '../core/interfaces/review.interface';
import { ReviewService } from '../core/services/review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent implements OnInit {
  @Input() activeProduct!: Product;

  reviewList$: Observable<Review[]> = of([]);

  constructor(private reviewService: ReviewService) {
    this.reviewList$ = this.reviewService.getReviewList();
  }

  ngOnInit(): void {
    this.reviewService.loadReviewList(this.activeProduct.id);
  }

  submitReviewForm(form: ReviewForm): void {
    this.reviewService.sendReview(form.text, form.rate, this.activeProduct.id);
  }
}
