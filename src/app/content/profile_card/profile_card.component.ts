import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs/Subscription';
import { Ng2DeviceService } from 'ng2-device-detector';

import { UserService } from '../../services/user.service';
import { MessageCommunicationService } from '../../services/message-communication.service';
import { NavigationService } from '../../services/navigation.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
import { MessageModel } from '../../models/message.model';

import * as globals from '../../globals';
declare var jQuery:any;

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile_card.component.html',
  styleUrls: ['./profile_card.component.css']
})
export class ProfileCardComponent implements OnInit,OnDestroy{
  name:string = '';
  position:string = '';
  location:string = '';
  id:string = '';

  isMobile = this.deviceService.device !== globals.UNKNOWN;
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  constructor(
    private userService: UserService,
    private messageCommunicationService: MessageCommunicationService,
    private router: Router,
    private locationRoute: Location,
    private deviceService: Ng2DeviceService,
    private navigationService: NavigationService
  ){}

  ngOnInit(){
    this.messageCommunicationService.setBackgroundOverlay(false);

    this.name = this.userService.user.name;
    this.position = this.userService.user.position;
    this.location = this.userService.user.location;
    this.id = this.userService.user.id;

    this.messageCommunicationService.profileCardComponentSubject
    .takeUntil(this.ngUnsubscribe)
    .subscribe(
      (message) => {
        if(message.message === globals.TO_CUSTOMER_CONSENT){
          this.router.navigate(['/'+globals.CUSTOMER_CONSENT]);
          this.navigationService.nextStep();
        }
      }
    );
    jQuery(globals.SMARTWIZARDNAV_ID).show();
  }

  ngOnDestroy(){
     this.ngUnsubscribe.next();
     this.ngUnsubscribe.complete();
  }

  onNext(){
    this.messageCommunicationService.setBackgroundOverlay(true);

    const component = globals.PROFILE_CARD;
    const message = globals.TO_CUSTOMER_CONSENT;
    this.messageCommunicationService.sendMessage(component,message);
    this.router.navigate(['/'+globals.CUSTOMER_CONSENT]);
    this.navigationService.nextStep();

  }
}
