import { Component, OnInit } from '@angular/core';
import { DataProvider } from '../../../providers/data/data';
import { Profile } from '../../model/profile';

@Component({
  selector: 'app-searchuser-form',
  templateUrl: './searchuser-form.component.html',
  //styleUrls: ['./searchuser-form.component.css']
})
export class SearchuserFormComponent implements OnInit {


  firstname:string
  profiles:Profile[]

  constructor(private db:DataProvider) {

    
   }

  ngOnInit() {
    this.db.searchprofile().valueChanges().subscribe(p=>{
      this.profiles=p
      
      console.log("profiles", p)

        })
  }
  searchuser(querystring : string){

   this.db.searchprofile().valueChanges().subscribe(p=>{
this.profiles=p  
  })

  }

}
