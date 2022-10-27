import { Action, createReducer, on } from '@ngrx/store';
import { Review } from '../../interfaces/review.interface';
import * as ReviewActions from '../actions/reviews.actions';

export const reviewFeatureName = 'review';

export interface ReviewState {
  reviews: Array<Review>;
}

export const initialState: ReviewState = {
  reviews: [],
};

export const reviewReducerInternal = createReducer(
  initialState,
  on(ReviewActions.setReviews, (state, { reviews }) => {
    return {
      ...state,
      reviews,
    };
  }),
  on(ReviewActions.clearReviews, (state, {}) => {
    return {
      ...state,
      reviews: [],
    };
  })
);

export function reviewReducer(state: ReviewState | undefined, action: Action) {
  return reviewReducerInternal(state, action);
}
