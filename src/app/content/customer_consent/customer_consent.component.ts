import { Component, OnInit, Input, ViewChild, ElementRef,OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Ng2DeviceService } from 'ng2-device-detector';

import { MessageCommunicationService } from '../../services/message-communication.service';
import { RecorderService } from '../../services/recorder.service';
import { NavigationService } from '../../services/navigation.service';
import 'rxjs/add/operator/takeUntil';
import { Subject } from 'rxjs/Subject';
import { MessageModel } from '../../models/message.model';

import * as globals from '../../globals';

@Component({
  selector: 'app-customer-consent',
  templateUrl: './customer_consent.component.html',
  styleUrls: ['./customer_consent.component.css']
})
export class CustomerConsentComponent implements OnInit,OnDestroy{
  @ViewChild('consentForm') consentForm: NgForm;
  @ViewChild('accountName') accountName: ElementRef;
  @ViewChild('accountCIS') accountCIS: ElementRef;

  disableName = false;
  disableCIS = false;

  nameNull = true;
  cisNull = true;

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
    private recorderService: RecorderService,
    private messageCommunicationService: MessageCommunicationService,
    private route: ActivatedRoute,
    private router: Router,
    private deviceService: Ng2DeviceService,
    private navigationService: NavigationService
  ){}

  ngOnInit(){
    this.messageCommunicationService.setBackgroundOverlay(false);

    if(this.deviceService.device !== globals.UNKNOWN){
      this.disableName = true;
      this.disableCIS = true;
    }
    this.messageCommunicationService.customerConsentComponentSubject
    .takeUntil(this.ngUnsubscribe)
    .subscribe(
      (message) => {
        const body = message.message;
        if(body === globals.TO_ROWCOUNTER_PROCEDURE){
          this.router.navigate(['/'+globals.ROWCOUNTER_PROCEDURES]);
          console.log('Debug customer consent ROWCOUNTER_PROCEDURES');
          console.log('Debug Message',message);
          this.navigationService.nextStep();
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

  ngOnDestroy(){
     this.ngUnsubscribe.next();
     this.ngUnsubscribe.complete();
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
    this.navigationService.nextStep();
  }
}
