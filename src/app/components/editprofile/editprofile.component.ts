import{Subscription} from 'rxjs/Subscription';

import{User} from 'firebase';
import { Component, OnInit } from '@angular/core';
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

  constructor(private data:DataProvider , private auth:AuthProvider) { 

    this.authuser$=this.auth.getAuthUser().subscribe((user:User)=>{
      this.authUser=user
    })  }

  ngOnInit() {
  }

async  saveprofile(){
  if(this.authUser){
    const result = await this.data.saveProfile(this.authUser,this.profile)

    console.log(result)
  }
  }

}
