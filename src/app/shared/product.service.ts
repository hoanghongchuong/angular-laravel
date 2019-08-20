import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class ProductService {
  server = 'http://localhost:8000/api/products/';
  header: Headers = new Headers();
  constructor(private http: HttpClient) { }

}
