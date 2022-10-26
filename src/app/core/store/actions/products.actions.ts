import { createAction, props } from '@ngrx/store';
import { Product } from '../../interfaces/product.interface';

export enum ProductActionTypes {
  SetProducts = '[Products] Set Products',
  ClearProducts = '[Products] Clear Products',
}

export const setProducts = createAction(ProductActionTypes.SetProducts, props<{ products: Array<Product> }>());

export const clearProducts = createAction(ProductActionTypes.ClearProducts);
