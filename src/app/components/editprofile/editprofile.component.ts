import{Subscription} from 'rxjs/Subscription';

import{User} from 'firebase';
import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Profile } from '../../model/profile';
import { DataProvider } from '../../../providers/data/data';
import{AngularFireDatabase,AngularFireObject}from 'angularfire2/database';
import { AuthProvider } from '../../../providers/auth/auth';



@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
 // styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

profile = {} as Profile
  authuser$:Subscription
  authUser:User
  profileobject:AngularFireObject<Profile>
  @Output() isProfilesaved:EventEmitter<boolean>

  constructor(private data:DataProvider , private auth:AuthProvider) { 

    this.authuser$=this.auth.getAuthUser().subscribe((user:User)=>{
      this.authUser=user
    }) 
  this.isProfilesaved= new EventEmitter<boolean>()
  }

  ngOnInit() {
  }

async  saveprofile(){
  if(this.authUser){
    const result = await this.data.saveProfile(this.authUser,this.profile)
    this.isProfilesaved.emit(result)

    console.log(result)
  }
  }

}
