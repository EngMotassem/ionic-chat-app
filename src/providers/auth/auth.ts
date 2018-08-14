import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{AngularFireAuth} from 'angularfire2/auth';
import {Accout} from '../../app/model/accout';
import {Loginresponse} from '../../app/model/loginresponse'



/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(private auth:AngularFireAuth) {
    console.log('Hello AuthProvider Provider');
  }
  async createUserwithEmail(account :Accout){

    try{
      return  <Loginresponse>{
       result: this.auth.auth.createUserWithEmailAndPassword(account.email,account.password)
      }

      

    }
    catch(e){
      return <Loginresponse>{
        erroe:e
      }

    }



  

  
}


  async signInwithEmail(account :Accout){

    try{
      return  <Loginresponse>{
       result: this.auth.auth.signInWithEmailAndPassword(account.email,account.password)
      }

      

    }
    catch(e){
      return <Loginresponse>{
        erroe:e
      }

    }
  }

   
}
