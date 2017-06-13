import { Component, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { RecorderService } from '../../services/recorder.service'

@Component({
  selector: 'app-customer-consent',
  templateUrl: './customer_consent.component.html',
  styleUrls: ['./customer_consent.component.css']
})
export class CustomerConsentComponent{
  @ViewChild('consentForm') consentForm: NgForm;

  constructor(private recorderService: RecorderService, private route: ActivatedRoute, private router: Router){}

  onConsentClick(allowRecording: boolean){
    this.recorderService.record(allowRecording);
    this.router.navigate(['userProcedures']);
  }
}
