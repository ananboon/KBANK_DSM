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

const routes: Routes = [
  {path: 'login', component: LoginComponent, canActivate: [CanActivateViaAuthGuardService]},
  {path: 'connect', component: ConnectComponent, canActivate: []},
  {path: 'home', component: BannerComponent, canActivate: [CanActivateHomeToCustomerConsentGuardService]},
  {path: 'profileCard', component: ProfileCardComponent, canActivate: [CanActivateHomeToCustomerConsentGuardService]},
  {path: 'customerConsent', component: CustomerConsentComponent, canActivate: [CanActivateHomeToCustomerConsentGuardService]},
  {path: 'userProcedures', component: BannerComponent, canActivate: []},
  {path: 'fundNavigator', component: FundNavigatorComponent, canActivate: []},
  {path: 'customerCheckDocs', component: CustomerCheckDocsComponent, canActivate: []},
  {path: 'paymentAndConfirm', component: PaymentAndConfirmComponent, canActivate: []},
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
