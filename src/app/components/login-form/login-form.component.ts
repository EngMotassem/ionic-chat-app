import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { NavController } from 'ionic-angular';

import { Accout } from '../../model/accout';

import{AngularFireAuth} from 'angularfire2/auth';
import { Loginresponse } from '../../model/loginresponse';


@Component({
  
  selector: 'app-login-form',
  templateUrl: './login-form.component.html' ,

  providers:[AngularFireAuth]


  
  //styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  user ={}as  Accout
  @Output () loginstatus:EventEmitter<Loginresponse>


  constructor(private navCtrl:NavController ,private  _auth:AngularFireAuth) {

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
  try{
  
    const result:Loginresponse ={ 
      
      result : await this._auth.auth.signInWithEmailAndPassword(this.user.email,this.user.password)
      }
        this.loginstatus.emit(result)
    console.log(result)

    
  
  }
  
  catch(e){

    const error:Loginresponse={

      error:e
        }

    this.loginstatus.emit(error)
  
    console.log(e)
  }
      
  
  
    }

}
