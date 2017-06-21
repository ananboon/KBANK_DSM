import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { MessageCommunicationService } from '../../services/message-communication.service';
import { NavigationService } from '../../services/navigation.service'
import { UserService } from '../../services/user.service';

import * as globals from '../../globals'

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit, OnDestroy{
  @ViewChild('roomId') roomId:ElementRef;

  errorRoom = false;
  errorMessage = '';

  constructor(
    private messageCommunicationService: MessageCommunicationService,
    private userService: UserService,
    private navigationService: NavigationService,
    private router: Router
  ){}

  ngOnInit(){
    this.messageCommunicationService.connectSubject.subscribe((message) => {
      if(message.component === globals.GET_ROOM_STATUS){
        const status = ''+message.message;
        this.errorMessage = status;
        this.errorRoom = true;
      }else if(message.component === globals.SET_CLIENT_ID_TO_SEND_TO){
        this.navigationService.disableNavBarAndUserLoginNavigation();
        this.router.navigate(['/'+globals.HOME]);
      }
    });
  }

  onConnect(){
    const role = globals.CUSTOMER;
    const roomId = this.roomId.nativeElement.value;
    this.messageCommunicationService.connect(role,roomId);
  }

  ngOnDestroy(){

  }
}
