import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mergeMap, Observable } from 'rxjs';
import { Product } from 'src/app/core/interfaces/product.interface';
import { AuthService } from 'src/app/core/services/auth.service';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  activeProduct$!: Observable<Product | undefined>;
  isAuthenticated$!: Observable<boolean>;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private authService: AuthService
  ) {
    this.activeProduct$ = this.route.params.pipe(
      mergeMap((params) => this.productsService.getSpecificProduct(params['productId']))
    );

    this.isAuthenticated$ = this.authService.isAuthenticated();
  }
}
