import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { EmployeedataService } from '../employeedata.service';
import { ViewdetailsComponent } from '../viewdetails/viewdetails.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
    
})
export class DashboardComponent implements OnInit {
    
  public newEmplpoyee = {};
  public employees = [];
  public itemCount;
  
  constructor(private _employeedata: EmployeedataService, private route:ActivatedRoute, private router: Router) { }
  ngOnInit() {
      this.employees = this._employeedata.employeeDefaultList;
      this.itemCount = this.employees.length;
  }
    
    addNewEmplpoyee(){
        this.employees.push(this.newEmplpoyee)
        this.newEmplpoyee = {};
        this.itemCount = this.employees.length;
    }

}
