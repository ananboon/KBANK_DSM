import { Component, OnInit, ViewChild,OnDestroy,ElementRef  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
import { Ng2DeviceService } from 'ng2-device-detector';

import { NavigationService } from '../../services/navigation.service';
import { MessageCommunicationService } from '../../services/message-communication.service'
import { UserService } from '../../services/user.service';
import { ImageService } from '../../services/images.service';

import { MessageModel } from '../../models/message.model';

import * as globals from '../../globals';
declare var jQuery:any;

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnDestroy, OnInit{
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  @ViewChild('usefulSwiper') public usefulSwiper: any;

  constructor(
    private navigationService: NavigationService,
    private messageCommunicationService: MessageCommunicationService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private deviceService: Ng2DeviceService,
    private imageService: ImageService
  ){}
  config;
  banners = [];
  isMobile = this.deviceService.device !== globals.UNKNOWN;
  nextWording:string = globals.START_TRANSACTION;

  private ignoreEvent_SlideChange:boolean = false;

  ngOnInit(){
    this.messageCommunicationService.setBackgroundOverlay(false);

    const routeName = this.router.url;
    if(routeName === ('/'+globals.ROWCOUNTER_PROCEDURES)){
      this.banners = this.imageService.rowCounterProcedureImages;
      this.nextWording = globals.NEXT;
    }else if(routeName === ('/'+globals.HOME)){
      this.banners = this.imageService.bannerImages;
      this.navigationService.hideNavigationbar();
    }

    this.getConfig(this.isMobile);

    this.messageCommunicationService.bannerComponentSubject
    .takeUntil(this.ngUnsubscribe)
    .subscribe(
      (message) => {
        const component = message.component;
        const body = message.message;
        if(body === globals.TO_PROFILE_CARD){
          this.navigationService.startTransaction();
          this.router.navigate(['/'+globals.PROFILE_CARD]);
        }else if(body === globals.TO_FUND_NAVIGATOR){
          this.router.navigate(['/'+globals.FUND_NAVIGATOR]);
          this.navigationService.nextStep();
        }else if(body === globals.SLIDE_CHANGE){
          this.ignoreEvent_SlideChange = true;
          this.usefulSwiper.setIndex(message.slideIndex);
        }
      }
    );

  }

   ngOnDestroy(){
     this.ngUnsubscribe.next();
     this.ngUnsubscribe.complete();
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
      this.navigationService.nextStep();
    }

     this.ngUnsubscribe.next();
     this.ngUnsubscribe.complete();
  }

  getActive(index){
    return index === 0 ? 'active':'';
  }

  getConfig(isMobile:boolean){
    if(isMobile){
      this.config = {
        direction: 'horizontal',
        speed: 500,
        // slidesPerView: 'auto',
        // autoplay: 3000,
        loop: true,
        loopedSlides: this.banners.length,
        pagination: '.swiper-pagination',
        paginationClickable: true
      };
    }else{
      this.config = {
        direction: 'horizontal',
        speed: 500,
        // slidesPerView: 'auto',
        // autoplay: 3000,
        loop: true,
        loopedSlides: this.banners.length,
        pagination: '.swiper-pagination',
        paginationClickable: false,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
      };
    }
  }

  getURLIsROWCOUNTER_PROCEDURES(){
    return (this.router.url === ('/'+globals.ROWCOUNTER_PROCEDURES));
  }

  onIndexChange(event){

    let isIgnore = this.ignoreEvent_SlideChange;
    this.ignoreEvent_SlideChange = false;
    if(isIgnore){return;}

    const message = globals.SLIDE_CHANGE;
    const component = globals.BANNER;
    this.messageCommunicationService.sendMessage(component,message,null,event);


  }

  // testalert(n){
  //   alert(n);
  // }

}
