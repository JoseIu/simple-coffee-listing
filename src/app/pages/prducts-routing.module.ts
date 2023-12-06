import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './all-products/all-products.component';
import { AvailableProductsComponent } from './available-products/available-products.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      {
        path: 'all-products',
        component: AllProductsComponent,
      },
      {
        path: 'available-products',
        component: AvailableProductsComponent,
      },
      {
        path: '**',
        redirectTo: 'all-products',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
