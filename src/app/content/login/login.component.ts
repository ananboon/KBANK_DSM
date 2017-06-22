import { Component, Input, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { UserModel } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { MessageCommunicationService } from '../../services/message-communication.service';
import { NavigationService } from '../../services/navigation.service';

import * as globals from '../../globals';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy{
  @ViewChild('loginForm') loginForm: NgForm;
  errorMessage = false;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private messageCommunicationService: MessageCommunicationService,
    private navigationService: NavigationService
  ){}

  ngOnInit(){

    this.navigationService.showUserLoginNavigation = true;
    // When user has data then move on to the next page
    this.messageCommunicationService.loginSubject.subscribe((message) => {
      const component = message.component;
      const body = message.message;
      if(component === globals.LOGIN_ERROR){
        this.errorMessage = true;
      }else if(component === globals.USER_DATA){
        this.errorMessage = false;
        this.userService.setUser(message.message);
        this.navigationService.disableNavBarAndUserLoginNavigation();
        this.router.navigate(['/'+globals.HOME]);
      }
    });
  }

  onSubmit(){
    const role = globals.ROWCOUNTER;
    const username:string = this.loginForm.value.username;
    const password:string = this.loginForm.value.password;

    // Connect to the room with Id
    this.messageCommunicationService.login(role,username,password);

  }

  ngOnDestroy(){
    
    // this.messageCommunicationService.loginSubject.unsubscribe();
  }
}
