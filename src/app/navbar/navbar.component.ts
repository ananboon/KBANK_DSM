import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../services/navigation.service';
import * as globals from '../globals';
declare var jQuery:any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [
  			'../../../node_modules/smartwizard/dist/css/smart_wizard.css',
  			'../../../node_modules/smartwizard/dist/css/smart_wizard_theme_arrows.css',
  			'./navbar.component.css'
  			]
})
export class NavbarComponent implements OnInit{
  constructor(private navigationService: NavigationService){}
    ngOnInit(){
    	console.log('navbar ngOnInit');

  	jQuery(document).ready(function(){

            // Smart Wizard
            jQuery('#smartwizard').smartWizard({ 
                    selected: 1, 
                    theme: 'arrows',
                    transitionEffect:'fade',
                    showStepURLhash: false
            });

            // Smart Wizard
            jQuery(globals.SMARTWIZARD_ID2).smartWizard({ 
                    selected: 1, 
                    theme: 'arrows',
                    transitionEffect:'fade',
                    showStepURLhash: false             
            });

            jQuery("#smartwizard,"+globals.SMARTWIZARD_ID2+"").on("leaveStep", function(e, anchorObject, stepNumber, stepDirection) {
                if(stepDirection === 'backward'){
                	return false;
                }
            });


            jQuery(globals.SMARTWIZARDNAV_ID).hide();
        });   
  }

 
}
