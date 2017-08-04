import { Injectable, Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'; //for observable

import { Subject } from 'rxjs/Subject';


@Injectable()
export class EmpService {

  public newEmp = new Subject<any>();

  constructor(private http: Http) { }

  getAllEmps(){
    return this.http.get('https://ems-a2.firebaseio.com/.json')
      .map(res => res.json());
  }

  addEmp(data){
    this.newEmp.next(data);
  }
}
