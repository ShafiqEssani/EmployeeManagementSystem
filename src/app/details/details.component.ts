import { Component, OnInit } from '@angular/core';
import { EmpService } from '../services/emp.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id: any;

  constructor(
    private fbs: EmpService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

  }

  check() { 
    this.id = this.route.snapshot.params.id;
    console.log(this.id);
  }


}
