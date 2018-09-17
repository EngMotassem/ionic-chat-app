import { Component, OnInit } from '@angular/core';
import { DataProvider } from '../../../providers/data/data';
import { AuthProvider } from '../../../providers/auth/auth';
import { Observable } from 'rxjs';
import { Profile } from '../../model/profile';

@Component({
  selector: 'app-onlineusers',
  templateUrl: './onlineusers.component.html',
 // styleUrls: ['./onlineusers.component.css']
})
export class OnlineusersComponent implements OnInit {


  userlist: Observable<Profile[]>

  constructor(private data:DataProvider,private auth:AuthProvider) { }

  ngOnInit() {



  this.setUserOnine()

  this.getonlineUsers()


  }


getonlineUsers(){

  this.data.getOnlineUserRef().valueChanges().subscribe(users=>{

    //this.userlist=users

    console.log('user count',users.length)
  })
}

  setUserOnine(){

    this.data.getMappedprofile().subscribe(profile=>{
      console.log('profile', profile)
      this.data.setUserOnLine(profile,this.data.getCurrentUser().uid)
    })

  }

}
