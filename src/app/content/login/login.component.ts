import { Component, Input, ViewChild, OnInit, OnDestroy,ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { UserModel } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { MessageCommunicationService } from '../../services/message-communication.service';
import { NavigationService } from '../../services/navigation.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { MessageModel } from '../../models/message.model';

import * as globals from '../../globals';
declare var jQuery:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy{
  @ViewChild('loginForm') loginForm: NgForm;
  @ViewChild('iframe') iframe: ElementRef;
  errorMessage = false;
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private messageCommunicationService: MessageCommunicationService,
    private navigationService: NavigationService
  ){}

  ngOnInit(){
    this.navigationService.showNavigation = true;
    this.navigationService.showUserLoginNavigation = true;
    // When user has data then move on to the next page
    this.messageCommunicationService.loginSubject
    .takeUntil(this.ngUnsubscribe)
    .subscribe((message) => {
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
     this.ngUnsubscribe.next();
     this.ngUnsubscribe.complete();
  }

  // onIframeclick(){
  //   console.log('iframe loaded!!');
  //   // let doc =  this.iframe.nativeElement.contentDocument || this.iframe.nativeElement.contentWindow;
  //   // console.log(jQuery("#object1").contents().find("body"));

  //   let iframepos = jQuery("#object1").position();
  //   jQuery('#object1').contents().find('body').on('click', function (e) { 
  //       var x = e.clientX + iframepos.left; 
  //       var y = e.clientY + iframepos.top;
  //       console.log(x + " " + y);
  //   });

  //   jQuery('#object1').on('click', function (e) { console.log('click'); });

  //   console.log( jQuery('#object1').contents().find('body') );
  // }

  // myEvent(event) {
  //   console.log(event);
  // }
}
