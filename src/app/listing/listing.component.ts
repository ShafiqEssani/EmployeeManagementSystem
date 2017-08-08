import { Component, OnInit } from '@angular/core';
import { EmpService } from './../services/emp.service';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
declare var firebase: any;

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  error: string;
  //emps: Array<any>  = [];
  field: string = '';
  // fields: Array<string> = [
  //   'id',
  //   'fname',
  //   'lname',
  //   'Pno',
  //   'Email',
  //   'Title',
  //   'Dept'
  // ];
  
  emps: any;

  constructor(
    //private http: Http,
    private empService: EmpService
  ) { }

  ngOnInit() {
    // this.empService.getAllEmps()
    //   .subscribe(
    //     data => this.emps = data,
    //     error => this.error = error.statusText
    //   );

    // this.empService.newEmp
    //   .subscribe(
    //     data => this.emps = [data, ...this.emps]
    //   );

    this.empService.getAllEmps()
      .subscribe( data => {
        this.emps = data,
        error => this.error = error.statusText
      });
      console.log(this.emps);

    //this.fbGetData();
   }
 
  //  fbGetData(){
  //   firebase.database().ref('/').on('child_added', ( snapshot ) => {
  //      this.emps.push(snapshot.val());
  //      console.log(snapshot.val());
  //    })
  // }

}
