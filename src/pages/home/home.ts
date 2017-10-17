import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  myIcon: String;
  private iconNames: Array<String> = ['home', 'map', 'pin', 'heart', 'star'];

  constructor(public navCtrl: NavController) {
    this.myIcon = this.iconNames[Math.floor(Math.random() * this.iconNames.length)];
  }

}
