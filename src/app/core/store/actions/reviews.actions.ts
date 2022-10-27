import { createAction, props } from '@ngrx/store';
import { Review } from '../../interfaces/review.interface';

export enum ReviewActionTypes {
  SetReviews = '[Reviews] Set Reviews',
  ClearReviews = '[Reviews] Clear Reviews',
}

export const setReviews = createAction(ReviewActionTypes.SetReviews, props<{ reviews: Array<Review> }>());

export const clearReviews = createAction(ReviewActionTypes.ClearReviews);
