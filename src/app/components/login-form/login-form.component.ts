import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Accout } from '../../model/accout';

import{AngularFireAuth} from 'angularfire2/auth';


@Component({
  
  selector: 'app-login-form',
  templateUrl: './login-form.component.html' ,

  providers:[AngularFireAuth]


  
  //styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  user ={}as  Accout


  constructor(private navCtrl:NavController ,private  _auth:AngularFireAuth) { }

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
  
    const result= await this._auth.auth.signInWithEmailAndPassword(this.user.email,this.user.password)
    console.log(result)
  
  }
  
  catch(e){
  
    console.log(e)
  }
      
  
  
    }

}
