import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Product } from 'src/app/core/interfaces/product.interface';
import { selectProducts } from 'src/app/core/store/selectors/products.selectors';
import { State } from 'src/app/core/store/state';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent {
  products$: Observable<Product[]> = of([]);

  constructor(private store: Store<State>, private router: Router) {
    this.products$ = this.store.select(selectProducts);
  }

  productClick(productId: string): void {
    this.router.navigate(['/products', productId]);
  }
}
