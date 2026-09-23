import { Component, signal } from '@angular/core';
import { ReactiveForm } from './reactive-form/reactive-form';
import { GroupForms } from './group-forms/group-forms';

@Component({
  selector: 'app-root',
  imports: [GroupForms],
  // imports: [ReactiveForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-angular-app');

}
