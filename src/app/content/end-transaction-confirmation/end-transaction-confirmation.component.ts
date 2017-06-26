import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ng2DeviceService } from 'ng2-device-detector';

import { MessageCommunicationService } from '../../services/message-communication.service';
import { NavigationService } from '../../services/navigation.service';
import { RecorderService } from '../../services/recorder.service';

import * as globals from '../../globals';

declare var jQuery:any;

@Component({
  selector: 'app-end-transaction-confirmation',
  templateUrl: './end-transaction-confirmation.component.html',
  styleUrls: ['./end-transaction-confirmation.component.css']
})
export class EndTransactionConfirmationComponent implements OnInit {

  isMobile = this.deviceService.device !== globals.UNKNOWN;

  constructor(
    private router: Router,
    private messageCommunicationService: MessageCommunicationService,
    private navigationService: NavigationService,
    private recorderService: RecorderService,
    private deviceService: Ng2DeviceService
  ){}

  ngOnInit() {
    this.messageCommunicationService.setBackgroundOverlay(false);

    this.messageCommunicationService.endTransactionComponentSubject.subscribe(
      (message) => {
        this.navigationService.disableNavBarAndUserLoginNavigation();
        this.router.navigate(['/'+globals.HOME]);
      }
    );
  }

  onEndTransaction(){
    // this.messageCommunicationService.setBackgroundOverlay(true);



    jQuery("#stopRecordingModal").modal('show');
    
  }

}
