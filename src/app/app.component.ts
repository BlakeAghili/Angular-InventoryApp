import { Component } from '@angular/core';
import {Product} from './product.model';

@Component({
  selector: 'inventory-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inventory-app';
  products: Product[];

  constructor() {
    const newProducts = [
      new Product('MYSHOES'
      , 'Mike Shoes'
      , '/resources/images/products/black-shoes.jpg'
      , ['Men', 'Running Shoes', 'Shoes']
      , 29.99),
      new Product('FLUFFYJACKET'
        , 'Grandpa Jacket'
        , '/resources/images/products/blue-jacket.jpg'
        , ['Men', 'Apparel', 'Jackets']
        , 29.99),
      new Product('AHAT'
        , 'We Are Still Here Hat'
        , '/resources/images/products/black-hat.jpg'
        , ['Men', 'Accessories', 'Hats']
        , 29.99)
    ];

    this.products = newProducts;
  }

  productWasSelected(product: Product): void {
    console.log('Product Clicked: ', product);
  }
}
