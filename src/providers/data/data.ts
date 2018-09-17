import { Injectable } from '@angular/core';
import{AngularFireDatabase,AngularFireObject,AngularFireList}from 'angularfire2/database';

import{Subscription} from 'rxjs/Subscription';

import{User, database} from 'firebase/app';
import { AuthProvider } from '../auth/auth';
import { Profile } from '../../app/model/profile';

import 'rxjs/add/operator/take';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';



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

  getCurrentUser():User{

    this.authuser$=this.auth.getAuthUser().subscribe((user:User)=>{
      this.authUser=user
      console.log(" current user ", this.authUser)
      
    }) 
    return this.authUser

  }


  searchfirebaseprofile(quey:string){
    return this.profileList= this.afdatabase.list('/profiles',ref=>ref.orderByChild('firstname').startAt(quey))
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

    //this.auth.getAuthUser
    this.profileobject=this.afdatabase.object(`/profiles/${user.uid}`)

    console.log("user key", user.toJSON())

    return this.profileobject.valueChanges().take(1);

  }



  getMappedprofile(){

  
   return this.auth.getAuthUser()
 .mergeMap(p=>this.getprofile(p))

 
   
  }


  setUserOnLine(profile:Profile,user:User){
    user= this.getCurrentUser()

    const ref =this.afdatabase.database.ref(`onlineusers/${user.uid}`)

    try{

      console.log('profile', profile)

      ref.update({... profile})
      ref.onDisconnect().remove()


    }
    catch(e){
console.log('message', e)
    }

    
    
  }
getOnlineUserRef(){
  return this.afdatabase.list('onlineusers')
}
  
  



}
