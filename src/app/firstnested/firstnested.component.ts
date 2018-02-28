import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-firstnested',
  templateUrl: './firstnested.component.html',
  styleUrls: ['./firstnested.component.scss']
})
export class FirstnestedComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }
 nestedroutesecond(){
         this.router.navigate(['secondnested'], {relativeTo: this.route} );
    }

}
