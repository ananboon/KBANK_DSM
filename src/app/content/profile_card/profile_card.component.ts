import { Component } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile_card.component.html',
  styleUrls: ['./profile_card.component.css']
})
export class ProfileCardComponent{
  name:string = '';
  position:string = '';
  location:string = '';
  id:string = '';

  constructor(private userService: UserService){}

  ngOnInit(){
    this.name = this.userService.user.name;
    this.position = this.userService.user.position;
    this.location = this.userService.user.location;
    this.id = this.userService.user.id;
  }
}
