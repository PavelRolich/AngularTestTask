import { AuthState } from './reducers/auth.reducer';
import { ProductState } from './reducers/products.reducer';

export interface State {
  auth: AuthState;
  product: ProductState;
}
