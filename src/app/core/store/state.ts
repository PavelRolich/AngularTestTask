import { AuthState } from './reducers/auth.reducer';
import { ProductState } from './reducers/products.reducer';
import { ReviewState } from './reducers/reviews.reducer';

export interface State {
  auth: AuthState;
  product: ProductState;
  review: ReviewState;
}
