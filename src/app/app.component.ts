import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {Page1} from "../pages/page1/page1";
import {Page2} from "../pages/page2/page2";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = Page1;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, private splashScreen: SplashScreen, private statusBar: StatusBar) {
    this.splashScreen.hide();
    this.statusBar.styleDefault();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Page One', component: Page1 },
      { title: 'Page Two', component: Page2 }
    ]
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}

