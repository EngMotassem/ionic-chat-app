import {  NgModule } from '@angular/core';
import{IonicModule}from'ionic-angular';

import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { AuthProvider } from '../../providers/auth/auth';


@NgModule({
  declarations: [
    
    LoginFormComponent,
    RegisterFormComponent,
    
  ],
  imports: [
    IonicModule,
    

    
  ],
  exports:[
    LoginFormComponent,
    RegisterFormComponent,
  ],
  entryComponents: [
  
],
  providers: [
    AuthProvider
    
  ]
})
export class ComponentModule {}
