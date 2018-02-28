import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class EmployeedataService {
    public employeeDefaultList =  [{id:0,fname:'Sunil',lname:'Joshi',email:'suniljoshi3101@gmail.com'},
                                   {id:1,fname:'ANil',lname:'Joshi',email:'ss@gmail.com'},
                                    {id:2,fname:'Shyam',lname:'Joshi',email:'dd@gmail.com'},
                                   {id:3,fname:'Mukesh',lname:'Joshi',email:'ff@gmail.com'},
                                   {id:4,fname:'sddss',lname:'wewee',email:'ds@gmail.com'}];
    
    public employees = this.employeeDefaultList 
    public remoteUrl = 'https://jsonplaceholder.typicode.com/posts';
   // public employees = new BehaviorSubject<any>(this.employeeDefaultList);    
   // private employee =  this.employees.asObservable(); 
    
    constructor(private http: HttpClient ) { }
    
    getListFromRemote(){ 
        return this.http.get(this.remoteUrl)
    }

}
