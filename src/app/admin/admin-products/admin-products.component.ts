import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from '../../product.service';
import {Subscription} from 'rxjs/Subscription';
import {Product} from '../../models/product';
import { DataTableResource } from 'angular-4-data-table';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  products: Product[];
  filteredProducts: any[];
  subscription: Subscription;
  tableResource: DataTableResource<Product>;
  items: Product[];
  itemsCount: number;

  constructor(private productService: ProductService) {
    this.subscription = this.productService.getAll().
        subscribe(products => {
          this.filteredProducts = this.products = products;
          this.initializeTable(products);
      });
  }


  private initializeTable(products: Product[]) {

    this.tableResource = new DataTableResource(products);
    this.tableResource.query({ offset: 0 })
      .then(items => this.items = items);
    this.tableResource.count()
      .then(count => this.itemsCount = count);
  }


  reloadItems(params) {
    if (!this.tableResource)
    this.tableResource.query(params)
      .then(items => this.items = items);
  }

  filter(query: string) {
    this.filteredProducts = (query) ?
      this.products.filter(p => p.title.toLowerCase().includes(query.toLocaleLowerCase())) :
      this.products;

    this.initializeTable(this.filteredProducts);
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

