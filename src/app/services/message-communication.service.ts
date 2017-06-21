import { Injectable, OnInit, OnDestroy} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import * as io from 'socket.io-client';
import * as globals from '../globals';

import { UserService } from './user.service';
import { MessageModel } from '../models/message.model'


Injectable()
export class MessageCommunicationService{
  public roomId: string;
  public clientToSendTo;
  private url = 'http://127.0.0.1:8080';
  private socket = io(this.url);
  private role;

  public loginSubject = new Subject<MessageModel>();
  public connectSubject = new Subject<MessageModel>();
  public scrollSubject = new Subject<MessageModel>();
  public customerConsentComponentSubject = new Subject<MessageModel>();
  public profileCardComponentSubject = new Subject<MessageModel>();
  public bannerComponentSubject = new Subject<MessageModel>();

  constructor(){
    this.registerCallbacks();
  }

  login(role,username,password){
    this.role = role;
    const user = username;
    const pass = password;

    const message = new MessageModel();
    message.component = globals.LOGIN;
    message.message = {
      username: user,
      password: pass
    };

    this.socket.emit(globals.MESSAGE,message);
  }

  connect(role,roomId){
    this.role = role;
    this.roomId = roomId;

    const message = new MessageModel();
    message.component = globals.CONNECT;
    message.message = {
      role: role,
      roomId: roomId
    }

    this.socket.emit(globals.MESSAGE,message);
  }

  registerCallbacks(){
    this.socket.on(globals.MESSAGE,(message) => {
      if(message.component === globals.LOGIN_ERROR){
        this.loginSubject.next(message);
      }else if(message.component === globals.USER_DATA){
        this.loginSubject.next(message);
      }else if(message.component === globals.GET_ROOM_STATUS){
        // Inform user room is full
        console.log(message);
        this.connectSubject.next(message);
      }else if(message.component === globals.SET_CLIENT_ID_TO_SEND_TO){
        // Set id of the client to send to
        this.clientToSendTo = message.message;
        this.connectSubject.next(message);
      }else if(message.component === globals.BANNER){
        this.bannerComponentSubject.next(message);
      }else if(message.component === globals.SCROLL){

      }else if(message.component === globals.PROFILE_CARD){
        this.profileCardComponentSubject.next(message)
      }else if(message.component === globals.CUSTOMER_CONSENT){
        this.customerConsentComponentSubject.next(message);
      }
    });
  }

  sendMessage(component, message) {
    const messageToSend = new MessageModel();
    messageToSend.clientId = this.clientToSendTo;
    messageToSend.component = component;
    messageToSend.message = message;
    this.socket.emit(globals.MESSAGE,messageToSend);
  }

  destroyConnections(){

  }
}
