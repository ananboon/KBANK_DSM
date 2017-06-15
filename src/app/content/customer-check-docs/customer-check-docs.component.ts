import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-check-docs',
  templateUrl: './customer-check-docs.component.html',
  styleUrls: ['./customer-check-docs.component.css']
})
export class CustomerCheckDocsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onNext(){
    this.router.navigate(['paymentAndConfirm']);
  }
}
