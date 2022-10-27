import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ReviewState, reviewFeatureName } from '../reducers/reviews.reducer';

export const selectReviewFeatureState = createFeatureSelector<ReviewState>(reviewFeatureName);

export const selectReviews = createSelector(selectReviewFeatureState, (state: ReviewState) => state.reviews);
