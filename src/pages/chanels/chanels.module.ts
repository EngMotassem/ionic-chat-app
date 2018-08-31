import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChanelsPage } from './chanels';
import { ChatProvider } from '../../providers/chat/chat';

@NgModule({
  declarations: [
    ChanelsPage,
  ],
  imports: [
    IonicPageModule.forChild(ChanelsPage),
  ],
})
export class ChanelsPageModule {}
