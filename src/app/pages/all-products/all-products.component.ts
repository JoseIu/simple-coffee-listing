import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/procuts.inerface';
import { ProductsService } from 'src/app/services/products-service.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnInit {
  public isLoading: Boolean = true;
  public allProducts: Product[] = [];
  constructor(private producService: ProductsService) {}
  ngOnInit(): void {
    this.isLoading = true;

    this.producService.getProducts().subscribe((products) => {
      this.allProducts = products;
      this.isLoading = false;
    });
  }
}
