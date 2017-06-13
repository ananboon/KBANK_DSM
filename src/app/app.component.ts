import { Component, OnInit, Inject, HostListener } from '@angular/core';
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
export class AppComponent {

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private messageCommunicationService: MessageCommunicationService,
    private location: Location
  ){}

  ngOnInit(){
    this.messageCommunicationService.scrollSubject.subscribe((position) => {
      this.document.body.scrollTop = +position;
    });
  }

  @HostListener("window:scroll", [''])
  onWindowScroll(){
    const position = this.document.body.scrollTop;
    if(this.messageCommunicationService.clientToSendTo != undefined){
      this.messageCommunicationService.sendMessage('scroll',position);
    }
  }
}
