import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { Ng2DeviceService } from 'ng2-device-detector';

import { UserModel } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  userInfoSubscription = new Subscription();
  userInfoHasData = false;
  id:string = '';
  name:string = '';
  isMobile;

  constructor(
    private userService: UserService,
    private deviceService: Ng2DeviceService
  ){}

  ngOnInit(){
    this.userInfoSubscription = this.userService.userLoggedInSubject.subscribe(
      (user: UserModel) => {
        this.id = user.id;
        this.name = user.name;
        this.userInfoHasData = true;
      }
    );

    this.isMobile = this.deviceService.device !== 'unknown';
  }

  ngOnDestroy(){
    this.userInfoSubscription.unsubscribe();
  }
}
