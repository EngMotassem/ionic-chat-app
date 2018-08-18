import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchuserPage } from './searchuser';
import { ComponentModule } from '../../app/components/component.module';

@NgModule({
  declarations: [
    SearchuserPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchuserPage),
    ComponentModule
  ],
})
export class SearchuserPageModule {}
