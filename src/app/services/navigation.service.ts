import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

export class NavigationService{
  showUserLoginNavigation = true;
  showNavigation = true;

  startTransaction(){
    this.showNavigation = true;
  }
}
