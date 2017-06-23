import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Ng2DeviceService } from 'ng2-device-detector';

import { UserService } from '../services/user.service';
import { MessageCommunicationService } from '../services/message-communication.service'
import { RecorderService } from '../services/recorder.service';

import * as globals from '../globals';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{
  constructor(
    private router: Router,
    private userService: UserService,
    private messageCommunicationService: MessageCommunicationService,
    private recorderService: RecorderService,
    private deviceService: Ng2DeviceService
  ){}


  ngOnInit(){

  }
}
