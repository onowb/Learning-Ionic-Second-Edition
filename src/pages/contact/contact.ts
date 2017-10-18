import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {HomePage} from "../home/home";
import {AboutPage} from "../about/about";

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

  constructor(public navCtrl: NavController) {
  }

  goTo(page) {
    if (page === 'home') {
      this.navCtrl.push(HomePage);
    } else if (page === 'about') {
      this.navCtrl.push(AboutPage);
    }
  }

  back() {
    if (this.navCtrl.length() >= 2) {
      this.navCtrl.pop();
    }
  }
}
