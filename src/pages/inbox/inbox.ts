import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MESSAGE_LIST } from '../../app/mocks/messagesdata';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the InboxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html',
})
export class InboxPage {
  messags= MESSAGE_LIST ;

  constructor(private navCtrl: NavController, public navParams: NavParams ,private auth:AuthProvider) {

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InboxPage');
    console.log(this.messags)
  }
  navigate(){
this.navCtrl.push("SearchuserPage")
  }

  logout(){
    this.auth.logout();
    this.navCtrl.setRoot('LoginPage')

  }



}
