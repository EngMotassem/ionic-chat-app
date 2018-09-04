import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sendMessage',
  templateUrl: './sendMessage.component.html',
  //styleUrls: ['./sendMessage.component.css']
})
export class SendMessageComponent implements OnInit {

  messagecontent:string
  @Output() sendMessage: EventEmitter<string>

  constructor() { 

    this.sendMessage=new EventEmitter<string>()
  }

  send(){

    this.sendMessage.emit(this.messagecontent)
  }



  ngOnInit() {
  }

}
