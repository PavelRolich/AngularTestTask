import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Product } from 'src/app/core/interfaces/product.interface';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent {
  products$: Observable<Product[]> = of([]);

  constructor(private productsService: ProductsService, private router: Router) {
    this.products$ = this.productsService.getProductsList();
  }

  productClick(productId: string): void {
    this.router.navigate(['/products', productId]);
  }
}
