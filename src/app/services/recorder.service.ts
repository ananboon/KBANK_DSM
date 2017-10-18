import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { UserService } from '../services/user.service';

import { UserModel } from '../models/user.model';
import { MessageModel } from '../models/message.model';


import * as globals from '../globals';

@Injectable()
export class RecorderService{

  accountName = '';
  accountCIS = '';
  recording = false;
  finishTransaction:number = 0;

  constructor(
    private userService: UserService
  ){}

  setAccountNameAndCIS(accountName, accountCIS){
    this.accountName = accountName;
    this.accountCIS = accountCIS;
  }

  record(){
    this.recording = true;
    this.sendMessageToChromeExtension(globals.START_RECORDING);
  }

  sendMessageToChromeExtension(command){
    var body = new MessageModel();

    if(command === globals.START_RECORDING){
      body.component = globals.START_RECORDING;
      body.message = {
        name: this.accountName,
        CIS: this.accountCIS,
        userId: this.userService.user.id,
        date : new Date().toLocaleString()
      }
    }else if(command === globals.STOP_RECORDING){
      let cuttentDateTime = new Date().toLocaleString();
      body.component = globals.STOP_RECORDING;
      body.message = {
        fileName : this.accountCIS+'_'+this.userService.user.id+'_'+cuttentDateTime+'_'+globals.TransactionStatus[this.finishTransaction]+'__DSM'
      }
    }

    window.postMessage(body,'*');
  }

  stopRecording() {
    this.recording = false;
    this.sendMessageToChromeExtension(globals.STOP_RECORDING);
  }
}
