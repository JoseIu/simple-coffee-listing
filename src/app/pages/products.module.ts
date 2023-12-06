import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductCardComponent } from '../components/product-card/product-card.component';
import { LoaderComponent } from '../shared/loader/loader.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { AvailableProductsComponent } from './available-products/available-products.component';
import { ProductsRoutingModule } from './prducts-routing.module';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AllProductsComponent,
    AvailableProductsComponent,
    ProductCardComponent,
    ProductsComponent,
    LoaderComponent,
  ],
  imports: [CommonModule, ProductsRoutingModule],
})
export class ProductsModule {}
