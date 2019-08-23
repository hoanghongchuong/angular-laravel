import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {User, Address, states} from '../shared/data-model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  states = states;
  userFormGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.userFormGroup = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', Validators.required],
      addresses: this.formBuilder.group({
        street: ['', Validators.required],
        city: '',
        state: this.states[0],
      })
    });
  }

}
