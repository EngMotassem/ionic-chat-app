import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { NavController } from 'ionic-angular';

import { Accout } from '../../model/accout';

import { Loginresponse } from '../../model/loginresponse';
import { AuthProvider } from '../../../providers/auth/auth';




@Component({
  
  selector: 'app-login-form',
  templateUrl: './login-form.component.html' ,



  
  //styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  user ={}as  Accout
  @Output () loginstatus:EventEmitter<Loginresponse>


  constructor(private navCtrl:NavController ,private  _auth:AuthProvider) {

    this.loginstatus= new EventEmitter<Loginresponse>()
   }

  navigateToPage(pagename :string){

    if(pagename==='TabsPage'){
      this.navCtrl.setRoot(pagename)
    }
    else{

    this.navCtrl.push(pagename)
    }

  }


  ngOnInit() {
  }

  
 async  signIn(){

  var  loginresponse=await this._auth.signInwithEmail(this.user)

    this.loginstatus.emit(loginresponse)
    console.log(loginresponse)

  
      
  
  
    }

}
