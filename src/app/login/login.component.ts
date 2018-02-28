import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  private logina = {username:'admin',
                   password:'admin'};
  private data =  {
      username:'admin',
      password:'admin',
      login:false
  }    
  constructor(private route:ActivatedRoute, private router: Router) { }  
  ngOnInit() {
  }
    login(){
        if(this.logina.username=='admin' && this.logina.password=='admin'){
                 this.router.navigate(['dashboard']);
        }
        else alert('Username or password incorrect..!')
    }
}
