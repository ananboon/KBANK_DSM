import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// import { Ng2DeviceService } from 'ng2-device-detector';

import { MessageCommunicationService } from '../../services/message-communication.service';

import { MessageModel } from '../../models/message.model';

import * as globals from '../../globals';

declare var jQuery:any;

@Component({
  selector: 'app-fund-navigator',
  templateUrl: './fund-navigator.component.html',
  styleUrls: ['./fund-navigator.component.css']
})
export class FundNavigatorComponent implements OnInit {
  // isMobile = this.deviceService.device !== globals.UNKNOWN;

  constructor(
    private router: Router,
    private messageCommunicationService: MessageCommunicationService
    // private deviceService: Ng2DeviceService
  ){}

  ngOnInit() {
    this.messageCommunicationService.setBackgroundOverlay(false);

    // if(!this.isMobile){
    //   console.log('this is pc');

    // }

    this.messageCommunicationService.fundNavigatorComponentSubject.subscribe(
      (message) => {
        this.router.navigate(['/'+globals.ROWCOUNTER_UD]);
      }
    );
  }

  onNext(){
    this.messageCommunicationService.setBackgroundOverlay(true);

    const component = globals.FUND_NAVIGATOR;
    const message = globals.TO_ROWCOUNTER_UD;

    this.messageCommunicationService.sendMessage(component,message);
    this.router.navigate(['/'+globals.ROWCOUNTER_UD]);
  }

  onIframeclick(){
    console.log('iframe loaded!!');
    // jQuery('#ctl00_ContentPlaceHolder1_Tap1').click(function(){
    //   alert('1234');
    // });
    // console.log(jQuery('#ctl00_ContentPlaceHolder1_Tap1'));

    // console.log(jQuery('#fund-navigator-iframe').contents());
  }

}
