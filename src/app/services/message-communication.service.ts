import { Injectable, OnInit, OnDestroy} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import * as io from 'socket.io-client';

import { UserService } from './user.service';
import { MessageModel } from '../models/message.model'


Injectable()
export class MessageCommunicationService{
  public roomId: string;
  public clientToSendTo;
  private url = 'http://172.20.10.4:8080';
  private socket;
  private role;
  private userService:UserService;

  public scrollSubject = new Subject();
  public customerConsentComponentSubject = new Subject();
  public profileCardComponentSubject = new Subject();
  public bannerComponentSubject = new Subject();


  constructor(){}

  connect(role,roomId){

    this.role = role;
    this.roomId = roomId;
    this.socket = io(this.url);

    const message = new MessageModel();
    message.component = 'joinRoom';
    message.message = {
      role: role,
      roomId: roomId
    }

    this.socket.emit('message',message);

    this.socket.on('message',(message) => {
      console.log(message);
      if(message.component === 'getRoomStatus'){
        // Inform user room is full
        console.log(message.message);
      }else if(message.component === 'setClientToSendTo'){

        this.clientToSendTo = message.message;

      }else if(message.component === 'banner'){

        this.bannerComponentSubject.next(message.message);
      }else if(message.component === 'scroll'){

      }else if(message.component === 'profile-card'){

        this.profileCardComponentSubject.next(message.message)
      }else if(message.component === 'customer-consent'){

        this.customerConsentComponentSubject.next(message.message);
      }
    });
  }

  sendMessage(component, message) {
    const messageToSend = new MessageModel();
    messageToSend.clientId = this.clientToSendTo;
    messageToSend.component = component;
    messageToSend.message = message;

    this.socket.emit('message',messageToSend);
  }

  ngOnDestroy(){
    this.socket.disconnect();
  }
}
