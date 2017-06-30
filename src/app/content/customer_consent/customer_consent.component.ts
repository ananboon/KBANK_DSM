import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Ng2DeviceService } from 'ng2-device-detector';

import { MessageCommunicationService } from '../../services/message-communication.service';
import { RecorderService } from '../../services/recorder.service';

import { MessageModel } from '../../models/message.model';

import * as globals from '../../globals';

@Component({
  selector: 'app-customer-consent',
  templateUrl: './customer_consent.component.html',
  styleUrls: ['./customer_consent.component.css']
})
export class CustomerConsentComponent implements OnInit{
  @ViewChild('consentForm') consentForm: NgForm;
  @ViewChild('accountName') accountName: ElementRef;
  @ViewChild('accountCIS') accountCIS: ElementRef;

  disableName = false;
  disableCIS = false;

  nameNull = true;
  cisNull = true;


  constructor(
    private recorderService: RecorderService,
    private messageCommunicationService: MessageCommunicationService,
    private route: ActivatedRoute,
    private router: Router,
    private deviceService: Ng2DeviceService
  ){}

  ngOnInit(){
    this.messageCommunicationService.setBackgroundOverlay(false);

    if(this.deviceService.device !== globals.UNKNOWN){
      this.disableName = true;
      this.disableCIS = true;
    }
    this.messageCommunicationService.customerConsentComponentSubject.subscribe(
      (message) => {
        const body = message.message;
        if(body === globals.TO_ROWCOUNTER_PROCEDURE){
          this.router.navigate(['/'+globals.ROWCOUNTER_PROCEDURES]);
        }else if(body === globals.START_RECORDING){
          const accountName = this.accountName.nativeElement.value;
          const accountCIS = this.accountCIS.nativeElement.value;
          this.recorderService.setAccountNameAndCIS(accountName,accountCIS);
          this.recorderService.record();
        }else if(body.component === 'account-name'){
          this.nameNull = body.message === '';
          this.accountName.nativeElement.value = body.message;
        }else if(body.component === 'account-cis'){
          this.cisNull = body.message === '';
          this.accountCIS.nativeElement.value = body.message;
        }
      }
    );
  }

  onNameChange(event){
    const component = globals.CUSTOMER_CONSENT;
    const message = {
      component: 'account-name',
      message: event
    };
    this.messageCommunicationService.sendMessage(component,message);
  }

  onCISChange(event){
    const component = globals.CUSTOMER_CONSENT;
    const message = {
      component: 'account-cis',
      message: event
    };
    this.messageCommunicationService.sendMessage(component,message);
  }

  onConsentClick(allowRecording: boolean){
    this.messageCommunicationService.setBackgroundOverlay(true);

    const component = globals.CUSTOMER_CONSENT;
    if(allowRecording){
      const message = globals.START_RECORDING;
      this.messageCommunicationService.sendMessage(component,message);
      this.recorderService.recording = true;
    }

    const message = globals.TO_ROWCOUNTER_PROCEDURE;
    this.messageCommunicationService.sendMessage(component,message);
    this.router.navigate(['/'+globals.ROWCOUNTER_PROCEDURES]);
  }
}
