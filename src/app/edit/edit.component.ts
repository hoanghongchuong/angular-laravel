import { Component, OnInit } from '@angular/core';
import {Product} from '../shared/product.model';
import {ProductService} from '../shared/product.service';
import {ToasterServiceService} from '../shared/toaster-service.service';
import {Router, Params, ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  product: any;
  constructor(
    private productService: ProductService,
    private toastService: ToasterServiceService,
    private router: Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit() {
    this.getOneProduct();
  }
  goBack()   {
    this.router.navigate(['/home']);
  }
  getOneProduct() {
    let id = this.route.snapshot.params['id'];
    this.productService.show(id).subscribe(product => {
        this.product = product;
        this.product = this.product.data;
        console.log(this.product);
    });
  }

  onSubmit(form: NgForm) {
    this.productService.update(form.value, form.value.id)
      .subscribe(res => {
        console.log(res);
      });
  }
}
