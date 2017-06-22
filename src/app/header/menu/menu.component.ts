import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';


import { MessageCommunicationService } from '../../services/message-communication.service'
import { RecorderService } from '../../services/recorder.service';

import * as globals from '../../globals';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent{
  constructor(
    private router: Router,
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

  }

  onLogout(event){
    console.log('logout');
    // window.location.reload();
  }

  ngOnDestroy(){

  }
}
