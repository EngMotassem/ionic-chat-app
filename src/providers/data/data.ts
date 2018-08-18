import { Injectable } from '@angular/core';
import{AngularFireDatabase,AngularFireObject,AngularFireList}from 'angularfire2/database';

import{Subscription} from 'rxjs/Subscription';

import{User} from 'firebase/app';
import { AuthProvider } from '../auth/auth';
import { Profile } from '../../app/model/profile';

import 'rxjs/add/operator/take';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  authuser$:Subscription
  authUser:User
  profileobject:AngularFireObject<Profile>
  
   profileList:AngularFireList<Profile>

  constructor(private afdatabase:AngularFireDatabase, private auth:AuthProvider) {

    
  }

  searchprofile(){
   return this.profileList= this.afdatabase.list('/profiles')
   
    


  }

  saveProfile(user:User , userprofile:Profile ){

    //if(this.authUser){
      try{

      this.profileobject=this.afdatabase.object(`/profiles/${user.uid}`)

      this.profileobject.set(userprofile)
      return true
      }
      catch(e){
        console.log(e)
        return false

      }

  //  }

  }

  getprofile(user:User){
    this.profileobject=this.afdatabase.object(`/profiles/${user.uid}`)

    console.log("user key", user.toJSON())

    return this.profileobject.valueChanges().take(1);



  }
  



}
