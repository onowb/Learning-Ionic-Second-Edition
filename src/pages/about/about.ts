import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(public navCtrl: NavController) {
  }

  goBack() {
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log("About page: ionViewDidLoad Fired");
  }
  ionViewWillEnter() {
    console.log("About page: ionViewWillEnter Fired");
  }
  ionViewDidEnter() {
    console.log("About page: ionViewDidEnter Fired");
  }
  ionViewWillLeave() {
    console.log("About page: ionViewWillLeave Fired");
  }
  ionViewDidLeave() {
    console.log("About page: ionViewDidLeave Fired");
  }
  ionViewWillUnload() {
    console.log("About page: ionViewWillUnload Fired");
  }
  ionViewDidUnload() {
    console.log("About page: ionViewDidUnload Fired");
  }

}
