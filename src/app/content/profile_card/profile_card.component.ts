import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs/Subscription';
import { Ng2DeviceService } from 'ng2-device-detector';

import { UserService } from '../../services/user.service';
import { MessageCommunicationService } from '../../services/message-communication.service';
import { MessageModel } from '../../models/message.model';

import * as globals from '../../globals';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile_card.component.html',
  styleUrls: ['./profile_card.component.css']
})
export class ProfileCardComponent implements OnInit{
  name:string = '';
  position:string = '';
  location:string = '';
  id:string = '';

  isMobile = this.deviceService.device !== globals.UNKNOWN;

  constructor(
    private userService: UserService,
    private messageCommunicationService: MessageCommunicationService,
    private router: Router,
    private locationRoute: Location,
    private deviceService: Ng2DeviceService
  ){}

  ngOnInit(){
    this.messageCommunicationService.setBackgroundOverlay(false);

    this.name = this.userService.user.name;
    this.position = this.userService.user.position;
    this.location = this.userService.user.location;
    this.id = this.userService.user.id;

    this.messageCommunicationService.profileCardComponentSubject.subscribe(
      (message) => {
        if(message.message === globals.TO_CUSTOMER_CONSENT){
          this.router.navigate(['/'+globals.CUSTOMER_CONSENT]);
        }
      }
    );
  }

  onNext(){
    this.messageCommunicationService.setBackgroundOverlay(true);

    const component = globals.PROFILE_CARD;
    const message = globals.TO_CUSTOMER_CONSENT;
    this.messageCommunicationService.sendMessage(component,message);
    this.router.navigate(['/'+globals.CUSTOMER_CONSENT]);
  }
}
