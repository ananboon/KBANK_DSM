import { Component, OnInit, OnDestroy, Inject, HostListener } from '@angular/core';
import { Routes, Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subject } from 'rxjs/Subject';
import { DOCUMENT } from '@angular/platform-browser';


import { MessageCommunicationService } from './services/message-communication.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private messageCommunicationService: MessageCommunicationService,
    private location: Location
  ){}

  ngOnInit(){

  }

  ngOnDestroy(){

  }

  // @HostListener('window:popstate',['$event'])
  // onPopState(event){
  //
  // }
  // @HostListener("window:scroll", [''])
  // onWindowScroll(){
  //   const position = this.document.body.scrollTop;
  //   if(this.messageCommunicationService.clientToSendTo != undefined){
  //     this.messageCommunicationService.sendMessage('scroll',position);
  //   }
  // }
}
