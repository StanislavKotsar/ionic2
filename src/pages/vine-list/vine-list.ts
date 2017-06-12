import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VineListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-vine-list',
  templateUrl: 'vine-list.html',
})
export class VineListPage {
numbers;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.numbers = Array(5).fill(4);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VineListPage');
  }

}
