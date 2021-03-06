import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ng2DeviceService } from 'ng2-device-detector';

import { MessageCommunicationService } from '../../services/message-communication.service';
import { NavigationService } from '../../services/navigation.service';

import { MessageModel } from '../../models/message.model';

import * as globals from '../../globals';

@Component({
  selector: 'app-rowcounter-ud',
  templateUrl: './rowcounter-ud.component.html',
  styleUrls: ['./rowcounter-ud.component.css']
})
export class RowCounterUDComponent implements OnInit {

  constructor(
    private router: Router,
    private messageCommunicationService: MessageCommunicationService,
    private deviceService: Ng2DeviceService,
    private navigationService: NavigationService
  ){}

  isMobile = this.deviceService.device !== globals.UNKNOWN;

  ngOnInit() {
    this.messageCommunicationService.setBackgroundOverlay(false);
    
    this.messageCommunicationService.rowCounterUDComponentSubject.subscribe(
      (message) => {
        this.router.navigate(['/'+globals.END_TRANSACTION]);
        this.navigationService.nextStep();
      }
    );
  }

  onNext(){
    this.messageCommunicationService.setBackgroundOverlay(true);

    const component = globals.ROWCOUNTER_UD;
    const message = globals.TO_END_OF_TRANSACTION;
    this.messageCommunicationService.sendMessage(component,message);
    this.router.navigate(['/'+globals.END_TRANSACTION]);
    this.navigationService.nextStep();
  }
}
