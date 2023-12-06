import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/procuts.inerface';
import { ProductsService } from 'src/app/services/products-service.service';

@Component({
  selector: 'app-available-products',
  templateUrl: './available-products.component.html',
  styleUrls: ['./available-products.component.scss'],
})
export class AvailableProductsComponent implements OnInit {
  public isLoading: boolean = false;
  public productsAvailable: Product[] = [];
  constructor(private productsService: ProductsService) {}
  ngOnInit(): void {
    this.isLoading = true;
    this.productsService.getProductsAvailable().subscribe((products) => {
      this.productsAvailable = products;
      this.isLoading = false;
    });
  }
}
