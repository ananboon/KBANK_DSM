import { Component, OnInit,OnDestroy,ElementRef,ViewChild } from '@angular/core';
import { Router } from '@angular/router';

// import { Ng2DeviceService } from 'ng2-device-detector';
import { NavigationService } from '../../services/navigation.service';
import { UserService } from '../../services/user.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { MessageCommunicationService } from '../../services/message-communication.service';

import { MessageModel } from '../../models/message.model';

import * as globals from '../../globals';

declare var jQuery:any;

@Component({
  selector: 'app-fund-navigator',
  templateUrl: './fund-navigator.component.html',
  styleUrls: ['./fund-navigator.component.css']
})
export class FundNavigatorComponent implements OnInit,OnDestroy {
  private ngUnsubscribe: Subject<void> = new Subject<void>();
   @ViewChild('iframe') iframe: ElementRef;
  constructor(
    private router: Router,
    private messageCommunicationService: MessageCommunicationService,
    private navigationService: NavigationService,
    private userService: UserService
  ){}

  ngOnInit() {
    this.messageCommunicationService.setBackgroundOverlay(false);

    this.messageCommunicationService.fundNavigatorComponentSubject
    .takeUntil(this.ngUnsubscribe)
    .subscribe(
      (message) => {
        this.router.navigate(['/'+globals.ROWCOUNTER_UD]);
        this.navigationService.nextStep();
      }
    );
  }

  ngOnDestroy(){
     this.ngUnsubscribe.next();
     this.ngUnsubscribe.complete();
  }

  onNext(){
    this.messageCommunicationService.setBackgroundOverlay(true);

    const component = globals.FUND_NAVIGATOR;
    const message = globals.TO_ROWCOUNTER_UD;

    this.messageCommunicationService.sendMessage(component,message);
    this.router.navigate(['/'+globals.ROWCOUNTER_UD]);
    this.navigationService.nextStep();
  }

  onIframeclick(){
    console.log('iframe loaded!!');
    // jQuery("#PDFModal").modal('show');
    
    // let doc =  this.iframe.nativeElement.contentDocument || this.iframe.nativeElement.contentWindow;
    // doc.openFundFactSheet('K-CASH');
    // var iframepos = jQuery("#fund-navigator-iframe").position();
    // jQuery('#fund-navigator-iframe').contents().find('html').on('click', function (e) { 
    //     var x = e.clientX + iframepos.left; 
    //     var y = e.clientY + iframepos.top;
    //     console.log(x + " " + y);
    // })
  }

}
