import { Component } from '@angular/core';
import {IonicPage, Platform} from 'ionic-angular';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  isWindows: Boolean;

  constructor(public platform: Platform) {
    this.isWindows = platform.is('windows');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

}
