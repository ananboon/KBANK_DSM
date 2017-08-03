import { Injectable,OnInit } from '@angular/core';
import { Subject} from 'rxjs/Subject';
import { Ng2DeviceService } from 'ng2-device-detector';

import { UserModel } from '../models/user.model';
import * as globals from '../globals';

@Injectable()
export class UserService {
  userLoggedInSubject = new Subject<UserModel>();
  user: UserModel = null;

  constructor(
    private deviceService: Ng2DeviceService,
  ){}

  setUser(message){
    const id = message.id;
    const name = message.firstname + ' ' + message.lastname;
    const position = message.position;
    const location = message.location;
    this.user = new UserModel(id,name,position,location);

    this.userLoggedInSubject.next(this.user);
  }

  userLoggedIn(){
    return this.user != null;
  }

  logOut(){
    window.location.reload();
    this.user = null;
    this.userLoggedInSubject.next(null);
  }

  isCurrentUserDevice(){
     return  this.deviceService.device !== globals.UNKNOWN;
  }
}
