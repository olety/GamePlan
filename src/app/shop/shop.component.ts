import { Component, OnInit } from '@angular/core';
import { Product }           from './Product';
import { PRODUCTS }          from './mock_products';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  products: Product[] = PRODUCTS;

  constructor() { }

  ngOnInit() {
  }

}
