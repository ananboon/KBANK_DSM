import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import * as globals from '../globals';
declare var jQuery:any;
export class NavigationService{
  showUserLoginNavigation = true;
  showNavigation = true;

  startTransaction(){
    this.showNavigation = true;
  }

  disableNavBarAndUserLoginNavigation(){
    this.showNavigation = false;
    this.showUserLoginNavigation = false;
  }

  nextStep(){
  	jQuery(globals.SMARTWIZARD_ID2).smartWizard("next");
  }
  previousStep(){
  	jQuery(globals.SMARTWIZARD_ID2).smartWizard("prev");
  }
  reset(){
  	 jQuery(globals.SMARTWIZARD_ID2).smartWizard("reset");
  }

  hideNavigationbar(){
    jQuery(globals.SMARTWIZARDNAV_ID).hide();
  }

  showNavigationbar(){
    jQuery(globals.SMARTWIZARDNAV_ID).show();
  }
}
