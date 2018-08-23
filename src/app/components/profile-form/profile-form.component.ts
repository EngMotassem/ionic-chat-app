import { Component, OnInit } from '@angular/core';
import { Profile } from '../../model/profile';
import { DataProvider } from '../../../providers/data/data';
import { User } from 'firebase';
import { AuthProvider } from '../../../providers/auth/auth';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  //styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {

  profile={}as Profile

  user:User

  constructor(private data:DataProvider , private auth:AuthProvider) {

    this.user=this.data.getCurrentUser();
    console.log('profile current ',this.user)


    //this.data.getprofile(this.user).subscribe(data=>console.log(this.profile=data))

   }

  ngOnInit() {
  }

}
