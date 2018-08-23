import { Component, OnInit } from '@angular/core';
import { Profile } from '../../model/profile';
import { DataProvider } from '../../../providers/data/data';
import{Subscription} from 'rxjs/Subscription';

import { User } from 'firebase';
import { AuthProvider } from '../../../providers/auth/auth';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  //styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {

  profile={}as Profile

  authuser$:Subscription

  user:User

  constructor(private data:DataProvider , private auth:AuthProvider) {

    

    this.authuser$=this.auth.getAuthUser().subscribe((user:User)=>{
      this.user=user

      this.data.getprofile(this.user).subscribe(data=>console.log(this.profile=data))

    })



   }

  ngOnInit() {
  }

}
