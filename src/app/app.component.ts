import { Component } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';
import { formControlBinding } from '../../node_modules/@angular/forms/src/directives/ng_model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  userForm: FormGroup;
  constructor(){
    this.userForm = new FormGroup({
      'name': new FormControl(),
      'email': new FormControl(),
      'gender': new FormControl(),
      'favFood': new FormArray([
        new FormGroup({
          'indian': new FormControl()
        }),
        new FormGroup({
          'chinese': new FormControl()
        })
      ]),
      'addressess': new FormArray([
       this.createAddress()
       
      ])
    });
  }
  createAddress(){
    return  new FormGroup({
      'line1': new FormControl(),
      'line2': new FormControl(),
      'country': new FormControl(),
      'state': new FormControl(),
      'city': new FormControl()
    })
  }
  addAddress(){
    let myAddress = this.userForm.get('addressess') as FormArray; 
    myAddress.push(this.createAddress());
  }
}
