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
import { NotLoggedInComponent } from './content/not-logged-in/not-logged-in.component';

import { CanActivateViaAuthGuardService } from './services/canactivate-via-auth-guard.service';

const routes: Routes = [
  {path: '', component: LoginComponent, canActivate: [CanActivateViaAuthGuardService]},
  {path: 'connect', component: ConnectComponent, canActivate: []},
  {path: 'home', component: BannerComponent, canActivate: []},
  {path: 'profileCard', component: ProfileCardComponent, canActivate: []},
  {path: 'customerConsent', component: CustomerConsentComponent, canActivate: []},
  {path: 'fund-navigator', component: FundNavigatorComponent, canActivate: []},
  {path: 'not-logged-in', component: NotLoggedInComponent, canActivate: []},

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
