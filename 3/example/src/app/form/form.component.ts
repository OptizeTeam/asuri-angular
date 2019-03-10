import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  constructor() {
  }

  formData;
  customers = [];

  ngOnInit() {
    this.formData = new FormGroup({
      firstName: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(2)
      ])),
      lastName: new FormControl('', formControl => {
        if (formControl.value.length < 3) {
          return {
            lastName: true
          };
        }
      }),
      age: new FormControl('', Validators.compose([
        Validators.required,
        Validators.min(18)
      ])),
      address: new FormControl('- unknown -'),
      phone: new FormControl(''),
      email: new FormControl('')
    });
  }

  onClickSubmit(data) {
    const customer = [];

    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        customer.push(data[key]);
      }
    }

    this.customers.push(customer);
  }
}
