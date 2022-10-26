import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { ProductComponent } from './product/product.component';
import { ProductsService } from '../core/services/products.service';
import { ProductsComponent } from './products.component';
import { ReviewModule } from '../review/review.module';

@NgModule({
  declarations: [ProductsListComponent, ProductListItemComponent, ProductComponent, ProductsComponent],
  imports: [CommonModule, ProductsRoutingModule, ReviewModule],
  providers: [{ provide: ProductsService, useClass: ProductsService }],
})
export class ProductsModule {}
