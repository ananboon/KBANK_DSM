import { Injectable, OnInit, OnDestroy} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import * as io from 'socket.io-client';

import { UserService } from './user.service';


Injectable()
export class MessageCommunicationService{
  public roomId: string;
  public clientToSendTo;
  private url = 'http://localhost:8080';
  private socket;
  private role;
  private userService:UserService;

  public scrollSubject = new Subject();
  public customerConsentComponentSubject = new Subject();
  public profileCardComponentSubject = new Subject();
  public bannerComponentSubject = new Subject();


  constructor(){}

  connect(){
    this.socket = io(this.url);

    // Create Room with the user id
    this.socket.emit('joinRoom',this.roomId);

    // Receive from server
    this.socket.on('setRole', (role) => {
      this.role = role;
    });

    this.socket.on('getRoomStatus', (status) => {
      // Need to inform user room is full
    });

    // Recieve from other client
    this.socket.on('setClientToSendTo', (clientId) => {
      this.clientToSendTo = clientId;

      // Sync windows scroll on connect
      this.scrollSubject.next('startScrollCapture');
    });

    this.socket.on('message', (message) => {
      if(message.component === 'banner'){
        this.bannerComponentSubject.next(message.message);
      }

      if(message.component === 'scroll'){
        this.scrollSubject.next(message.message);
      }
    });


  }

  sendMessage(component, message) {
    message = {
      'component' : component,
      'message': message
    }
    console.log(message);
    this.socket.emit('message',this.clientToSendTo,message);
  }

  ngOnDestroy(){
    this.socket.disconnect();
  }
}
