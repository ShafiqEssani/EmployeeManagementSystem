import { Component, OnInit } from '@angular/core';
import { EmpService } from './../services/emp.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as firebase from 'firebase';


@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.css']
})
export class EditCardComponent implements OnInit {

  id: any;
  Firstname: any;
  Lastname: any;
  PhoneNumber: any;
  Email: any;
  Title: any;
  Dept: any;

  constructor(
    private empService: EmpService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.empService.getCardDetails(this.id)
      .subscribe(data => {
        this.Firstname = data.Firstname;
        this.Lastname = data.Lastname;
        this.PhoneNumber = data.PhoneNumber;
        this.Email = data.Email;
        this.Title = data.Title;
        this.Dept = data.Dept;
      });
  }

  onUpdateSubmit() {

  let card = {
      Firstname: this.Firstname,
      Lastname: this.Lastname,
      PhoneNumber: this.PhoneNumber,
      Email: this.Email,
      Title: this.Title,
      Dept: this.Dept
    }

    this.empService.updateListing(this.id, card);
    this.router.navigate(['/listings']);
  }
}