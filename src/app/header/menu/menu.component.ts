import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MessageCommunicationService } from '../../services/message-communication.service'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent{
  constructor(
    private router: Router,
    private messageCommunicationService: MessageCommunicationService
  ){}

  onStopRecording(){

  }

  onLogout(){
    
  }
}
