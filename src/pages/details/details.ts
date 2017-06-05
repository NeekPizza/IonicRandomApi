import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  User: object;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
        
    this.User = this.navParams.get('user');
    console.log(this.User);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}
