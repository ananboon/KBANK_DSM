import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { MessageCommunicationService } from '../../services/message-communication.service';
import { NavigationService } from '../../services/navigation.service'
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
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
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  constructor(
    private messageCommunicationService: MessageCommunicationService,
    private userService: UserService,
    private navigationService: NavigationService,
    private router: Router
  ){}

  ngOnInit(){

    if(!this.userService.isCurrentUserDevice()){
      this.router.navigate(['/'+globals.LOGIN]);
    }

    this.navigationService.showNavigation = true;
    this.navigationService.showUserLoginNavigation = true;

    this.messageCommunicationService.connectSubject
    .takeUntil(this.ngUnsubscribe)
    .subscribe((message) => {
      if(message.component === globals.GET_ROOM_STATUS){
        const status = ''+message.message;
        this.errorMessage = status;
        this.errorRoom = true;
      }else if(message.component === globals.USER_DATA){
        this.userService.setUser(message.message);
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
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
