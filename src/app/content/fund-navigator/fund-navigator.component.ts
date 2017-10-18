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
          }else if(message.message === globals.OPEN_FUND_FACT_SHEET){
            this.callBackOnOpenFundFactSheetMessage(message);
          }else if(message.message === globals.CLOSE_FUND_FACT_SHEET){
            this.hidePDFModal();
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
    
    let doc =  this.iframe.nativeElement.contentDocument || this.iframe.nativeElement.contentWindow;
    doc['IgnoreScrollEvent'] = false;
    doc['isCurrentUserDevice'] = this.userService.isCurrentUserDevice();
  
    // jQuery('iframe')[0].contentWindow.onbeforeunload = function () {
    //   console.log('before unload');
    // };


    jQuery( doc ).ready(function() {;

      // jQuery(window).bind('beforeunload', ()=>console.log('beforeunload'));

      jQuery(doc).find('#ctl00_Language_hlTHLanguage').parent().hide();

      if(doc['isCurrentUserDevice']){
        var style = jQuery('<style> .overlayIframe { position: fixed; z-index:10000; width: 100%; height: 100%; left: 0; top: 0; touch-action:none; }</style>');
        jQuery(doc.head).append(style);

        jQuery(doc.body).append( "<div id='overlayId' class='overlayIframe'></div>" );
      }

      jQuery(doc)
      .on('click', function (e,callback) { 
      
          if(!doc['isCurrentUserDevice']){
          let jsonMessage = reCaptureDocumentSize(e.type,e.clientX,e.clientY);

            if(callback !== 'callback'){
              parent.postMessage(jsonMessage,globals.ANGULAR_URL);
            }
          }
 
     
      
      })
      .on('scroll',{ scrollOn: 'body' },scrollHanlder);

      var table = jQuery(doc).find('.kci-desktop-datatable .dataTables_scrollBody');
      jQuery(table).on('scroll',{ scrollOn: 'table' },scrollHanlder);

      
      function scrollHanlder(e){
        // console.log('scroll hander',doc['IgnoreScrollEvent']);
        let ignore = doc['IgnoreScrollEvent'];
        doc['IgnoreScrollEvent'] = false;
        if(ignore) return false;


        let jsonMessage = reCaptureDocumentSize(e.type,null,null);

        clearTimeout( jQuery.data( this, "scrollCheck" ) );
          jQuery.data( this, "scrollCheck", setTimeout(function() {
          // if(callBack !== 'callback'){
            parent.postMessage(jsonMessage,globals.ANGULAR_URL);
          // }else{
          //   jQuery(doc).scrollTop(offSetTop_To);
          // }
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

      function reCaptureTableSize(eventType){
        let offsetTop = jQuery(table).scrollTop();
        let tableHeight = jQuery(table).height();
        let jsonMessage = {
              offsetTop:offsetTop,
              height:tableHeight,
              eventType:eventType
          };
          return jsonMessage;
      }

    });

  }

  receiveMessage: any = (event: any) =>  {

    if (event.origin !== globals.ANGULAR_URL){
        // console.log('event.origin',event.origin);
      return;
    }
      if(event.data.eventType === globals.OPEN_FUND_FACT_SHEET){
        // example url
        //   https://docs.google.com/gview?url=https://35.198.202.147/proxy/k-invest.kasikornbankgroup.com/FundFactSheet/K-CASH.pdf?v=295efae2-c169-148d-6bba-f70baa77ee8f&embedded=true
        // console.log('url from chrome extension');
        let URLSplit = event.data.url.split("/");
        // let googleDocURL = "https://docs.google.com/gview?url="+URLSplit[0]+'//'+URLSplit[2]+'/'+'proxy'+'/k-invest.kasikornbankgroup.com/'+URLSplit[3]+'/'+URLSplit[4]+'&embedded=true';
        // let googleDocURL = URLSplit[0]+'//'+URLSplit[2]+'/'+'proxy'+'/k-invest.kasikornbankgroup.com/'+URLSplit[3]+'/'+URLSplit[4];
        let googleDocURL = 'https://k-invest.kasikornbankgroup.com/'+URLSplit[3]+'/'+URLSplit[4];
        this.setSourceIframePDF(googleDocURL);
        this.showPDFModal();
        this.messageCommunicationService.sendMessageEventFundFactSheet(
          globals.FUND_NAVIGATOR,
          globals.OPEN_FUND_FACT_SHEET,
          googleDocURL
        );

      }else{
        // console.log('Sending message');
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
  }

  private callBackOnClickedMessage(message:MessageModel){
    // console.log('callBackOnClickedMessage');
    let doc =  this.iframe.nativeElement.contentDocument || this.iframe.nativeElement.contentWindow;
    let iframeWidth_To = jQuery(doc).width();
    let iframeHeight_To = jQuery('#fund-navigator-iframe').height();
    let documentHeight_To = jQuery(doc).height();

    let x_To = this.coordinateCalculatorService.get_x_coordinate(message.coordinate_x,message.iframeWidth,iframeWidth_To);
    let y_To = this.coordinateCalculatorService.get_y_coordinate(message.coordinate_y,message.iframeHeight,iframeHeight_To);
    let offSetTop_To = this.coordinateCalculatorService.get_offSetTop(message.offsetTop,message.documentHeight,documentHeight_To);
    
    doc['IgnoreScrollEvent'] = true;

    jQuery(this.iframe.nativeElement.contentDocument.getElementById('overlayId') ).removeClass('overlayIframe');

    // jQuery(doc).scrollTop(offSetTop_To);
    jQuery(doc.elementFromPoint(x_To, y_To)).trigger( "focus");
    jQuery(doc.elementFromPoint(x_To, y_To)).trigger( "active");
    jQuery(doc.elementFromPoint(x_To, y_To)).trigger( "click", [ "callback"]);

    jQuery(this.iframe.nativeElement.contentDocument.getElementById('overlayId') ).addClass('overlayIframe');


  }

  private callBackOnScrollMessage(message:MessageModel){
    // console.log('callBackOnScrollMessage');
    let doc =  this.iframe.nativeElement.contentDocument || this.iframe.nativeElement.contentWindow;
    let documentHeight_To = jQuery(doc).height();
    let offSetTop_To = this.coordinateCalculatorService.get_offSetTop(message.offsetTop,message.documentHeight,documentHeight_To);

    doc['IgnoreScrollEvent'] = true;
    jQuery(doc).scrollTop(offSetTop_To);

  }

  private callBackOnOpenFundFactSheetMessage(message:MessageModel){
    this.setSourceIframePDF(message.fund_fact_sheet_url);
    this.showPDFModal();
  }

  private showPDFModal(){
    jQuery('#PDFModal').modal({backdrop: "static"});
  }

  private hidePDFModal(){
    jQuery('#PDFModal').modal('hide');
  }

  public OnPDFModalHidden(){
    this.hidePDFModal();
    this.messageCommunicationService.sendMessageEventFundFactSheet(
       globals.FUND_NAVIGATOR,
       globals.CLOSE_FUND_FACT_SHEET
    );

 
  }

  private setSourceIframePDF(url){
    jQuery('#func-fact-sheet-iframe').attr('src', url);
  }


}
