import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { MessageModel } from '../models/message.model';

import * as globals from '../globals';

export class RecorderService{

  accountName = '';
  accountCIS = '';

  public menuSubject = new Subject<MessageModel>();


  record(){
    const message = new MessageModel();
    message.component = globals.RECORDER;
    message.message = globals.SHOW_STOP_RECORDER;

    this.menuSubject.next(message);
  }
}
