import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';

import { NavigationService } from '../../services/navigation.service';
import { MessageCommunicationService } from '../../services/message-communication.service'

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent{

  constructor(private navigationService: NavigationService, private messageCommunicationService: MessageCommunicationService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(){
    this.messageCommunicationService.bannerComponentSubject.subscribe(
      (message) => {
        console.log(message);
        this.navigationService.startTransaction();
        this.router.navigate(['/profileCard']);
      }
    );
  }

  onStartTransaction(){
    this.messageCommunicationService.sendMessage('banner','startTransaction');
    this.navigationService.startTransaction();
    this.router.navigate(['/profileCard']);
  }
}
