import { Component, Input } from '@angular/core';
import { Review } from 'src/app/core/interfaces/review.interface';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss'],
})
export class ReviewListComponent {
  @Input() reviewList: Array<Review> = [];

  constructor() {}
}
