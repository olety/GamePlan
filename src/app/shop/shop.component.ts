import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Product }           from './Product';
import { PRODUCTS }          from './mock_products';
import { PRODUCTS2 }         from './mock_products';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopComponent implements OnInit {

    @Input('data') products: Product[] = PRODUCTS;
    @Input('data') products2: Product[] = PRODUCTS2;
    page: number = 1;
    page2: number = 1;

  constructor() { }

  ngOnInit() {
  }

}
