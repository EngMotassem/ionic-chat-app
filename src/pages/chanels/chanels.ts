import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ChatProvider } from '../../providers/chat/chat';
import { Observable } from 'rxjs';
import { Channels } from '../../app/model/Channels';
import { AngularFireList } from 'angularfire2/database';

/**
 * Generated class for the ChanelsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chanels',
  templateUrl: 'chanels.html',
  providers:[ChatProvider]
})
export class ChanelsPage {

channellist:Observable<Channels[]>

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertctrl:AlertController
    ,private chat:ChatProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChanelsPage');
  }

  ionViewWillLoad(){

    this.getChannels()
  }

  showalertdialog(){

    this.alertctrl.create(
      {
        title:"add new channel",
        inputs:[{
          name:'channelname'
        }],
        buttons:[{
          text:'cancel',
          role:'cancel',
          
          
        },
        {
          text:'add',
          handler:data=>{
            this.chat.addChannel(data.channelname)
          }
        }
      ]
      }

    ).present()

    }

    addchannel(name:string){
      this.chat.addChannel(name)
  
    }

    getChannels(){

      this.channellist=this.chat.getChannelRef()
    }

    navigateToChannel(channel:Channels){
  this.navCtrl.push('ChannelChatPage',{channel})
  console.log('channel name', channel.name)
    }
  }




