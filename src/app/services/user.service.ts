import { Injectable,OnInit } from '@angular/core';
import { Subject} from 'rxjs/Subject';
import { Ng2DeviceService } from 'ng2-device-detector';

import { UserModel } from '../models/user.model';
import * as globals from '../globals';

import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
  userLoggedInSubject = new Subject<UserModel>();
  user: UserModel = null;
  private roomUrl = globals.NODEJS_URL+'/api/room';
  constructor(
    private deviceService: Ng2DeviceService,
    private http: Http,
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

  // getNumberOfPeopleInRoom(): Promise<void | number> {
  //     return this.http.get(this.roomUrl+'/1')
  //                .toPromise()
  //                .then(response => response.json() as number)
  //                .catch(this.handleError);
  //   }

  // private handleError (error: any) {
  //   let errMsg = (error.message) ? error.message :
  //   error.status ? `${error.status} - ${error.statusText}` : 'Server error';
  //   console.error(errMsg); // log to console instead
  // }
}
