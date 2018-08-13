import { Component, OnInit } from '@angular/core';
import { Accout } from '../../model/accout';

import{AngularFireAuth} from 'angularfire2/auth';
import { ToastController } from 'ionic-angular';



@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  providers:[AngularFireAuth]
  //styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  user = {} as  Accout




  constructor( private _auth:AngularFireAuth , private toast:ToastController) { 


  }

  ngOnInit() {
    
  }
  async register(){

    try{
      console.log(this.user)


    const result = await this._auth.auth.createUserWithEmailAndPassword(this.user.email.toLocaleLowerCase(),this.user.password.toLocaleLowerCase());

    this.toast.create({
      message:'account created ',
      duration:3000
    }).present()
    console.log(result)

  }

    catch(e){

      this.toast.create({
        message: e,
        duration:3000
      }).present()
  

    }
    
    
  }

}
