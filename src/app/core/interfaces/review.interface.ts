import { User } from './user.interface';

export interface Review {
  reviewId: string;
  productId: string;
  text: string;
  rate: number;
  created_by: User;
}

export interface ReviewForm {
  text: string;
  rate: number;
}
