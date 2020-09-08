import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/main-view/home/home.component';
import { BillsComponent } from './main/main-view/bills/bills.component';
import { RequestsComponent } from './main/main-view/requests/requests.component';
import { AppointmentsComponent } from './main/main-view/appointments/appointments.component';
import { HouseComponent } from './main/main-view/house/house.component';
import { DocumentsComponent } from './main/main-view/documents/documents.component';

/**
 * @Routes
 * Good practice to declare route into the app-route.module.ts
 */

const appRoutes: Routes = [
  { path: 'accueil', component: HomeComponent },
  { path: 'factures', component: BillsComponent },
  { path: 'requetes', component: RequestsComponent },
  { path: 'rendez-vous', component: AppointmentsComponent },
  { path: 'maison', component: HouseComponent },
  { path: 'documents', component: DocumentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
