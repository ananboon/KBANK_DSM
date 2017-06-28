import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';


import { MessageModel } from '../models/message.model';

import * as RecordRTC from 'recordrtc';
import * as FileSaver from 'file-saver';

import * as globals from '../globals';


export class RecorderService{

  accountName = '';
  accountCIS = '';

  recordRTC: RecordRTC;
  stream;

  public menuSubject = new Subject<MessageModel>();

  constructor(

  ){}

  setAccountNameAndCIS(accountName, accountCIS){
    this.accountName = accountName;
    this.accountCIS = accountCIS;
  }

  record(){
    this.sendMessageToChromeExtension(globals.START_RECORDING);

    const message = new MessageModel();
    message.component = globals.RECORDER;
    message.message = globals.SHOW_STOP_RECORDER;

    this.menuSubject.next(message);
  }

  sendMessageToChromeExtension(command){
    var body = new MessageModel();

    if(command === globals.START_RECORDING){
      body.component = globals.START_RECORDING;
      body.message = {
        name: this.accountName,
        CIS: this.accountCIS,
        date : new Date().toLocaleDateString()
      }
    }else if(command === globals.STOP_RECORDING){
      body.component = globals.STOP_RECORDING;
    }

    console.log(body);

    window.postMessage(body,'*');
  }

  stopRecording() {
    this.sendMessageToChromeExtension(globals.STOP_RECORDING);
  }
}
