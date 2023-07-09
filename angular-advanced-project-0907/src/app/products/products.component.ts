import { Component } from '@angular/core';
import { SortPipe } from '../pipes/sort.pipe';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  constructor(private sortPipe: SortPipe) {
    console.log(this.sortPipe.transform(this.products, this.order));
  }

  order: string = 'price';
  reverse: boolean = true;


  products: any = [
    { name: 'Keyboard', brand: 'Dell', price: 1200 },
    { name: 'Mouse', brand: 'Apple', price: 800 },
    { name: 'Speaker', brand: 'HP', price: 500 }
  ]

}
