import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
  showNavigationSubscription = new Subscription();
  showNavigationBar = false;
  constructor(private navigationService: NavigationService){}

  ngOnInit(){
    this.showNavigationSubscription = this.navigationService.showNavigation.subscribe(
      (show: boolean) => {
        this.showNavigationBar = show;
      }
    );
  }

  ngOnDestroy(){
    this.showNavigationSubscription.unsubscribe();
  }
}
