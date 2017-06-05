import { ApiServiceProvider } from './../../providers/api-service/api-service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  Users = [];

  constructor(
    public navCtrl: NavController,
    public api: ApiServiceProvider) {

      this.api.getData().subscribe(data => {
        this.Users = data;
      });
  }

  details(user) {
    this.navCtrl.push('DetailsPage', {user});
  }

}
