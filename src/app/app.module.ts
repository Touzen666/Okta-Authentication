import { Router, RouterModule } from '@angular/router';
import { OktaAuthService } from './okta-auth.service';
import { OktaAuthGuard } from './app.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule.forRoot([
      {
        path: 'team/:id',
        component: OktaAuthGuard,
        canActivate: [OktaAuthGuard],
      },
    ]),
    BrowserModule,
    AppRoutingModule,
    OktaAuthGuard,
  ],
  providers: [OktaAuthGuard, OktaAuthService, Router],
  bootstrap: [AppComponent],
})
export class AppModule {}
