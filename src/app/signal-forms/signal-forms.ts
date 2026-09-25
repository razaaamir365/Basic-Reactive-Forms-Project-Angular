import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { form, FormField } from '@angular/forms/signals';
@Component({
  selector: 'app-signal-forms',
  imports: [FormField],
  templateUrl: './signal-forms.html',
  styleUrl: './signal-forms.css',
})
export class SignalForms {
  loginModel = signal({email: 'aamir12@gmail.com' , password: 'codebyaamir12'})

  loginForm = form(this.loginModel);

  submitForms(){
    console.log(this.loginForm().value());
  }
  resetForms(){
    this.loginModel.set({email:'',password:''});
  }

}
