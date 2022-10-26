import { Component, EventEmitter, Output } from '@angular/core';
import { ReviewForm } from 'src/app/core/interfaces/review.interface';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss'],
})
export class ReviewFormComponent {
  @Output() submitReviewForm: EventEmitter<ReviewForm> = new EventEmitter<ReviewForm>();

  stars: Array<number> = [1, 2, 3, 4, 5];
  rating: number = 0;
  hoverState: number = 0;
  reviewText: string = '';

  constructor() {}

  enter(starId: number): void {
    this.hoverState = starId;
  }

  leave(): void {
    this.hoverState = 0;
  }

  updateRating(starId: number): void {
    this.rating = starId;
  }

  sendReview(): void {
    this.submitReviewForm.emit({ text: this.reviewText, rate: this.rating });
    this.clearReview();
  }

  clearReview(): void {
    this.rating = 0;
    this.reviewText = '';
  }
}
