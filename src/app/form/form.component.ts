import { Component, OnInit, ViewChild } from '@angular/core';
import { EmpService } from './../services/emp.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'

declare var firebase: any;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @ViewChild('form') form: NgForm;

  constructor(public empService: EmpService,  private router: Router) { }

  ngOnInit() {
  }

  onEmpSubmit(data): void {
    this.empService.addEmp(data);
    this.form.reset();
    this.router.navigate(['/listings']);
  }

  // fbPostData(data){
  //    firebase.database().ref('/').push({
  //      fname: data.fname,
  //      lname: data.lname,
  //      PhoneNumber: data.PhoneNumber,
  //      Email: data.Email,
  //      Title: data.Title,
  //      Dept: data.Dept,      
  //   });
  // this.form.reset();
  // }
  
}
