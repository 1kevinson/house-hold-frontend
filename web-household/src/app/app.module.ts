import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { ProfileBoxComponent } from './main/profile-box/profile-box.component';
import { NavLinksComponent } from './main/nav-links/nav-links.component';
import { MainViewComponent } from './main/main-view/main-view.component';
import { HomeComponent } from './main/main-view/home/home.component';
import { BillsComponent } from './main/main-view/bills/bills.component';
import { AppRoutingModule } from './app-routing.module';
import { RequestsComponent } from './main/main-view/requests/requests.component';
import { AppointmentsComponent } from './main/main-view/appointments/appointments.component';
import { HouseComponent } from './main/main-view/house/house.component';
import { DocumentsComponent } from './main/main-view/documents/documents.component';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './auth/auth.service';
import { NavService } from './main/nav-links/nav.service';
import { BillService } from './main/main-view/bills/bill.service';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './auth/auth-guard.service';
import { MainRoutingModule } from './main/main-routing.module';
import { HouseAdderComponent } from './auth/house-adder/house-adder.component';
import { HouseIdentifierComponent } from './auth/house-identifier/house-identifier.component';
import { AuthHomeComponent } from './auth/auth-home/auth-home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    ProfileBoxComponent,
    NavLinksComponent,
    MainViewComponent,
    HomeComponent,
    BillsComponent,
    RequestsComponent,
    AppointmentsComponent,
    HouseComponent,
    DocumentsComponent,
    AuthComponent,
    HouseAdderComponent,
    HouseIdentifierComponent,
    AuthHomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MainRoutingModule, FormsModule],
  providers: [AuthService, NavService, BillService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
