import { Action, createReducer, on } from '@ngrx/store';
import { Product } from '../../interfaces/product.interface';
import * as ProductActions from '../actions/products.actions';

export const productFeatureName = 'product';

export interface ProductState {
  products: Array<Product>;
}

export const initialState: ProductState = {
  products: [],
};

export const productReducerInternal = createReducer(
  initialState,
  on(ProductActions.setProducts, (state, { products }) => {
    return {
      ...state,
      products,
    };
  }),
  on(ProductActions.clearProducts, (state, {}) => {
    return {
      ...state,
      products: [],
    };
  })
);

export function productReducer(state: ProductState | undefined, action: Action) {
  return productReducerInternal(state, action);
}
