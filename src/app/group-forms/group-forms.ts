import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-group-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './group-forms.html',
  styleUrl: './group-forms.css',
})
export class GroupForms {
  loginForm=new FormGroup({
    firstName:new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(20)]),
    lastName:new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(20)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(5)]),
  })

 get firstName(){
    return this.loginForm.get("firstName")
  }  
  get lastName(){
    return this.loginForm.get("lastName")
  }   
  get email(){
    return this.loginForm.get("email")
  }
    get password(){
    return this.loginForm.get("password")
  }


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
