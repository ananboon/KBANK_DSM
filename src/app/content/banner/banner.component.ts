import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';

import { NavigationService } from '../../services/navigation.service';
import { MessageCommunicationService } from '../../services/message-communication.service'
import { UserService } from '../../services/user.service';

import * as globals from '../../globals';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent{

  nextWording:string = globals.START_TRANSACTION;
  constructor(
    private navigationService: NavigationService,
    private messageCommunicationService: MessageCommunicationService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ){}

  ngOnInit(){
    const routeName = this.router.url;
    if(routeName === ('/'+globals.ROWCOUNTER_PROCEDURES)){
      this.nextWording = globals.NEXT;
    }

    this.messageCommunicationService.bannerComponentSubject.subscribe(
      (message) => {
        console.log(message);
        this.navigationService.startTransaction();
        this.router.navigate(['/'+globals.PROFILE_CARD]);
      }
    );
  }

  onNext(){
    const routeName = this.router.url;

    if(routeName === ('/'+globals.ROWCOUNTER_PROCEDURES)){
      this.router.navigate(['/'+globals.FUND_NAVIGATOR]);
    }else {
      //this.messageCommunicationService.sendMessage('banner','toProfileCard');
      this.navigationService.startTransaction();
      this.router.navigate(['/'+globals.PROFILE_CARD]);
    }
  }

}
