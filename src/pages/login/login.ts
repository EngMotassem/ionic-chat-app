import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from 'firebase/app';
import { Loginresponse } from '../../app/model/loginresponse';
import { DataProvider } from '../../providers/data/data';
import{Subscription} from 'rxjs/Subscription';
import { AuthProvider } from '../../providers/auth/auth';


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
  authuser$:Subscription
  authUser:User
 

  constructor(private navCtrl: NavController, private navParams: NavParams,
    private toast:ToastController
  , private data:DataProvider , private auth:AuthProvider) {
    this.authuser$=this.auth.getAuthUser().subscribe((user:User)=>{
      this.authUser=user
    })
    
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

      this.data.getprofile(this.authUser).subscribe(data =>{
        data? this.navCtrl.setRoot('TabsPage') :  this.navCtrl.setRoot('EditprofilePage')
        console.log('login page',data)
       
      })
    //  this.navCtrl.setRoot('EditprofilePage')

    }
    console.log(event)
  }

  

  ionViewDidLoad() {


  }

}
