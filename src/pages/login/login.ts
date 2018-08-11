import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../app/model/user';
import { InboxPage } from '../inbox/inbox';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user ={}as  User

  constructor(private navCtrl: NavController, private navParams: NavParams) {
  }

  navigateToPage(pagename :string){

    if(pagename==='TabsPage'){
      this.navCtrl.setRoot(pagename)
    }
    else{

    this.navCtrl.push(pagename)
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
