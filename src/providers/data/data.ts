import { Injectable } from '@angular/core';
import{AngularFireDatabase,AngularFireObject}from 'angularfire2/database';

import{Subscription} from 'rxjs/Subscription';

import{User} from 'firebase';
import { AuthProvider } from '../auth/auth';
import { Profile } from '../../app/model/profile';

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
  


  constructor(private afdatabase:AngularFireDatabase, private auth:AuthProvider) {

    
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

  isNewUser(user:User){
    

  }
  



}
