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
  private url = 'http://192.168.1.182:8080';
  private socket;
  private role;
  private userService:UserService;

  public scrollSubject = new Subject();
  public customerConsentComponentSubject = new Subject();
  public profileCardComponentSubject = new Subject();
  public bannerComponentSubject = new Subject();

  constructor(){}

  login(role,username,password){
    this.role = role;
    const user = username;
    const pass = password;

    this.socket.io(this.url);

    const message = new MessageModel();
    message.component = 'login';
    message.message = {
      username: user,
      password: pass
    };

    this.socket.emit('message',message);
    this.registerCallbacks();
  }

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
    this.registerCallbacks();
  }

  registerCallbacks(){

    this.socket.on('message',(message) => {
      if(message.component === 'getRoomStatus'){
        // Inform user room is full
        console.log(message.message);
      }else if(message.component === 'setClientToSendTo'){
        // Set id of the client to send to
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
