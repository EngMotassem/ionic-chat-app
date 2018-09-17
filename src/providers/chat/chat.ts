import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Channels } from '../../app/model/Channels';
import { ChannelMessage } from '../../app/model/ChannelMessage';
import { Profile } from '../../app/model/profile';
import { Observable } from 'rxjs';

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
    return this.database.list('/chanel-name').snapshotChanges()
    
  }

  // get chats of messages
  getChannelChatRef(key:string):Observable<Profile[]>{

    return this.database.list(`/chanel/${key}`).valueChanges()
  }

  // send message to channel 

  async sendChannelMessage(key:string , chanelMessage :ChannelMessage)
  {
  await this.database.list(`/chanel/${key}`).push(chanelMessage)
  }

  

}
