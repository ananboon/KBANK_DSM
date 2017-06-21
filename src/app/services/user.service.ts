import { Injectable,OnInit } from '@angular/core';
import { Subject} from 'rxjs/Subject';

import { UserModel } from '../models/user.model'

@Injectable()
export class UserService {
  userLoggedInSubject = new Subject<UserModel>();
  user: UserModel = null;

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
    this.user = null;
  }
}
