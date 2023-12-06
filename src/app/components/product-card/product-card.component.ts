import { Component, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/procuts.inerface';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() public allProducts: Product[] = [];
}
