import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-group-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './group-forms.html',
  styleUrl: './group-forms.css',
})
export class GroupForms {
  loginForm=new FormGroup({
    firstName:new FormControl(''),
    lastName:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
  })
  handleProfile(){
    console.log(this.loginForm.value);
  }

  reset(){
    this.loginForm.setValue({
    firstName:(''),
    lastName:(''),
    email:(''),
    password:('')
    })
  }
}
