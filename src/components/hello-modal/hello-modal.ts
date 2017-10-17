import { Component } from '@angular/core';

/**
 * Generated class for the HelloModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'hello-modal',
  templateUrl: 'hello-modal.html'
})
export class HelloModalComponent {

  text: string;

  constructor() {
    console.log('Hello HelloModalComponent Component');
    this.text = 'Hello World';
  }

}
