import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//import { LocalNotifications } from '@ionic-native/local-notifications';
declare var cordova;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
  //private localNotifications: LocalNotifications,
  public navCtrl: NavController
  ) {
  }

  addNotifications() {
    // Schedule delayed notification
    //this.localNotifications.
    cordova.plugins.notification.local.
    schedule({
       text: 'Delayed ILocalNotification',
       trigger: {
         //at: new Date(2019, 3, 2, 11, 30),
         in: 2, unit: 'minute',
       },
       led: 'FF0000',
       sound: null
    });
  }

}
