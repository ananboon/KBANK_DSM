import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Ng2DeviceService } from 'ng2-device-detector';

import { UserService } from '../../services/user.service';
import { MessageCommunicationService } from '../../services/message-communication.service'
import { RecorderService } from '../../services/recorder.service';

import { MessageModel } from '../../models/message.model';

import * as globals from '../../globals';

declare var jQuery:any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent{
  constructor(
    private router: Router,
    private userService: UserService,
    private messageCommunicationService: MessageCommunicationService,
    private recorderService: RecorderService
  ){}

  showStopRecorder = false;

  ngOnInit(){
    this.recorderService.menuSubject.subscribe(
      (message) => {
        if(message.component === globals.RECORDER){
          if(message.message === globals.SHOW_STOP_RECORDER){
            this.showStopRecorder = true;
          }
        }
      }
    );
  }

  onStopRecording(){
    console.log('stop recording');
    jQuery("#stopRecordingModal").modal('hide');
  }

  onLogout(){
    const component = globals.LOGOUT;
    const message = globals.LOGOUT;

    const messageModel = new MessageModel();
    messageModel.component = component;
    messageModel.message = message;

    console.log('Menu Comp');
    this.messageCommunicationService.sendMessage(component,message);
    this.messageCommunicationService.logoutSubject.next(messageModel);

    jQuery("#logoutModal").modal('hide');
  }

  ngOnDestroy(){

  }
}
