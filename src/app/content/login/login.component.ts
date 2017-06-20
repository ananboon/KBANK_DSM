import { Component, Input, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';


import { UserModel } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { MessageCommunicationService } from '../../services/message-communication.service';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy{
  @ViewChild('loginForm') loginForm: NgForm;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private messageCommunicationService: MessageCommunicationService,
    private navigationService: NavigationService
  ){}

  ngOnInit(){
    this.navigationService.showUserLoginNavigation = true;
  }

  onSubmit(){
    const username:string = this.loginForm.value.username;
    const password:string = this.loginForm.value.password;
    const role = 'RowCounter';

    // this.userService.logIn(username, password);

    // Connect to the room with Id
    this.messageCommunicationService.login(role,username,password);

    // Toggle Navigation off when logged in to home page

    // User promise
    // When user has data then move on to the next page
    this.navigationService.disableNavBarAndUserLoginNavigation();
    this.router.navigate(['/home']);
  }

  ngOnDestroy(){

  }
}
