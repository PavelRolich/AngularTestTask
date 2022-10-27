import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: '',
    component: ProductsComponent,
    children: [
      { path: 'list', component: ProductsListComponent },
      { path: ':productId', component: ProductComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
