import { Component, OnInit } from '@angular/core';
import {ProductService} from '../shared/product.service';
import {ToasterServiceService} from '../shared/toaster-service.service';
// import { HttpClient } from '@angular/common/http';
// import { Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor(private productService: ProductService, private toastService: ToasterServiceService) { }
  products: any;
  ngOnInit() {
    this.getAllProduct();
  }
  getAllProduct() {
    this.productService.getData().subscribe(
      data => {
        this.products = data;
        this.products = this.products.data;
      }
    );
  }
  deleteProduct(id) {
    var response = confirm('Bạn có chắc muốn xóa');
    if (response === true) {
      this.productService.deleteDataById(id)
        .subscribe( res => {
          this.getAllProduct();
          this.toastService.Success('Xóa thành công','success');
        });
    }else {

    }

  }
}
