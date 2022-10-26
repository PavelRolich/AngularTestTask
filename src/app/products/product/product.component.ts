import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { mergeMap, Observable } from 'rxjs';
import { Product } from 'src/app/core/interfaces/product.interface';
import { selectIsAuthenticated } from 'src/app/core/store/selectors/auth.selectors';
import { selectSpecificProduct } from 'src/app/core/store/selectors/products.selectors';
import { State } from 'src/app/core/store/state';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  activeProduct$!: Observable<Product | undefined>;
  isAuthenticated$!: Observable<boolean>;

  constructor(private route: ActivatedRoute, private store: Store<State>) {
    this.activeProduct$ = this.route.params.pipe(
      mergeMap((params) => this.store.select(selectSpecificProduct(params['productId'])))
    );

    this.isAuthenticated$ = this.store.select(selectIsAuthenticated);
  }
}
