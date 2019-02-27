import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LocalNotifications } from '@ionic-native/local-notifications';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
  private localNotifications: LocalNotifications,
  public navCtrl: NavController
  ) {
  }

  addNotifications() {
    // Schedule delayed notification
    this.localNotifications.schedule({
       text: 'Delayed ILocalNotification',
       trigger: {
         at: new Date(new Date().getTime() + 3600)
       },
       led: 'FF0000',
       sound: null
    });
  }

}
