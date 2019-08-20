import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }
  products: any;
  private url = 'http://localhost:8000/api/products';
  getProducts() {
    return this.http.get(this.url).subscribe(data => {
      // console.log(data);
    });
  }
}
