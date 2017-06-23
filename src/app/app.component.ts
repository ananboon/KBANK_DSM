import { Component, OnInit, OnDestroy, Inject, HostListener, ViewChild, AfterViewInit } from '@angular/core';
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

import * as globals from './globals';


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

  ngOnInit(){
    console.log('tests');
    this.messageCommunicationService.logoutSubject.subscribe(
      (message) => {
        console.log('test');
        if(message.component === globals.LOGOUT){
          if(message.message === globals.LOGOUT){
            this.userService.user = null;
            if(!this.isMobile){
              this.router.navigate(['/'+globals.LOGIN]);
            }else{
              this.router.navigate(['/'+globals.CONNECT]);
            }
          }
        }
      }
    );
  }

  ngAfterViewInit(){

  }

  startRecording(){
    this.recorderService.record();
  }

  stopRecording(){
    this.recorderService.stopRecording();
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
