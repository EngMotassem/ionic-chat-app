import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChanelsPage } from './chanels';

@NgModule({
  declarations: [
    ChanelsPage,
  ],
  imports: [
    IonicPageModule.forChild(ChanelsPage),
  ],
})
export class ChanelsPageModule {}
