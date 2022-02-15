import { Component, OnInit } from '@angular/core';
import { products } from '../../mocks/index';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  menuProducts = products
  activeTab: any = ""
  categories: Set<String> = new Set();
  constructor() { }

  ngOnInit(): void {
    this.menuProducts.map((item) => this.categories.add(item.categorie))
    this.activeTab = Array.from(this.categories)[0]
  }

}
