import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HouseIdentifierComponent } from './auth/house-identifier/house-identifier.component';
import { HouseAdderComponent } from './auth/house-adder/house-adder.component';
import { AuthHomeComponent } from './auth/auth-home/auth-home.component';
import { AuthGuard } from './auth/auth-guard.service';

/**
 * @Routes
 * Good practice to declare route into the app-route.module.ts
 */

const appRoutes: Routes = [
  { path: '', redirectTo: '/auth/home', pathMatch: 'full' },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: 'home', component: AuthHomeComponent },
      { path: 'house-identifier', component: HouseIdentifierComponent },
      { path: 'house-adder', component: HouseAdderComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
