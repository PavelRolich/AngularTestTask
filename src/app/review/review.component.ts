import { Component, Input } from '@angular/core';
import { Product } from '../core/interfaces/product.interface';
import { ReviewForm } from '../core/interfaces/review.interface';
import { ReviewService } from '../core/services/review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent {
  @Input() activeProduct!: Product;

  constructor(private reviewService: ReviewService) {}

  submitReviewForm(form: ReviewForm): void {
    this.reviewService.sendReview(form.text, form.rate, this.activeProduct.id);
  }
}
