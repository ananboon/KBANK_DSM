import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

export class NavigationService{
  showNavigation = new Subject<boolean>();

  startTransaction(){
    this.showNavigation.next(true);
  }

  endTransaction(){
    this.showNavigation.next(false);
  }
}
