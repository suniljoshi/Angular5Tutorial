import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import {ErrorComponent} from './error/error.component';
import {FirstnestedComponent} from './firstnested/firstnested.component';
import {SecondnestedComponent} from './secondnested/secondnested.component';
import { TweetsComponent } from './tweets/tweets.component';


const routes: Routes = [
 {
     path:'',
     component:LoginComponent
 },
     {
     path:'employees',
     component:EmployeedetailsComponent,
     children:[
         { path:'views/:id', component: ViewdetailsComponent },
         { path:'firstnested', component: FirstnestedComponent, 
         
         children:[{  path:'secondnested', component: SecondnestedComponent }]
         }
     ]
 },
     {
     path:'dashboard',
     component:DashboardComponent
 },
     {
     path:'tweets',
     component:TweetsComponent
 },
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
