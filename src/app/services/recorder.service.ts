import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { MessageModel } from '../models/message.model';

import * as RecordRTC from 'recordrtc';
import * as FileSaver from 'file-saver';

import * as globals from '../globals';


export class RecorderService{

  accountName = '';
  accountCIS = '';

  recordRTC: RecordRTC;
  stream;

  public menuSubject = new Subject<MessageModel>();


  record(){
    // const message = new MessageModel();
    // message.component = globals.RECORDER;
    // message.message = globals.SHOW_STOP_RECORDER;
    //
    // this.menuSubject.next(message);
    //
    // let mediaConstraints = {
    //   video: true,
    //   audio: true
    // };
    //
    // navigator.mediaDevices
    //   .getUserMedia(mediaConstraints)
    //   .then(this.successCallback.bind(this), this.errorCallback.bind(this));
  }

  successCallback(stream: MediaStream){
    this.stream = stream;
    var options = {
      mimeType: 'video/webm', // or video/webm\;codecs=h264 or video/webm\;codecs=vp9
      audioBitsPerSecond: 128000,
      videoBitsPerSecond: 128000,
      bitsPerSecond: 128000 // if this line is provided, skip above two
    };
    this.recordRTC = RecordRTC(this.stream, options);
    this.recordRTC.startRecording();

    console.log(window.URL.createObjectURL(stream));

  }

  errorCallback(error){
    console.log(error);
  }

  stopRecording() {
    // let recordRTC = this.recordRTC;
    // let blob = null;
    // recordRTC.stopRecording(
    //   () => {
    //     blob = recordRTC.getBlob();
    //     FileSaver.saveAs(blob, "video.webm");
    //   }
    // );
    //
    // this.stream.getAudioTracks().forEach(track => track.stop());
    // this.stream.getVideoTracks().forEach(track => track.stop());
  }
}
