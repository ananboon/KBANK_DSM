import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs/Subscription';

import { UserService } from '../../services/user.service';
import { MessageCommunicationService } from '../../services/message-communication.service'

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile_card.component.html',
  styleUrls: ['./profile_card.component.css']
})
export class ProfileCardComponent implements OnInit{
  name:string = '';
  position:string = '';
  location:string = '';
  id:string = '';

  constructor(
    private userService: UserService,
    private messageCommunicationService: MessageCommunicationService,
    private router: Router,
    private locationRoute: Location
  ){}

  ngOnInit(){
    this.name = this.userService.user.name;
    this.position = this.userService.user.position;
    this.location = this.userService.user.location;
    this.id = this.userService.user.id;

    this.messageCommunicationService.profileCardComponentSubject.subscribe(
      (message) => {
        this.router.navigate(['customerConsent']);
      }
    );
  }

  onNext(){
    this.messageCommunicationService.sendMessage('profile-card','toCustomerConsent');
    this.router.navigate(['/customerConsent']);
  }

  onBack(){
    this.locationRoute.back();
  }
}
