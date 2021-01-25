import { Router, RouterModule } from '@angular/router';
import { OktaAuthService } from './okta-auth.service';
import { OktaAuthGuard } from './app.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: HelloComponent,
        canActivate: [OktaAuthGuard],
      },
    ]),
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [OktaAuthGuard, OktaAuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
