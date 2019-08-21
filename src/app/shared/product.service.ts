import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
  server = 'http://localhost:8000/api/products/';

  constructor(private _http: Http) { }
  getData() {
    return this._http.get(this.server).map((response: Response) => response.json());
  }

  insertData(value) {
    const headers = new Headers({'Content-type': 'application/json'});
    const body = JSON.stringify(value);
    return this._http.post(this.server, body, {headers}).map((data: Response) => data.json());
  }
  show(id) {
    return this._http.get(this.server + id )
      .map((response: Response) => response.json());
  }
  update(value, id) {
    const body = JSON.stringify(value);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this._http.put(this.server + id, body, {headers}).map((response: Response) => response.json());
  }
  deleteDataById(id: string) {
    return this._http.delete(this.server + id).map(success => success.json());
  }
}
