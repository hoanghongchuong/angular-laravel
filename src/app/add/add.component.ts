import { Component, OnInit } from '@angular/core';
import {Product} from '../shared/product.model';
import {ProductService} from '../shared/product.service';
import {ToasterServiceService} from '../shared/toaster-service.service';
import {Router, Params} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  product = new Product();
  constructor(private router: Router, private  productService: ProductService, private toastService: ToasterServiceService)  { }

  ngOnInit() {
  }
  goBack()   {
    this.router.navigate(['/home']);
  }
  onSubmit(form: NgForm) {
    this.productService.insertData(form.value)
      .subscribe(data => {
        this.toastService.Success('Thêm thành công','success');
        this.goBack();
      });
  }
}
