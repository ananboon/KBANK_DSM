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
    private recorderService: RecorderService,
    private deviceService: Ng2DeviceService
  ){}


  isMobile = false;

  ngOnInit(){
    this.isMobile = this.deviceService.device !== 'unknown';
  }



  ngOnDestroy(){

  }
}
