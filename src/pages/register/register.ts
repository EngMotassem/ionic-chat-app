import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Loginresponse } from '../../app/model/loginresponse';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private toast:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  registerstatus(event:Loginresponse){
if(!event.erroe){
  this.toast.create({
    message:'account created ',
    duration:3000
  }).present()
this.navCtrl.setRoot('TabsPage');
}
else{
  this.toast.create({
    message:event.erroe.message,
    duration:3000
  }).present()

}

  }

}
