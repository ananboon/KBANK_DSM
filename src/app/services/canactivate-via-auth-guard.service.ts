import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, CanActivate } from '@angular/router';
import { Ng2DeviceService } from 'ng2-device-detector';

import { UserService } from './user.service';

@Injectable()
export class CanActivateViaAuthGuardService implements CanActivate {

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private deviceService: Ng2DeviceService
  ){}

  canActivate(){
    // If the device is a mobile device then redirect to connect page
    // Need to change to if device is mobile and connected then redirect to landing page
    console.log('canActiveGuard')
    if(this.deviceService.device !== 'unknown'){
      this.router.navigate(['/connect']);
      return false;
    }

    // If the device is PC and not logged in then allow login page but do not allow other page
    // If the device is PC and logged in then do not allow login page but allow all other page
    if(this.userService.user === null){
      console.log('user is not logged in')
      return true;
    }else{
      console.log('user is logged in')
      this.router.navigate(['/home']);
      return false;
    }



  }
}
