import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './header/menu/menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './content/login/login.component';
import { BannerComponent } from './content/banner/banner.component';
import { ProfileCardComponent } from './content/profile_card/profile_card.component';
import { ConnectComponent } from './content/connect/connect.component';
import { CustomerConsentComponent } from './content/customer_consent/customer_consent.component';
import { FundNavigatorComponent } from './content/fund-navigator/fund-navigator.component';
import { CustomerCheckDocsComponent } from './content/customer-check-docs/customer-check-docs.component';
import { PaymentAndConfirmComponent } from './content/payment-and-confirm/payment-and-confirm.component';
import { NotLoggedInComponent } from './content/not-logged-in/not-logged-in.component';

import { CanActivateViaAuthGuardService } from './services/canactivate-via-auth-guard.service';
import { CanActivateHomeToCustomerConsentGuardService } from './services/canactivate-home-to-customer-consent-guard.service';

import * as globals from './globals';

// Change the name corresponding to globals
const routes: Routes = [
  {path: globals.LOGIN, component: LoginComponent, canActivate: [CanActivateViaAuthGuardService]},
  {path: globals.CONNECT, component: ConnectComponent, canActivate: []},
  {path: globals.HOME, component: BannerComponent, canActivate: []},
  {path: globals.PROFILE_CARD, component: ProfileCardComponent, canActivate: []},
  {path: globals.CUSTOMER_CONSENT, component: CustomerConsentComponent, canActivate: []},
  {path: globals.ROWCOUNTER_PROCEDURES, component: BannerComponent, canActivate: []},
  {path: globals.FUND_NAVIGATOR, component: FundNavigatorComponent, canActivate: []},
  {path: globals.ROWCOUNTER_UD, component: CustomerCheckDocsComponent, canActivate: []},
  {path: globals.CUSTOMER_CHECK, component: PaymentAndConfirmComponent, canActivate: []},
  {path: '**', component: LoginComponent, canActivate: [CanActivateHomeToCustomerConsentGuardService]}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule{

}
