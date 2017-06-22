import { Component, OnInit, OnDestroy, Inject, HostListener, ViewChild } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Routes, Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subject } from 'rxjs/Subject';
import { DOCUMENT } from '@angular/platform-browser';



import { MessageCommunicationService } from './services/message-communication.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private messageCommunicationService: MessageCommunicationService,
    private location: Location
  ){}

  ngOnInit(){

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
