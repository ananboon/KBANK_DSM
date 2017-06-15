import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fund-navigator',
  templateUrl: './fund-navigator.component.html',
  styleUrls: ['./fund-navigator.component.css']
})
export class FundNavigatorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }

  onNext(){
    this.router.navigate(['/customerCheckDocs']);
  }

}
