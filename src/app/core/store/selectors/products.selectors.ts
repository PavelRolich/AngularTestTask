import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from '../reducers/products.reducer';

export const selectProductFeatureState = createFeatureSelector<ProductState>('product');

export const selectProducts = createSelector(selectProductFeatureState, (state: ProductState) => state.products);
