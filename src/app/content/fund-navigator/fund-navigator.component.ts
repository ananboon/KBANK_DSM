import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MessageCommunicationService } from '../../services/message-communication.service';

import { MessageModel } from '../../models/message.model';

import * as globals from '../../globals';

@Component({
  selector: 'app-fund-navigator',
  templateUrl: './fund-navigator.component.html',
  styleUrls: ['./fund-navigator.component.css']
})
export class FundNavigatorComponent implements OnInit {

  constructor(
    private router: Router,
    private messageCommunicationService: MessageCommunicationService
  ){}

  ngOnInit() {
    this.messageCommunicationService.setBackgroundOverlay(false);

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

}
