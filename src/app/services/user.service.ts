import { OnInit } from '@angular/core';
import { Subject} from 'rxjs/Subject';

import { UserModel } from '../models/user.model'

export class UserService {
  userLoggedInSubject = new Subject<UserModel>();
  user: UserModel = null;

  setUser(userInfo: UserModel){
    this.user = userInfo;
  }

  logIn(userName:string, password:string){

    // Query Database to fetch user data

    this.user = new UserModel('1','กสิกร รักไทย','head of everything','BE8');
    this.userLoggedInSubject.next(this.user);
  }

  userLoggedIn(){
    return this.user != null;
  }

  logOut(){
    this.user = null;
  }
}
