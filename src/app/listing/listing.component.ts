import { Component, OnInit } from '@angular/core';
import { EmpService } from './../services/emp.service';
import { UtilService } from './../services/util.service';
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
  emps: Array<any>  = [];
  field: string = '';
  
  sortFeild: string = 'Firstname';
  sortDirection: string = 'asc';
  sortFields: Array<string> = [
    'Firstname',
    'Lastname',
    'PhoneNumber',
    'Email',
    'Title',
    'Dept'
  ];
  
  constructor(
    //private http: Http,
    private empService: EmpService,
    private utilService: UtilService
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
