import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { email, form, FormField, maxLength, minLength, required } from '@angular/forms/signals';
@Component({
  selector: 'app-signal-forms',
  imports: [FormField],
  templateUrl: './signal-forms.html',
  styleUrl: './signal-forms.css',
})
export class SignalForms {
  loginModel = signal({email: '' , password: ''})

  loginForm = form(this.loginModel, (field)=>{
    required(field.email,{message:"enter the user email"});
    minLength(field.email,5,{message:"enter the valid email"});
    email(field.email,{message:"please enter the valid email"});


    required(field.password,{message:"enter the user password"});
    minLength(field.password,5,{message:"enter the valid password"});
    maxLength(field.password,20,{message:"enter the valid password"});
   

  });

  submitForms(){
    console.log(this.loginForm().value());
  }
  resetForms(){
    this.loginModel.set({email:'',password:''});
  }

}
