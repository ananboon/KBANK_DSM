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
import { RowCounterUDComponent } from './content/rowcounter-ud/rowcounter-ud.component';
import { EndTransactionConfirmationComponent } from './content/end-transaction-confirmation/end-transaction-confirmation.component';

import { CanActivateViaAuthGuardService } from './services/canactivate-via-auth-guard.service';
import { CanActivateHomeToCustomerConsentGuardService } from './services/canactivate-home-to-customer-consent-guard.service';

import * as globals from './globals';

// Change the name corresponding to globals
const routes: Routes = [
  {path: globals.LOGIN, component: LoginComponent, canActivate: [CanActivateViaAuthGuardService]},
  {path: globals.CONNECT, component: ConnectComponent, canActivate: []},
  {path: globals.HOME, component: BannerComponent, canActivate: [CanActivateHomeToCustomerConsentGuardService]},
  {path: globals.PROFILE_CARD, component: ProfileCardComponent, canActivate: [CanActivateHomeToCustomerConsentGuardService]},
  {path: globals.CUSTOMER_CONSENT, component: CustomerConsentComponent, canActivate: [CanActivateHomeToCustomerConsentGuardService]},
  {path: globals.ROWCOUNTER_PROCEDURES, component: BannerComponent, canActivate: [CanActivateHomeToCustomerConsentGuardService]},
  {path: globals.FUND_NAVIGATOR, component: FundNavigatorComponent, canActivate: [CanActivateHomeToCustomerConsentGuardService]},
  {path: globals.ROWCOUNTER_UD, component: RowCounterUDComponent, canActivate: [CanActivateHomeToCustomerConsentGuardService]},
  {path: globals.END_TRANSACTION, component: EndTransactionConfirmationComponent, canActivate: [CanActivateHomeToCustomerConsentGuardService]},
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
