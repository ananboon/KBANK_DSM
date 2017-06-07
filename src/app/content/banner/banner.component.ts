import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';

import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent{
  transactionStarted = new Subject<boolean>();

  constructor(private navigationService: NavigationService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(){

  }

  onStartTransaction(){
    this.navigationService.startTransaction();
    this.router.navigate(['/profileCard']);
  }
}
