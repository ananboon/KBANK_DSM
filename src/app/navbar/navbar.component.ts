import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
  constructor(private navigationService: NavigationService){}

  ngOnInit(){

  }

  ngOnDestroy(){

  }
}
