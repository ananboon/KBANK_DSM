import { Component, Input, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';


import { UserModel } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { MessageCommunicationService } from '../../services/message-communication.service';

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
    private messageCommunicationService: MessageCommunicationService
  ){}

  ngOnInit(){

  }

  onSubmit(){
    const username:string = this.loginForm.value.username;
    const password:string = this.loginForm.value.password;
    this.userService.logIn(username, password);

    // Connect to the room with Id
    this.messageCommunicationService.roomId = this.userService.user.id;
    this.messageCommunicationService.connect();

    this.router.navigate(['/home']);
  }

  sendMessageToServer(message:string){
    this.messageCommunicationService.sendMessage('login',message);
  }

  ngOnDestroy(){

  }
}
