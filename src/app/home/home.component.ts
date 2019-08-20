import { Component, OnInit } from '@angular/core';
import {ProductService} from '../shared/product.service';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor(private productService: ProductService, private http: HttpClient) { }
  products: any;
  private url = 'http://localhost:8000/api/products/';
  ngOnInit() {
    this.http.get(this.url).subscribe(data => {
      this.products = data;
      this.products = this.products.data;
      // console.log(this.products.data);
    });
  }

}
