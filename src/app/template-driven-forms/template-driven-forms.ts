import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  imports: [FormsModule,CommonModule],
  templateUrl: './template-driven-forms.html',
  styleUrl: './template-driven-forms.css',
})
export class TemplateDrivenForms {

  userDetails:any = {}
  addUser(data:NgForm){
    console.log("data submitted");
    console.log(data.value);
    this.userDetails=data.value
  }
}
