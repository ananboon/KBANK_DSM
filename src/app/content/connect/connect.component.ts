import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

import { MessageCommunicationService } from '../../services/message-communication.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit, OnDestroy{
  @ViewChild('roomId') roomId:string;

  constructor(
    private messageCommunicationService: MessageCommunicationService,
    private userService: UserService
  ){}

  onConnect(){
    this.messageCommunicationService.roomId = this.roomId;
    this.messageCommunicationService.connect();
  }

  ngOnInit(){

  }

  ngOnDestroy(){

  }
}
