import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../shared/product.model';
import {ProductService} from '../shared/product.service';
import {ToasterServiceService} from '../shared/toaster-service.service';
import {Router, Params} from '@angular/router';
import {NgForm} from '@angular/forms';
import {ValidatorForm} from './validator';

declare var $: any;

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [ValidatorForm]
})
export class AddComponent implements OnInit {
  product= new Product();
  public file_src = '../assets/images/logo_angular.png';
  fileData: File;
  formErrors: any;
  // data = new Product(1,'2', '3', 'n',5, '4', 'g');
  constructor(
     private router: Router,
     private  productService: ProductService,
     private toastService: ToasterServiceService,
     private http: HttpClient,
     private  validator: ValidatorForm
     )  { }

  ngOnInit() {
    this.formErrors = {name: ''};
  }
  goBack()   {
    this.router.navigate(['/home']);
  }
  onFileChanged(event) {
    this.fileData = event.target.files[0];
  }
  onSubmit(form: NgForm) {
    this.product.image = this.fileData;
    const product = this.validator.createForm(this.product);
    console.log(product);
    this.formErrors = this.validator.checkValidate(product);
    console.log(this.formErrors);
    // form.value['image'].setValue(this.fileData);
    // console.log(form.value);
    // this.productService.insertData(form.value)
    //   .subscribe(data => {
    //     this.toastService.Success('Thêm thành công','success');
    //     this.goBack();
    //   });
  }
}
