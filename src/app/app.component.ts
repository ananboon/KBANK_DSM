import { Component, OnInit, OnDestroy, Inject, HostListener, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Routes, Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subject } from 'rxjs/Subject';
import { DOCUMENT } from '@angular/platform-browser';
import { Ng2DeviceService } from 'ng2-device-detector';

import { UserService } from './services/user.service';
import { NavigationService } from './services/navigation.service'
import { MessageCommunicationService } from './services/message-communication.service';
import { RecorderService } from './services/recorder.service';

import { MessageModel } from './models/message.model';

import * as globals from './globals';

declare var jQuery:any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private messageCommunicationService: MessageCommunicationService,
    private recorderService: RecorderService,
    private userService: UserService,
    private navigationService: NavigationService,
    private deviceService: Ng2DeviceService,
    private location: Location,
    private router: Router

  ){}


  isMobile = this.deviceService.device !== globals.UNKNOWN;
  showBg = false;

  ngOnInit(){
    this.messageCommunicationService.logoutSubject.subscribe(
      (message) => {
        if(message.component === globals.LOGOUT){
          this.userService.logOut();
          if(!this.isMobile){
            this.router.navigate(['/'+globals.LOGIN]);
          }else{
            this.router.navigate(['/'+globals.CONNECT]);
          }
        }
      }
    );

    this.messageCommunicationService.backgroundSubject.subscribe(
      (message) => {
        if(message.component === globals.BACKGROUND){
          if(message.message === globals.SHOW){
            this.showBg = true;
          }else if(message.message === globals.HIDE){
            this.showBg = false;
          }
        }
      }
    );

    this.messageCommunicationService.recordingSubject.subscribe(
      (message) => {
        if(message.component === globals.STOP_RECORDING){
          if(message.message === globals.TO_HOME){
            this.navigationService.disableNavBarAndUserLoginNavigation();
            this.router.navigate(['/'+globals.HOME]);
          }
        }
      }
    );
  }

  ngAfterViewInit(){

  }

  onStopRecording(){
    this.recorderService.stopRecording();
    jQuery("#stopRecordingModal").modal('hide');

    const component = globals.STOP_RECORDING;
    const message = globals.TO_HOME;

    this.messageCommunicationService.sendMessage(component,message);
    this.navigationService.disableNavBarAndUserLoginNavigation();
    this.router.navigate(['/'+globals.HOME]);
  }

  onLogout(){
    const component = globals.LOGOUT;
    const message = this.userService.user.id;

    const messageModel = new MessageModel();
    messageModel.component = component;
    messageModel.message = message;

    this.messageCommunicationService.sendMessage(component,message);
    this.messageCommunicationService.logoutSubject.next(messageModel);

    jQuery("#logoutModal").modal('hide');

  }

  showBackground(){
    return this.showBg === true ? 'background' : '';
  }

  ngOnDestroy(){

  }
}




// @Component({
//   selector: 'dialog-result-example',
//   templateUrl: 'dialog-result-example.html',
// })
// export class DialogResultExample {
//   selectedOption: string;
//
//   constructor(public dialog: MdDialog) {}
//
//   openDialog() {
//     let dialogRef = this.dialog.open(DialogResultExampleDialog);
//     dialogRef.afterClosed().subscribe(result => {
//       this.selectedOption = result;
//     });
//   }
// }
//
//
// @Component({
//   selector: 'dialog-result-example-dialog',
//   templateUrl: 'dialog-result-example-dialog.html',
// })
// export class DialogResultExampleDialog {
//   constructor(public dialogRef: MdDialogRef<DialogResultExampleDialog>) {}
// }
