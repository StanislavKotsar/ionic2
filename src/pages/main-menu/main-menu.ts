import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VineListPage } from '../vine-list/vine-list';
/**
 * Generated class for the MainMenuPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-main-menu',
  templateUrl: 'main-menu.html',
})
export class MainMenuPage {
  items:[{name:string, iconName}]= [
    {name:'ORDER', iconName:'basket'},{name:'LOYALTY', iconName:'wine'},{name:'BOOK A TABLE', iconName:'calendar'},
    {name:'FAVORITES', iconName:'heart'}, {name:'FEEDBACK', iconName:'text'},{name:'OUR MENU', iconName:'book'}
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainMenuPage');
  }

  enterListmenu(){
    this.navCtrl.push(VineListPage);
  }

}
