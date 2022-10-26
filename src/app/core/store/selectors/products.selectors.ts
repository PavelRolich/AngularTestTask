import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState, productFeatureName } from '../reducers/products.reducer';

export const selectProductFeatureState = createFeatureSelector<ProductState>(productFeatureName);

export const selectProducts = createSelector(selectProductFeatureState, (state: ProductState) => state.products);
export const selectSpecificProduct = (productId: string) =>
  createSelector(selectProducts, (products) => {
    return products.find((product) => product.id === productId);
  });
