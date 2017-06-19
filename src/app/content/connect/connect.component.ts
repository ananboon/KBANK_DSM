import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { MessageCommunicationService } from '../../services/message-communication.service';
import { NavigationService } from '../../services/navigation.service'
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit, OnDestroy{
  @ViewChild('roomId') roomId:ElementRef;

  constructor(
    private messageCommunicationService: MessageCommunicationService,
    private userService: UserService,
    private navigationService: NavigationService,
    private router: Router
  ){}

  ngOnInit(){

  }

  onConnect(){
    const role = 'Customer'
    const roomId = this.roomId.nativeElement.value;
    this.messageCommunicationService.connect(role,roomId);

    this.userService.logIn('a', 'a');

    this.navigationService.disableNavBarAndUserLoginNavigation();

    this.router.navigate(['/home']);
  }

  ngOnDestroy(){

  }
}
