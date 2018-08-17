import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from '../../app/model/user';
import { InboxPage } from '../inbox/inbox';
import { Loginresponse } from '../../app/model/loginresponse';


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


  constructor(private navCtrl: NavController, private navParams: NavParams,private toast:ToastController) {
  }

  login(event:Loginresponse){
    if(event.erroe){

      this.toast.create({
        message:event.erroe.message,
        duration:3000
      }).present()
      return false
    }
    else{
      this.toast.create({
        message:'succes login',
        duration:3000
      }).present()
      this.navCtrl.setRoot('EditprofilePage')

    }
    console.log(event)
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
