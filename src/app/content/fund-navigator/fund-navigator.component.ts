import { Component, OnInit,OnDestroy,ElementRef,ViewChild } from '@angular/core';
import { Router } from '@angular/router';

// import { Ng2DeviceService } from 'ng2-device-detector';
import { NavigationService } from '../../services/navigation.service';
import { UserService } from '../../services/user.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { MessageCommunicationService } from '../../services/message-communication.service';
import { CoordinateCalculatorService } from '../../services/coordinate-Calculator.service';

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
  iframeURL:string = globals.FUND_NAV_URL;
  @ViewChild('iframe') iframe: ElementRef;
  constructor(
    private router: Router,
    private messageCommunicationService: MessageCommunicationService,
    private navigationService: NavigationService,
    public userService: UserService,
    private coordinateCalculatorService : CoordinateCalculatorService
  ){
    if (window.addEventListener) {
     window.addEventListener("message", this.receiveMessage.bind(this), false);
     } 
    //  else {
    //   (<any>window).attachEvent("onmessage", this.receiveMessage.bind(this));
    // }

  }



  ngOnInit() {
    this.messageCommunicationService.setBackgroundOverlay(false);

    this.messageCommunicationService.fundNavigatorComponentSubject
    .takeUntil(this.ngUnsubscribe)
    .subscribe(
      (message) => {
          if(message.message === globals.TO_ROWCOUNTER_UD){
            this.router.navigate(['/'+globals.ROWCOUNTER_UD]);
            this.navigationService.nextStep();
          }else if(message.message === globals.CLICKED_FUN_NAV){
            this.callBackOnClickedMessage(message);
          }else if(message.message === globals.SCROLL_FUN_NAV){
            this.callBackOnScrollMessage(message);
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

    const component = globals.FUND_NAVIGATOR;
    const message = globals.TO_ROWCOUNTER_UD;

    this.messageCommunicationService.sendMessage(component,message);
    this.router.navigate(['/'+globals.ROWCOUNTER_UD]);
    this.navigationService.nextStep();
  }




  onIframeLoaded(){
    // jQuery("#PDFModal").modal('show');
    
    let doc =  this.iframe.nativeElement.contentDocument || this.iframe.nativeElement.contentWindow;
    doc['IgnoreScrollEvent'] = false;
    // doc.openFundFactSheet('K-CASH');
    // let iframepos = jQuery("#fund-navigator-iframe").position();
    jQuery( doc ).ready(function() {

      jQuery(doc)
      .on('click', function (e,callback) { 
          // console.log("callback",callback);
          // let x;
          // let y;
          // let offsetTop = jQuery(doc).scrollTop();
          // let offsetLeft;
          // let iframeHeight = jQuery('#fund-navigator-iframe').height();
          // let iframeWidth = jQuery(doc).width();
          // let documentHeight = jQuery(doc).height();
          // let documentWidth = jQuery(doc).width();
          // let jsonMessage = {
          //     x:null,
          //     y:null,
          //     offsetTop:offsetTop,
          //     documentHeight:documentHeight,
          //     width:iframeWidth,
          //     height:iframeHeight,
          //     eventType:e.type
          // };
          // console.log('event type',e.type);
          // if(e.type === "click"){
          //   console.log('clicked event fired!!!!');
          //   x = e.clientX; 
          //   y = e.clientY;
            
          //   jsonMessage.x = x;
          //   jsonMessage.y = y;
          let jsonMessage = reCaptureDocumentSize(e.type,e.clientX,e.clientY);

            if(callback !== 'callback'){
              parent.postMessage(jsonMessage,globals.ANGULAR_URL);
            }
 
          // }
          // else if(e.type === "scroll"){

          //   clearTimeout( jQuery.data( this, "scrollCheck" ) );
          //   jQuery.data( this, "scrollCheck", setTimeout(function() {
          //   console.log('stopscolling');
          //     if(callback !== 'callback'){
          //       parent.postMessage(jsonMessage,globals.ANGULAR_URL);
          //     }else {
          //      jQuery(doc).scrollTop(offSetTop_To);
          //     }
          //   }, 250) );


          // }
      
      })
      .on('scroll',scrollHanlder);


      function clickHandler(e){

      }
      
      function scrollHanlder(e,callBack,offSetTop_To){
        console.log('hander asd',doc['IgnoreScrollEvent']);
        let ignore = doc['IgnoreScrollEvent'];
        doc['IgnoreScrollEvent'] = false;
        if(ignore) return false;


        let jsonMessage = reCaptureDocumentSize(e.type,null,null);

        clearTimeout( jQuery.data( this, "scrollCheck" ) );
          jQuery.data( this, "scrollCheck", setTimeout(function() {
          console.log('stopscolling');
          console.log('callBack',callBack);
          if(callBack !== 'callback'){
            parent.postMessage(jsonMessage,globals.ANGULAR_URL);
          }else{
            jQuery(doc).scrollTop(offSetTop_To);
          }
        }, 250) );
      }

      function reCaptureDocumentSize(eventType,x,y){
          let offsetTop = jQuery(doc).scrollTop();
          let offsetLeft;
          let iframeHeight = jQuery('#fund-navigator-iframe').height();
          let iframeWidth = jQuery(doc).width();
          let documentHeight = jQuery(doc).height();
          let documentWidth = jQuery(doc).width();
          let jsonMessage = {
              x:x,
              y:y,
              offsetTop:offsetTop,
              documentHeight:documentHeight,
              width:iframeWidth,
              height:iframeHeight,
              eventType:eventType
          };
          return jsonMessage;
      }


    });



  }

  receiveMessage: any = (event: any) =>  {
    if (event.origin !== globals.ANGULAR_URL)
    return;
      this.messageCommunicationService.sendMessageCoordinate(
        globals.FUND_NAVIGATOR,
        event.data.eventType,
        this.userService.isCurrentUserDevice(),
        event.data.x,
        event.data.y,
        event.data.offsetTop,
        event.data.width,
        event.data.height,
        event.data.documentHeight
       );

  }

  private callBackOnClickedMessage(message:MessageModel){
    console.log('callBackOnClickedMessage');
    let doc =  this.iframe.nativeElement.contentDocument || this.iframe.nativeElement.contentWindow;
    let iframeWidth_To = jQuery(doc).width();
    let iframeHeight_To = jQuery('#fund-navigator-iframe').height();
    let documentHeight_To = jQuery(doc).height();

    let x_To = this.coordinateCalculatorService.get_x_coordinate(message.coordinate_x,message.iframeWidth,iframeWidth_To);
    let y_To = this.coordinateCalculatorService.get_y_coordinate(message.coordinate_y,message.iframeHeight,iframeHeight_To);
    let offSetTop_To = this.coordinateCalculatorService.get_offSetTop(message.offsetTop,message.documentHeight,documentHeight_To);
    
    // console.log('new X ::',x_To);
    // console.log('new Y ::',y_To);
    // console.log('new offSetTop_To ::',offSetTop_To);

    // jQuery(doc).trigger( "scroll", [ "callback",offSetTop_To])
    doc['IgnoreScrollEvent'] = true;
    jQuery(doc).scrollTop(offSetTop_To);
    jQuery(doc.elementFromPoint(x_To, y_To)).trigger( "click", [ "callback"]);

  }

  private callBackOnScrollMessage(message:MessageModel){
    console.log('callBackOnScrollMessage');
    let doc =  this.iframe.nativeElement.contentDocument || this.iframe.nativeElement.contentWindow;
    let documentHeight_To = jQuery(doc).height();
    let offSetTop_To = this.coordinateCalculatorService.get_offSetTop(message.offsetTop,message.documentHeight,documentHeight_To);

    doc['IgnoreScrollEvent'] = true;
    jQuery(doc).scrollTop(offSetTop_To);
    // jQuery(doc).trigger( "scroll", [ "callback",offSetTop_To])


  }

}
