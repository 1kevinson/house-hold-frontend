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
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
