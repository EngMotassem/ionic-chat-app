import { Component, OnInit } from '@angular/core';
import { DataProvider } from '../../../providers/data/data';
import { Profile } from '../../model/profile';
import { User } from 'firebase';

@Component({
  selector: 'app-searchuser-form',
  templateUrl: './searchuser-form.component.html',
  //styleUrls: ['./searchuser-form.component.css']
})
export class SearchuserFormComponent implements OnInit {


  firstname:string
  profiles:Profile[]

  user:User

  constructor(private db:DataProvider) {
    
    this.db.searchprofile().valueChanges().subscribe(p=>{
      this.profiles=p
      
      console.log("profiles", p)

        })
    
   }

  ngOnInit() {
   // this.profiles=[]

    //this.user=this.db.getCurrentUser()
    //console.log(this.user)
    
  }
  searchuser(querystring : string){

   this.db.searchprofile().valueChanges().subscribe(p=>{
this.profiles=p  
  })

  }

  searchfire(){
    this.db.
    searchfirebaseprofile(this.firstname).valueChanges().subscribe(p=>{
      this.profiles=p
      console.log("profile data", this.profiles)
    })
  }

}
