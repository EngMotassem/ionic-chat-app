import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Accout } from '../../model/accout';

import { ToastController } from 'ionic-angular';
import { Loginresponse } from '../../model/loginresponse';
import { AuthProvider } from '../../../providers/auth/auth';



@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  //styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  user = {} as  Accout


@Output() regStatus:EventEmitter<Loginresponse>

  constructor( private auth:AuthProvider , private toast:ToastController) { 

    this.regStatus=new EventEmitter<Loginresponse>()


  }

  ngOnInit() {
    
  }
  async register(){

    

    const result = await this.auth.createUserwithEmail(this.user);

    this.regStatus.emit(result)
    /*
    this.toast.create({
      message:'account created ',
      duration:3000
    }).present()
    */
    console.log(result)

  

    
    
    
  }

}
