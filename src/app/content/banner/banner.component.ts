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

  nextWording:string = 'เริ่มต้นธุรกรรม';
  constructor(private navigationService: NavigationService, private messageCommunicationService: MessageCommunicationService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(){
    const routeName = this.router.url;
    if(routeName === '/userProcedures'){
      this.nextWording = 'ขั้นตอนถัดไป';
    }

    this.messageCommunicationService.bannerComponentSubject.subscribe(
      (message) => {
        console.log(message);
        this.navigationService.startTransaction();
        this.router.navigate(['/profileCard']);
      }
    );
  }

  onNext(){
    const routeName = this.router.url;




    if(routeName === '/userProcedures'){
      this.router.navigate(['/fundNavigator']);
    }else {
      this.messageCommunicationService.sendMessage('banner','toProfileCard');
      this.navigationService.startTransaction();
      this.router.navigate(['/profileCard']);
    }
  }

  onCarouselMove(direction:string){
    const message = {
      component: 'carousel',
      message: direction
    }
    this.messageCommunicationService.sendMessage('banner',message);
  }

}
