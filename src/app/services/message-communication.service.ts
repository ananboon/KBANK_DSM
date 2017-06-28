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
  private url = 'https://503df66a.ngrok.io';
  private socket = io(this.url);
  private role;

  public loginSubject = new Subject<MessageModel>();
  public connectSubject = new Subject<MessageModel>();
  public recorderSubject = new Subject<MessageModel>();
  public logoutSubject = new Subject<MessageModel>();
  public backgroundSubject = new Subject<MessageModel>();
  public recordingSubject = new Subject<MessageModel>();

  public bannerComponentSubject = new Subject<MessageModel>();
  public profileCardComponentSubject = new Subject<MessageModel>();
  public customerConsentComponentSubject = new Subject<MessageModel>();
  public fundNavigatorComponentSubject = new Subject<MessageModel>();
  public rowCounterUDComponentSubject = new Subject<MessageModel>();
  public endTransactionComponentSubject = new Subject<MessageModel>();

  constructor(){
    this.registerCallbacks();
  }

  login(role,username,password){
    this.role = role;
    const user = username;
    const pass = password;

    const message = {
      component: globals.LOGIN,
      message : {
        username: user,
        password: pass
      }
    }
    this.socket.emit(globals.MESSAGE,message);
  }

  connect(role,roomId){
    this.role = role;
    this.roomId = roomId;

    const message = {
      component: globals.CONNECT,
      message : {
        role: role,
        roomId: roomId
      }
    }
    this.socket.emit(globals.MESSAGE,message);
  }

  registerCallbacks(){
    this.socket.on(globals.MESSAGE,(message) => {
      if(message.component === globals.LOGIN_ERROR){
        this.loginSubject.next(message);
      }else if(message.component === globals.USER_DATA){
        if(this.role === globals.CUSTOMER){
          this.connectSubject.next(message);
        }else if(this.role === globals.ROWCOUNTER){
          this.loginSubject.next(message);
        }
      }else if(message.component === globals.GET_ROOM_STATUS){
        this.connectSubject.next(message);
      }else if(message.component === globals.SET_CLIENT_ID_TO_SEND_TO){
        this.clientToSendTo = message.message;
        this.connectSubject.next(message);
      }else if(message.component === globals.BACKGROUND){
        this.backgroundSubject.next(message);
      }else if(message.component === globals.BANNER){
        this.bannerComponentSubject.next(message);
      }else if(message.component === globals.PROFILE_CARD){
        this.profileCardComponentSubject.next(message)
      }else if(message.component === globals.CUSTOMER_CONSENT){
        this.customerConsentComponentSubject.next(message);
      }else if(message.component === globals.FUND_NAVIGATOR){
        this.fundNavigatorComponentSubject.next(message);
      }else if(message.component === globals.ROWCOUNTER_UD){
        this.rowCounterUDComponentSubject.next(message);
      }else if(message.component === globals.END_TRANSACTION){
        this.endTransactionComponentSubject.next(message);
      }else if(message.component === globals.LOGOUT){
        this.logoutSubject.next(message);
      }else if(message.component === globals.STOP_RECORDING){
        this.recordingSubject.next(message);
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

  setBackgroundOverlay(showBg){
    const message = new MessageModel();
    message.component = globals.BACKGROUND;

    if(showBg === true){
      message.message = globals.SHOW;
      this.backgroundSubject.next(message);
    }else{
      message.message = globals.HIDE;
      this.sendMessage(message.component,message.message);
    }
  }

  destroyConnections(){

  }
}
