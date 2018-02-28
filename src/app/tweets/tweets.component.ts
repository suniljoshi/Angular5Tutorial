import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { EmployeedataService } from '../employeedata.service';


@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.scss']
})
export class TweetsComponent implements OnInit {

 private remotedata;
    
  constructor(private _employeedata: EmployeedataService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit() {
            this._employeedata.getListFromRemote().subscribe(res => this.remotedata = res )
  }
    comments(id){
        alert(id)
    }

}
