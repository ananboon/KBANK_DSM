import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { Ng2DeviceService } from 'ng2-device-detector';

import { UserModel } from '../models/user.model';
import { UserService } from '../services/user.service';
import { RecorderService } from '../services/recorder.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  constructor(
    private userService: UserService,
    private recorderService: RecorderService,
    private deviceService: Ng2DeviceService
  ){}

  userInfoSubscription = new Subscription();
  userInfoHasData = false;
  id:string = '';
  name:string = '';

  ngOnInit(){

    this.userService.userLoggedInSubject.subscribe(
      (user: UserModel) => {
        if(user !== null){
          this.id = user.id;
          this.name = user.name;
          this.userInfoHasData = true;
        }else{
          this.id = null;
          this.name = null;
          this.userInfoHasData = false;
        }
      }
    );
  }

  ngOnDestroy(){

  }
}
