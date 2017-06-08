import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, CanActivate } from '@angular/router';

import { UserService } from './user.service';

@Injectable()
export class CanActivateViaAuthGuardService implements CanActivate {

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router){}

  canActivate(){
    console.log(this.router.url);
    if(this.router.url !== '/'){
      return !this.userService.userLoggedIn();
    }else{
      return true;
    }

  }
}
