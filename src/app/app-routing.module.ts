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

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'connect', component: ConnectComponent},
  {path: 'home', component: BannerComponent},
  {path: 'profileCard', component: ProfileCardComponent},
  {path: 'customerConsent', component: CustomerConsentComponent},
  {path: 'fund-navigator', component: FundNavigatorComponent}

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
