import {  NgModule } from '@angular/core';
import{IonicModule}from'ionic-angular';

import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { AuthProvider } from '../../providers/auth/auth';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { DataProvider } from '../../providers/data/data';


@NgModule({
  declarations: [
    
    LoginFormComponent,
    RegisterFormComponent,
    EditprofileComponent
  ],
  imports: [
    IonicModule,
    

    
  ],
  exports:[
    LoginFormComponent,
    RegisterFormComponent,
    EditprofileComponent
  ],
  entryComponents: [
  
],
  providers: [
    AuthProvider,
    DataProvider
    
  ]
})
export class ComponentModule {}
