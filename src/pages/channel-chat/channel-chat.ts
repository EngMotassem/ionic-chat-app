import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Channels } from '../../app/model/Channels';
import { ChatProvider } from '../../providers/chat/chat';

/**
 * Generated class for the ChannelChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-channel-chat',
  templateUrl: 'channel-chat.html',
})
export class ChannelChatPage {

  channel:Channels

  constructor(public navCtrl: NavController, public navParams: NavParams,private chat:ChatProvider) {
  }

  ionViewWillLoad() {
    this.channel=this.navParams.get('channel')
    console.log(this.channel);
  }

}
