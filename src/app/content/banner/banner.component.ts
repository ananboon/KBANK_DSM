import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { Ng2DeviceService } from 'ng2-device-detector';

import { NavigationService } from '../../services/navigation.service';
import { MessageCommunicationService } from '../../services/message-communication.service'
import { UserService } from '../../services/user.service';
import { ImageService } from '../../services/images.service';

import { MessageModel } from '../../models/message.model';

import * as globals from '../../globals';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent{
  constructor(
    private navigationService: NavigationService,
    private messageCommunicationService: MessageCommunicationService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private deviceService: Ng2DeviceService,
    private imageService: ImageService
  ){}

  banners = [];
  isMobile = this.deviceService.device !== globals.UNKNOWN;
  nextWording:string = globals.START_TRANSACTION;

  ngOnInit(){
    this.banners = this.imageService.bannerImages;
    this.messageCommunicationService.setBackgroundOverlay(false);

    const routeName = this.router.url;
    if(routeName === ('/'+globals.ROWCOUNTER_PROCEDURES)){
      this.nextWording = globals.NEXT;
    }

    this.messageCommunicationService.bannerComponentSubject.subscribe(
      (message) => {
        const component = message.component;
        const body = message.message;
        if(body === globals.TO_PROFILE_CARD){
          console.log(message);
          this.navigationService.startTransaction();
          this.router.navigate(['/'+globals.PROFILE_CARD]);
        }else if(body === globals.TO_FUND_NAVIGATOR){
          this.router.navigate(['/'+globals.FUND_NAVIGATOR]);
        }
      }
    );
  }

  onNext(){
    this.messageCommunicationService.setBackgroundOverlay(true);

    const routeName = this.router.url;
    const component = globals.BANNER;
    if(routeName === ('/'+globals.HOME)){
      const message = globals.TO_PROFILE_CARD;
      this.messageCommunicationService.sendMessage(component,message);
      this.navigationService.startTransaction();
      this.router.navigate(['/'+globals.PROFILE_CARD]);
    }else if(routeName === ('/'+globals.ROWCOUNTER_PROCEDURES)){
      const message = globals.TO_FUND_NAVIGATOR;
      this.messageCommunicationService.sendMessage(component,message);
      this.router.navigate(['/'+globals.FUND_NAVIGATOR]);
    }
  }

  getActive(index){
    return index === 0 ? 'active':'';
  }

}
