import { Component } from '@angular/core';
import {ViewController} from "ionic-angular";

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

  constructor(public viewCtrl: ViewController) { }

  close() {
    this.viewCtrl.dismiss({'random' : 'data'});
  }

}
