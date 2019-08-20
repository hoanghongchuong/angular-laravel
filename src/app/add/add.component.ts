import { Component, OnInit } from '@angular/core';
import {Product} from '../shared/product.model';
import {ProductService} from '../shared/product.service';
import {Router, Params} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  product = new Product();
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack()   {
    this.router.navigate(['/home']);
  }
}
