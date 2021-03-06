import {  NgModule } from '@angular/core';
import{IonicModule}from'ionic-angular';

import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { AuthProvider } from '../../providers/auth/auth';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { DataProvider } from '../../providers/data/data';
import { SearchuserFormComponent } from './searchuser-form/searchuser-form.component';
import { SearchPipe } from '../../pipes/search/search';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { SendMessageComponent } from './sendMessage/sendMessage.component';
import { OnlineusersComponent } from './onlineusers/onlineusers.component';


@NgModule({
  declarations: [
    
    LoginFormComponent,
    RegisterFormComponent,
    EditprofileComponent,
    SearchuserFormComponent,
    ProfileFormComponent,
    OnlineusersComponent,
    
SendMessageComponent,
    SearchPipe
  ],
  imports: [
    IonicModule,
    

    
  ],
  exports:[
    LoginFormComponent,
    RegisterFormComponent,
    EditprofileComponent,
    SearchuserFormComponent,
    ProfileFormComponent,
    SendMessageComponent,
    OnlineusersComponent
  ],
  entryComponents: [
  
],
  providers: [
    AuthProvider,
    DataProvider,
    
    
  ]
})
export class ComponentModule {}
