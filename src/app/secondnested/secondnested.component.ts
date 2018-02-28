import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';



@Component({
  selector: 'app-secondnested',
  templateUrl: './secondnested.component.html',
  styleUrls: ['./secondnested.component.scss']
})
export class SecondnestedComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

}
