import { OktaAuthModule } from '@okta/okta-angular';
import { MaterialModule } from './Material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { HttpClientModule } from '@angular/common/http';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalculatorComponent,
    LoginComponent,
  ],
  imports: [
    OktaAuthModule.initAuth({
      issuer: 'https://{dev-87715483.okta.com}/oauth2/default',
      redirectUri: 'http://localhost:4200/implicit/callback',
      clientId: '{0oa4addd67oGE8oax5d6}',
    }),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    // FlexLayoutModule,
    OktaAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
