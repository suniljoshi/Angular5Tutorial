import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { EmployeedataService } from '../employeedata.service';

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.scss']
})
export class ViewdetailsComponent implements OnInit {
 
   public employees = []; 
   public employeeId;
   public selectedEmployee;
    
  constructor(private _employeedata: EmployeedataService, private route:ActivatedRoute, private router: Router) {
    this.route.params.subscribe(res =>  this.employeeId = res.id); 
  }

  ngOnInit() {   
   /* this.employees = this._employeedata.employeeDefaultList;
       this.selectedEmployee = this.employees.filter(function(obj) {
        return obj.id == this.employeeId;
    });*/
   
  }
   
}
