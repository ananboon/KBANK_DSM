import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription'

import { UserModel } from '../models/user.model'
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

  constructor(private userService: UserService){}

  ngOnInit(){
    this.userInfoSubscription = this.userService.userLoggedInSubject.subscribe(
      (user: UserModel) => {
        this.id = user.id;
        this.name = user.name;
        this.userInfoHasData = true;
      }
    );
  }

  ngOnDestroy(){
    this.userInfoSubscription.unsubscribe();
  }
}
