import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';


Injectable()
export class MessageCommunicationService{
  public roomId: string;
  private url = 'http://localhost:8080';
  private socket;

  connect(){
    this.socket = io(this.url);

    // Create Room with the user id
    this.socket.emit('joinRoom',this.roomId);

    // Callback when message received
    this.socket.on('message', (data) => {
      console.log(data);
    });
  }

  sendMessage(message) {
    this.socket.emit('add-message', message);
    console.log("MESSAGE SENT");
  }

  // getMessages() {
  //   let observable = new Observable(observer => {
  //     this.socket = io(this.url);
  //     this.socket.on('message', (data) => {
  //       observer.next(data);
  //     });
  //     return () => {
  //       this.socket.disconnect();
  //     }
  //   })
  //   return observable;
  // }

  ngOnDestroy(){
    this.socket.disconnect();
  }
}
