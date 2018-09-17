import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Channels } from '../../app/model/Channels';
import { ChatProvider } from '../../providers/chat/chat';
import { ChannelMessage } from '../../app/model/ChannelMessage';
import { Observable } from 'rxjs/Observable';
import { AngularFireList } from 'angularfire2/database';

import { timer, combineLatest } from 'rxjs';


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

  chatmessage:Observable<ChannelMessage []>

//chatmessage:ChannelMessage[]
  constructor(public navCtrl: NavController, public navParams: NavParams,private chat:ChatProvider) {
  }

  ionViewWillLoad() {
    this.channel=this.navParams.get('channel')

    console.log('channel key is  ',this.channel.key);

    this.chatmessage=this.chat.getChannelChatRef(this.channel.key)
  }

  sendmessage(content :string){

    let ChannelMessage:ChannelMessage={
      content
    }
    console.log('message', this.channel.key)

    this.chat.sendChannelMessage(this.channel.key, ChannelMessage)

  }

}
