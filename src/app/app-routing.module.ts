import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OktaCallbackComponent, OktaAuthGuard } from '@okta/okta-angular';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  { path: 'implicit/callback', component: OktaCallbackComponent },
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'calculator',
    component: CalculatorComponent,
    canActivate: [OktaAuthGuard],
    data: { onAuthRequired },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export function onAuthRequired({ oktaAuth, router }) {
  router.navigate(['/login']);
}
