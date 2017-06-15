import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2DeviceDetectorModule } from 'ng2-device-detector';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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

import { MessageCommunicationService } from './services/message-communication.service';
import { RecorderService } from './services/recorder.service';
import { SharepointService } from './services/sharepoint.service';
import { UserService } from './services/user.service';
import { NavigationService } from './services/navigation.service';
import { CanActivateViaAuthGuardService } from './services/canactivate-via-auth-guard.service';
import { CanActivateHomeToCustomerConsentGuardService } from './services/canactivate-home-to-customer-consent-guard.service';

import { AppRoutingModule } from './app-routing.module';
import { FundNavigatorComponent } from './content/fund-navigator/fund-navigator.component';
import { NotLoggedInComponent } from './content/not-logged-in/not-logged-in.component';
import { CustomerCheckDocsComponent } from './content/customer-check-docs/customer-check-docs.component';
import { PaymentAndConfirmComponent } from './content/payment-and-confirm/payment-and-confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    NavbarComponent,
    ContentComponent,
    LoginComponent,
    BannerComponent,
    ProfileCardComponent,
    ConnectComponent,
    CustomerConsentComponent,
    FundNavigatorComponent,
    NotLoggedInComponent,
    CustomerCheckDocsComponent,
    PaymentAndConfirmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    Ng2DeviceDetectorModule.forRoot(),
    NgbModule.forRoot()
  ],
  providers: [
    MessageCommunicationService,
    RecorderService,
    SharepointService,
    UserService,
    NavigationService,
    CanActivateViaAuthGuardService,
    CanActivateHomeToCustomerConsentGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
