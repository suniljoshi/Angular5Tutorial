import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { EmployeedataService } from '../employeedata.service';
import { ViewdetailsComponent } from '../viewdetails/viewdetails.component';


@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.scss']
})
export class EmployeedetailsComponent implements OnInit {

    
   private employees; 
   private itemCount;
    private remotedata;

    
  constructor(private _employeedata: EmployeedataService, private route:ActivatedRoute, private router: Router) { }
    
    ngOnInit() {
          this.employees = this._employeedata.employeeDefaultList;
          this.itemCount = this.employees.length;
          this._employeedata.getListFromRemote().subscribe(res => this.remotedata = res )
        
         // this._data.goal.subscribe(res=> this.goals =res)
        
        
       
    }
    
    removeEmployee (index){
             this.employees.splice(index,1);
             this.itemCount = this.employees.length;
    }
    
    viewemployee(index){
        this.router.navigate(['views/'+index], {relativeTo: this.route} );
    }

    nestedroute(){
         console.log(this.remotedata)
         this.router.navigate(['firstnested'], {relativeTo: this.route} );
    }
    
    
    
}
