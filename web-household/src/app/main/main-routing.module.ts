import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestsComponent } from './main-view/requests/requests.component';
import { AppointmentsComponent } from './main-view/appointments/appointments.component';
import { HomeComponent } from './main-view/home/home.component';
import { HouseComponent } from './main-view/house/house.component';
import { BillsComponent } from './main-view/bills/bills.component';
import { DocumentsComponent } from './main-view/documents/documents.component';
import { AuthGuard } from '../auth/auth-guard.service';
import { MainComponent } from './main.component';

/**
 * @Routes
 * Good practice to declare route into the app-route.module.ts
 */

const routes: Routes = [
  {
    path: 'app',
    component: MainComponent,
    children: [
      { path: 'accueil', component: HomeComponent },
      {
        path: 'factures',
        canActivate: [AuthGuard],
        component: BillsComponent,
      },
      { path: 'requetes', component: RequestsComponent },
      { path: 'rendez-vous', component: AppointmentsComponent },
      { path: 'maison', component: HouseComponent },
      { path: 'documents', component: DocumentsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}