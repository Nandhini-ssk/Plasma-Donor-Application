import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CdsModule } from '@cds/angular';
import { ClarityModule } from '@clr/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DonateComponent } from './components/donate/donate.component';
import { CentreComponent } from './components/centre/centre.component';
import { SearchDonorComponent } from './components/search-donor/search-donor.component';
import { AboutComponent } from './components/about/about.component';
import { AwarenessComponent } from './components/awareness/awareness.component';
import { HamburgComponent } from './hamburg/hamburg.component';
import { ActivitesComponent } from './components/activites/activites.component';
import { FoundersComponent } from './components/founders/founders.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { LoginComponent } from './components/login/login.component';

import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DonateComponent,
    CentreComponent,
    SearchDonorComponent,
    AboutComponent,
    AwarenessComponent,
    HamburgComponent,
    ActivitesComponent,
    FoundersComponent,
    ContactUsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    CdsModule,
    ClarityModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
