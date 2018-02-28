import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { HeaderComponent } from './header/header.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';

import { EmployeedataService } from './employeedata.service';

import { FilterPipe } from './custom.pipe';
import { ErrorComponent } from './error/error.component';
import { FirstnestedComponent } from './firstnested/firstnested.component';
import { SecondnestedComponent } from './secondnested/secondnested.component';
import { HttpClientModule } from '@angular/common/http';
import { TweetsComponent } from './tweets/tweets.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    EmployeedetailsComponent,
    HeaderComponent,
    FilterPipe,
    ViewdetailsComponent,
    ErrorComponent,
    FirstnestedComponent,
    SecondnestedComponent,
    TweetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeedataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
