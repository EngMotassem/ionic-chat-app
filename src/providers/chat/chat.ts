import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Channels } from '../../app/model/Channels';
import { Observable } from 'rx';

/*
  Generated class for the ChatProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChatProvider {

  constructor(private  database : AngularFireDatabase) {
    console.log('Hello ChatProvider Provider');
  }
  addChannel(channelname :string){

    this.database.list('/chanel-name/').push({name:channelname})
  }
  // get reference of channel 

  getChannelRef(){
    return this.database.list('chanel-name').valueChanges()
    
  }

  // get chats of messages
  getChannelChatRef(key:string){

    return this.database.list(`chanel-name/${key}`).valueChanges()


  }

}
