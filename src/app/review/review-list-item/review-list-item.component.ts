import { Component, Input } from '@angular/core';
import { Review } from 'src/app/core/interfaces/review.interface';

@Component({
  selector: 'app-review-list-item',
  templateUrl: './review-list-item.component.html',
  styleUrls: ['./review-list-item.component.scss'],
})
export class ReviewListItemComponent {
  @Input() review!: Review;

  rate = 4;

  constructor() {}
}
