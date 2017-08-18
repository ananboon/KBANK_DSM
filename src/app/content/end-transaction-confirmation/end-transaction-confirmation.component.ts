import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Ng2DeviceService } from 'ng2-device-detector';

import { MessageCommunicationService } from '../../services/message-communication.service';
import { NavigationService } from '../../services/navigation.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
import { RecorderService } from '../../services/recorder.service';

import { MessageModel } from '../../models/message.model';

import * as globals from '../../globals';

declare var jQuery:any;

@Component({
  selector: 'app-end-transaction-confirmation',
  templateUrl: './end-transaction-confirmation.component.html',
  styleUrls: ['./end-transaction-confirmation.component.css']
})
export class EndTransactionConfirmationComponent implements OnInit,OnDestroy {

  isMobile = this.deviceService.device !== globals.UNKNOWN;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
    private router: Router,
    private messageCommunicationService: MessageCommunicationService,
    private navigationService: NavigationService,
    private recorderService: RecorderService,
    private deviceService: Ng2DeviceService
  ){}

  ngOnInit() {
    this.messageCommunicationService.setBackgroundOverlay(false);

    this.messageCommunicationService.endTransactionComponentSubject
    .takeUntil(this.ngUnsubscribe)
    .subscribe(
      (message) => {
        if(message.component === globals.END_TRANSACTION){
          if(message.message === globals.STOP_RECORDING){
            let body = new MessageModel();
            body.component = globals.RECORDER;
            body.message = globals.STOP_RECORDING;
            this.recorderService.finishTransaction = 1;
            this.messageCommunicationService.recordingSubject.next(body);
          }
        }
      }
    );
  }
  ngOnDestroy(){
    this.recorderService.finishTransaction = 0;
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  onEndTransaction(){

    const component = globals.END_TRANSACTION;
    const message = globals.STOP_RECORDING;
    this.messageCommunicationService.sendMessage(component,message);

  }

}
